import express from "express";
import request from 'request-promise';
import cors from "cors"
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateTokenUser,
  deleteUser,
} from "../controller/UsersControllers.js";
import GetVendor from "../model/GetVendorModel.js";
import VenShiftEnquiries from "../model/VenShitEnquiriesModel.js";
import { resetPasswordToken, forgotPassword } from '../controller/ResetPasswordController.js'
// import { sendEmail } from "../controller/PasswordControllers";
import { verifyUser, adminOnly } from "../middleware/AuthUsers.js";
import { createVendor, vendorById, updateVendor } from "../controller/GetVendorController.js";
import moment from "moment"
import { VenShiftEnquiriesById, getVenShiftEnquiries, createVenShiftEnquiries } from "../controller/VenShitEnquiriesController.js";
const router = express.Router();


router.get('/vendor', (req, res) => {
  GetVendor.findAll().then(users => {
    res.json(users);
  });
});

router.post('/vendor', createVendor)

router.patch('/vendor/:id', updateVendor)
router.get('/vendor/:id', vendorById)


router.get('/venShiftEnquiriesGet/', getVenShiftEnquiries)
router.post('/venShiftEnquiriesPost/', createVenShiftEnquiries)
router.get('/venShiftEnquiriesPatch/:id', VenShiftEnquiriesById)



router.post('/forgotPassword', forgotPassword)
router.post('/reset-password/:token', resetPasswordToken)


router.get('/users', verifyUser, adminOnly, getUsers,);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.patch('/usersUpdate/:token', updateTokenUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);


router.get('/convert', (req, res) => {
  const firstSearch = req.query.start;
  const secondSearch = req.query.end;

  const startUnix = moment(firstSearch, 'YYYY-MM-DD HH:mm:ss').unix() * 1000;
  const endUnix = moment(secondSearch, 'YYYY-MM-DD HH:mm:ss').unix() * 1000;
  const thirdSearch = req.query.thirdSearch;

  res.json({ start: startUnix, end: endUnix, thirdSearch: thirdSearch });
  console.log(res)
});

router.get('/convertSingle', (req, res) => {
  const firstSearch = req.query.start;
  const startUnix = moment(firstSearch, 'YYYY-MM-DD HH:mm:ss').unix()*1000;
  res.json({ start: startUnix });
  console.log(res)
});


router.patch("/update/:id", async (req, res) => {
  try {
    const start = moment(req.body.dateFrom, 'YYYY-MM-DDTHH:mm:ss.sssZ');
    const end = moment(req.body.dateTo, 'YYYY-MM-DDTHH:mm:ss.sssZ');

    let startUnixTime, endUnixTime;
    if (start.isValid() && end.isValid()) {
      startUnixTime = start.valueOf();
      endUnixTime = end.valueOf();
    } else {
      return res.status(400).send({ message: "Invalid date format" });
    }

    const result = await GetVendor.update(
      { meterSerial: req.body.meterSerialNumber,
        dateFrom: startUnixTime,
        dateTo: endUnixTime 
      },
      { where: { id: req.params.id } }
    );
    if (result[0] === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ message: "User updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }

});


//venShiftEnquiries
router.patch("/venShiftEnquiriesPatch/:id", async (req, res) => {
  try {
    const start = moment(req.body.paymentDate, 'YYYY-MM-DDTHH:mm:ss.sssZ');
    let startUnixTime;
    if (start.isValid()){
      startUnixTime = start.valueOf();
    } else {
      return res.status(400).send({ message: "Invalid date format" });
    }

    const [updatedRowsCount] = await VenShiftEnquiries.update(
      { 
        paymentDate: startUnixTime,
      },
      { where: { id: req.params.id } }
    );
    if (updatedRowsCount === 0) {
      return res.status(404).send({ message: "Data Not Found" });
    }
    return res.status(200).send({ message: "Updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});







export default router;