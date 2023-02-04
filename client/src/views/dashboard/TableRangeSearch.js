/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ToUpdate from './ToUpdate'
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



  const [result, setResult] = useState({});
  const [firstSearch, setFirstSearch] = useState('');
  const [secondSearch, setSecondSearch] = useState('');
  const [thirdSearch, setThirdSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4433/convert?start=${firstSearch}&end=${secondSearch}&thirdSearch=${thirdSearch}`);
      const data = await response.json();
      setResult(data);
    };
    fetchData();
  }, [firstSearch, secondSearch, thirdSearch]);



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



  const [vendorData, setVendorData] = useState([])
  const [meterSerials, setMeterSerials] = useState('')
  const [dateFroms, setDateFroms] = useState('')
  const [dateTos, setDateTos] = useState('')
  useEffect(() => {
    fetch('http://localhost:4433/vendor')
      .then((res) => res.json())
      .then((data) => {
        setVendorData(data)
        setMeterSerials(data[0].meterSerial)
        setDateFroms(data[0].dateFrom)
        setDateTos(data[0].dateTo)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:4433/venCustomersEnquiries/', {
        headers: {
          musa: turay,
          meter: meterSerials,
          from: dateFroms,
          to: dateTos,
        },
      })

      setData(response.data.data)
    }
    fetchData()
  }, [turay, meterSerials, dateFroms, dateTos])

  return (
    <div>
      <CRow className="justify-content-center">
        <CCol md={12}>
          < ToUpdate />
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
                    <th>Transaction Id</th>
                    <th>Meter Serial</th>
                    <th>customer Name</th>
                    <th>Total Amount</th>
                    <th>Transaction Date</th>
                    <th>Account</th>
                    <th>Unit</th>
                    <th>Unit Payment</th>
                    <th>Unit Type</th>
                    <th>Receipt</th>
                    <th>Debt Payment</th>
                  </tr>
                </thead>
                <tbody>
  {data.length > 0 ? 
    data.map((item, index) => (
       <tr key={item.transactionId}>
       <td>{index +1}</td>
       <td>{item.transactionId}</td>
       <td>{item.meterSerial}</td>
       <td>{item.customerName}</td>
       <td>{item.totalAmount}</td>
       <td>{new Date(item.dateTransaction).toLocaleString()}</td>
       <td>{item.account}</td>
       <td>{item.unit}</td>
       <td>{item.unitPayment}</td>
       <td>{item.unitType}</td>
       <td>{item.receipt}</td>
       <td>{item.debtPayment}</td>
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

// headers: {
//   musa: turay,
//   meter: 54180169259,
//   from: 1668560400000,
//   to: 1668690000000,
// },

// const isoTime = "2022-10-10T10:10:10.000Z";

// const normalTime = new Date(isoTime);

// return (
//   <div>
//     <p>ISO Time: {isoTime}</p>
//     <p>Normal Time: {normalTime.toLocaleString()}</p>
//   </div>
