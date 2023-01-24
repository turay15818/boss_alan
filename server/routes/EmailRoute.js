import express from "express";
import {
    getEmail,
    getEmailById,
    createEmail,
    deleteEmail,
} from "../controller/EmailControllers.js";
import { verifyUser, adminOnly } from "../middleware/AuthUsers.js";

const router = express.Router();



router.get('/email', getEmail,);
router.get('/email/:id', verifyUser, adminOnly, getEmailById);
router.post('/email', createEmail);
router.delete('/email/:id', verifyUser, adminOnly, deleteEmail);


export default router;