// import { Sequelize } from "sequelize";
import db from "../config/Database.js";

import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;



const GetVendor = db.define('vendor', {

    meterSerial: {
        type: DataTypes.STRING,
        validate: {
            len: [11]
        }
    },
    dateFrom: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },
    dateTo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    // freezeTableName: true
});

export default GetVendor;


