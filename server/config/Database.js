import { Sequelize } from "sequelize";

const db = new Sequelize('login', 'root', '!Love2code', {
    host: "localhost",
    port: 3306,
    // host: "localhost",
    dialect: "mysql"
});

// const db = new Sequelize('complain', 'root', 'Orange;sl;', {
//     host: "localhost",
//     // host: "localhost",
//     dialect: "mysql"
// });

export default db
