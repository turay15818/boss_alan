/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ToUpdate from './ToUpdate'
import STSToken from './STSToken'
import {
    CButton,
    CCardBody,
    CCardHeader,
    CCard,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CRow,
} from '@coreui/react'

const DataTable = () => {

    const [unixTimestamp, setUnixTimestamp] = useState('')
    const [date, setDate] = useState('')

    const convertTimeStamp = (e) => {
        e.preventDefault()
        const date = new Date(unixTimestamp * 1000)
        setDate(date.toUTCString())
    }


    const [dataPost, setDataPost] = useState([])
    useEffect(() => {
        const options = {
            uri: 'http://localhost:4433/generateToken',
            method: 'POST',
        }
        fetch(options.uri, {
            method: options.method,
        })
            .then((res) => res.json())
            .then((response) => {
                setDataPost(response)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])
    const turay = dataPost.access_token
    console.log(turay)



    const [venShitEnquiries, setVenShitEnquiries] = useState([])
    const [paymentDate, setPaymentDate] = useState('')
    useEffect(() => {
        fetch('http://localhost:4433/venShiftEnquiriesGet')
            .then((res) => res.json())
            .then((data) => {
                setVenShitEnquiries(data)
                setPaymentDate(data[0].paymentDate)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:4433/venShitEnquiriesAPI/', {
                headers: {
                    musa: turay,
                    payment: paymentDate,
                },
            })

            setData(response.data.data)
        }
        fetchData()
    }, [turay, paymentDate])

    return (
        <div>
            <CRow className="justify-content-center">
                <CCol md={12}>
                    < STSToken />
                    <CCardGroup>

                    </CCardGroup>
                </CCol>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Ven Customer Enquiries</strong>
                        </CCardHeader>

                        <CCol xs={12}>
                            <table className="table is-striped is-fullwidth" id="userlist">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Customer Name</th>
                                        <th>Account</th>
                                        <th>Meter Serial</th>
                                        <th>Unit Payment</th>
                                        <th>Unit Type</th>
                                        <th>Total Amount</th>
                                        <th>Unit</th>
                                        <th>Receipt</th>
                                        <th>Debt Payment</th>
                                        {/* <th>Receipt</th> */}
                                        <th>Transaction Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ?
                                        data.map((item, index) => (

                                            // "unitPayment": 45,
                                            // "unitType": "kWh",
                                            // "totalAmount": 50,
                                            // "unit": 21.4,
                                            // "receipt": "202211EIN0009201193",
                                            // "debtPayment": 5,
                                            // "transactionDate": 1668556800000,
                                            // "meterSerial": "98000428262",
                                            // "account": "1000000885",
                                            // "customerName": "ABDULAI BANGURA"

                                            <tr key={item.transactionId}>
                                                <td>{index + 1}</td>
                                                <td>{item.customerName}</td>
                                                <td>{item.account}</td>
                                                <td>{item.meterSerial}</td>
                                                <td>{item.unitPayment}</td>
                                                <td>{item.unitType}</td>
                                                <td>{item.totalAmount}</td>
                                                <td>{item.unit}</td>
                                                <td>{item.receipt}</td>
                                                <td>{item.debtPayment}</td>
                                                <td>{new Date(item.transactionDate).toLocaleString()}</td>



                                            </tr>
                                        ))
                                        : <tr><td colSpan={11} align="center">No Data Found for the given Information</td></tr>
                                    }
                                </tbody>

                            </table>
                        </CCol>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )
}

export default DataTable
