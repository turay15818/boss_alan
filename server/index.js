

import app from './server.js'
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4433;
app.listen(PORT, (error) => {
    // error ? console.error(error) : console.log(`server running on port \n http://172.25.164.15:${PORT}`);
    error ? console.error(error) : console.log(`server running on\nhttp://localhost:${PORT}`);
});