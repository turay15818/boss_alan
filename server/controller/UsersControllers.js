import User from "../model/UserModel.js";

// import argon2 from "argon2";
import bcrypt from 'bcrypt'
export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'staffId', 'name', 'email', 'phoneNumber', 'role', 'createdAt'],

        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            attributes: ['id', 'staffId', 'name', 'email', 'phoneNumber', 'role'],
            where: {
                id: req.params.id
            },


        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createUser = async (req, res) => {
    const { staffId, name, email, phoneNumber, password, confPassword, role } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
    // const hashPassword = await argon2.hash(password);
    const hashedPass = bcrypt.hashSync(password, 10)
    try {
        await User.create({
            staffId: staffId,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPass,
            role: role,
        });
        res.status(201).json({ msg: "Register Successful" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id,
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    const { staffId, name, email, phoneNumber, password, confPassword, role } = req.body;
    // let hashPassword;
    let hashedPass;
    if (password === "" || password === null) {
        hashedPass = user.password
    } else {
        hashedPass = bcrypt.hashSync(password, 10)
    }
    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
    try {
        await User.update({

            staffId: staffId,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPass,
            role: role,
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


export const updateTokenUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            token: req.params.id,
            token: req.params.token
        }
    });
    const { password, confPassword } = req.body;
    // let hashPassword;
    let hashedPass;
    if (password === "" || password === null) {
        // hashPassword = user.password
        hashedPass = user.password
    } else {
        // hashPassword = await argon2.hash(password);
        hashedPass = await argon2.hash(password);
    }
    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
    try {
        await User.update({

            // password: hashPassword,
            password: hashedPass,
        }, {
            where: {
                token: req.params.id,
                token: req.params.token
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}



export const deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });

    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}






// TODO

