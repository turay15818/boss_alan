import User from "../model/UserModel.js";
import bcrypt from 'bcrypt'
import rateLimit from "express-rate-limit";

export const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    // const match = await argon2.verify(user.password, req.body.password);
    const comparePassword = await bcrypt.compare(req.body.password, user.password)
    if (!comparePassword) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.id;
    const id = user.id;
    const staffId = user.staffId;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    const phoneNumber = user.phoneNumber;
    res.status(200).json({ id, staffId, name, email, phoneNumber, role });
}

export const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Please login to your account!" });
    }
    const user = await User.findOne({
        attributes: ['id', 'staffId', 'name', 'email', 'phoneNumber', 'role'],
        where: {
            id: req.session.userId
        }
    });

    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Can't log out" });
        res.status(200).json({ msg: "You have logged out" });
    });
}


export const loginAccountLimiter = rateLimit({
    windowMs: 3 * 60 * 60 * 1000, // 3 hour duration in milliseconds
    max: 50000000000, // Limit each IP to 5 create account requests per `window` (here, 3 hours)
    message: { msg: "Too many requests made from this IP, please try again after 12 hrs" },
    standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});