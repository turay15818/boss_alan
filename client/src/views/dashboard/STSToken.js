/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const STSToken = () => {
    const [sts, setSts] = useState([])
    useEffect(() => {
        getSts();
    }, [])

    const getSts = async () => {
        const response = await axios.get("http://localhost:4433/users");
        setSts(response.data);
        console.log(response)
    }


    return (
        <div>
            <h1>Hello Turay</h1>

            <h1>

                {sts.map((sts) => (
                    <>
                        <h1>{sts.name}</h1>
                        <h1>{sts.name}</h1>
                    </>
                ))}

            </h1>
        </div>
    )
}

export default STSToken
