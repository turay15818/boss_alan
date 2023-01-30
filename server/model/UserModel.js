// import { Sequelize } from "sequelize";
import db from "../config/Database.js";

import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;



const Users = db.define('users', {

    userUId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    staffId: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [9, 13],
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true

        }
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [8, 100],
        }
    },

    token: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },

    resetPasswordToken: {
        type: DataTypes.STRING,
    },
    resetPasswordExpires: {
        type: DataTypes.STRING,
    },
}, {
    // freezeTableName: true
});

export default Users;


