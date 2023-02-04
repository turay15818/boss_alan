// import { Sequelize } from "sequelize";
import db from "../config/Database.js";

import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const VenShiftEnquiries = db.define('venShiftEnquiries', {

    paymentDate: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
});

export default VenShiftEnquiries;


