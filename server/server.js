import express from "express";
import flash from 'express-flash';
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from './routes/UserRoutes.js'
import bodyParser from "body-parser";
import AuthRoute from "./routes/AuthRoute.js";
import ExternalAPIRoute from "./routes/ExtternalAPIRoute.js"

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }))
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





// (async () => {
//     await db.sync();
// })();

app.use(flash());


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    // origin: 'http://172.25.164.15:3000',
    origin: ['http://localhost:4434', 'https://oucedsa-am.cwbyminsait.com']
    // origin: 'https://oucedsa-am.cwbyminsait.com',
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static("public"));
app.use(express.json())
app.use(UserRoute);
app.use(AuthRoute)
app.use(ExternalAPIRoute)


// app.post('/convert', (req, res) => {
//     const { time1, time2 } = req.body;

//     const unixTime1 = moment(time1, 'YYYY-MM-DD HH:mm:ss').unix();
//     const unixTime2 = moment(time2, 'YYYY-MM-DD HH:mm:ss').unix();

//     res.json({ unixTime1, unixTime2 });
//     console.log(unixTime1, unixTime2)
// });



























// const PORT = process.env.PORT || 3333;
// app.listen(PORT, (error) => {
//     error ? console.error(error) : console.log(`server running on port \n http://172.25.164.15:${PORT}`);
// });


export default app;