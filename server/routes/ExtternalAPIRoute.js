import request from "request-promise"
import express from "express"
import got from "got";
import { pipeline } from 'stream'
import axios from "axios"

const router = express.Router()
//Completed
router.post('/generateToken', (req, res) => {
    const options = {
        uri: "https://oucedsa-am.cwbyminsait.com/token?grant_type=password&username=100036%23orngcld&password=orngcld123&scope=token_public token_private ststoken_public",
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic MklNRDdYME5QY1JGTEZoMWpjQ092MlRtakRJYTp3ODBDSmJpa3pQUEQ0TXZ1Q0VwZmV2ekN0WXNh",
        }
    };
    request(options, (error, response, body) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
        } else {
            console.log(body);
            const parsedData = JSON.parse(response.body);
            res.status(200).json(parsedData);
            console.log(response)
        }
    });
});

//Completed
router.get('/venInfoVendor/1.0.1/', async (req, res) => {
    try {
        const response = await axios.get('https://oucedsa-am.cwbyminsait.com/venInfoVendor/1.0.1/', {
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-Incms-Origin-D": "100036#orngcld",
                "Authorization": "Bearer " + req.headers.musa,
            }
        });
        res.status(200).json(response.data);
        console.log(response.data)
        console.log(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//completed
router.get('/vvenCustomerEnquiries', async (req, res) => {
    try {
        const response = await axios.get('https://oucedsa-am.cwbyminsait.com/venCustomerEnquiries/1.0.1/?meterSerial=54180169259&dateFrom=1668560400000&dateTo=1668690000000', {
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-Incms-Origin-D": "100036#orngcld",
                "Authorization": "Bearer 1fd94bae-4bbf-3231-8380-993df91f4d18",
            }
        });
        res.status(200).json(response.data);
        console.log(response.data)
        console.log(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Completed
router.get('/venCustomersEnquiries', async (req, res) => {
    try {
        const response = await axios.get(`https://oucedsa-am.cwbyminsait.com/venCustomerEnquiries/1.0.1/`, {
            params: {
                "meterSerial": req.headers.meter,
                "dateFrom": req.headers.from,
                "dateTo": req.headers.to,
            },
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-Incms-Origin-D": "100036#orngcld",
                "Authorization": "Bearer " + req.headers.musa,
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});




router.get('/venShitEnquiriesAPI', async (req, res) => {
    try {
        const response = await axios.get("https://oucedsa-am.cwbyminsait.com/venShitEnquiries/1.0.1/", {
            params: {
                // "codUserShift":req.body.codUser,
                "codUserShift": "orngcld",
                // "paymentDate": 1668560400000,
                "paymentDate": req.headers.payment,
            },
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-Incms-Origin-D": "100036#orngcld",
                "Authorization": "Bearer " + req.headers.musa,
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});


export default router



