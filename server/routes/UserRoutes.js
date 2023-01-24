import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    updateTokenUser,
    deleteUser,
} from "../controller/UsersControllers.js";
// import { sendEmail } from "../controller/PasswordControllers";
import { verifyUser, adminOnly } from "../middleware/AuthUsers.js";
import moment from "moment";
const router = express.Router();




// send password link
// router.post('/sendpasswordlink', sendEmailLink);



router.get('/users', verifyUser, adminOnly, getUsers,);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users',  createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.patch('/usersUpdate/:token', updateTokenUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);


router.get('/convert', (req, res) => {
    const firstSearch = req.query.start;
    const secondSearch = req.query.end;
    
    const startUnix = moment(firstSearch, 'YYYY-MM-DD HH:mm:ss').unix();
    const endUnix = moment(secondSearch, 'YYYY-MM-DD HH:mm:ss').unix();
    
    res.json({ start: startUnix, end: endUnix });
    console.log(res)
  });

export default router;