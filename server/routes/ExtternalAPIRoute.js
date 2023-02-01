import request from "request-promise"
import express from "express"
import got from "got";
import { pipeline } from 'stream'
import axios from "axios"

const router = express.Router()

router.get('/venInfoVendor/1.0.1/', async (req, res) => {
    try {
        const response = await axios.get('https://oucedsa-am.cwbyminsait.com/venInfoVendor/1.0.1/', {
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-Incms-Origin-D": "100036#orngcld",
                "Authorization": "Bearer ce0cee2c-e5fb-3cfc-bf63-17d931cced67",
            }
        });
        res.status(200).json(response.data);
        console.log(response.data)
        console.log(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/venCustomerEnquiries', async (req, res) => {
    try {
        const response = await axios.get('https://oucedsa-am.cwbyminsait.com/venCustomerEnquiries/1.0.1/?meterSerial=54180169259&dateFrom=1668560400000&dateTo=1668690000000', {
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "X-Incms-Origin-D": "100036#orngcld",
                "Authorization": "Bearer ce0cee2c-e5fb-3cfc-bf63-17d931cced67",
            }
        });
        res.status(200).json(response.data);
        console.log(response.data)
        console.log(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});






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
            res.status(200).json({ body });
            console.log(response)
        }
    });
});




export default router