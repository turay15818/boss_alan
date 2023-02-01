/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getFilteredData()
  }, [])
  const getFilteredData = async () => {
    const response = await axios.get("http://localhost:4433/users")
    setFilteredData(response.data)
    console.log(response);
  }

  const handleSearch = () => {
    const filteredData = data.filter(item => {
      const date = new Date(item.date);
      return date >= startDate && date <= endDate;
    });
    setFilteredData(filteredData);
  }



  const [unixTimestamp, setUnixTimestamp] = useState('');
  const [date, setDate] = useState('');

  const convertTimeStamp = (e) => {
    e.preventDefault();
    const date = new Date(unixTimestamp * 1000);
    // setDate(date.toJSON());
    // setDate(date.toLocaleString());
    // setDate(date.toLocaleString());
    // setDate(date.toLocaleTimeString());
    // setDate(date.toLocaleTimeString());
    // setDate(date.toISOString());
    // setDate(date.toLocaleDateString());
    setDate(date.toUTCString());
  }


  const [firstSearch, setFirstSearch] = useState('');
  const [secondSearch, setSecondSearch] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {
    async function convert() {
      const res = await fetch(`http://localhost:4433/convert?start=${firstSearch}&end=${secondSearch}`);
      const data = await res.json();
      setResult(data);
    }

    if (firstSearch && secondSearch) {
      convert();
    }
  }, [firstSearch, secondSearch]);



  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // const response = await axios.get("http://172.25.164.15:3333/users");
    const response = await axios.get("http://localhost:4433/users");
    setUsers(response.data);
    console.log(response)
  };



  const [vendor, setVendor] = useState({});
  useEffect(() => {
    fetch("http://localhost:4433/musaaa")
      .then((response) => response.json())
      .then((json) => setVendor(json.data));
  }, []);



  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4433/venCustomerEnquiries")
      .then(response => response.json())
      .then(dataa => setDataa(dataa.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>


{/* <div>
      {dataa.map(item => (
        <div key={item.transactionId}>
          <p>Unit Payment: {item.unitPayment}</p>
          <p>Name Cashier: {item.nameCashier}</p>
          <p>Debt Payment: {item.debtPayment}</p>
          <p>Customer Name: {item.customerName}</p>
          <p>Date Transaction: {item.dateTransaction}</p>
          <p>Transaction ID: {item.transactionId}</p>
          <p>Unit Type: {item.unitType}</p>
          <p>Total Amount: {item.totalAmount}</p>
          <p>Unit: {item.unit}</p>
          <p>Receipt: {item.receipt}</p>
          <p>Meter Serial: {item.meterSerial}</p>
          <p>Account: {item.account}</p>
          <p>Code User: {item.codUser}</p>
        </div>
      ))}
    </div>
 */}



      <CContainer >
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <p5 className="title is-4" style={{ textAlign: "center" }}>Start Date: <span style={{ color: "#ff6600", fontWeight: 800 }}>{result.start}</span></p5>
                <p5 className="title is-4" style={{ textAlign: "center" }}>End Date: {" "} {" "}<span style={{ color: "#ff6600", fontWeight: 800 }}>{result.end}</span></p5>
                <CFormInput
                  required
                  id="unixTimeStamp"
                  className="input"
                  value={firstSearch}
                  onChange={(e) => setFirstSearch(e.target.value)}
                  type="dateTime-local"
                  label="Start Date"
                />
                <CFormInput
                  required
                  id="unixTimeStamp"
                  className="input"
                  value={secondSearch}
                  onChange={(e) => setSecondSearch(e.target.value)}
                  type="dateTime-local"
                  label="End Date"
                />

                <hr />

              </CCard>
            </CCardGroup>
          </CCol>



          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Users Table</strong>
              </CCardHeader>
              <CCardBody>
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
        {dataa.map((item, index) => (
          <tr key={item.transactionId}>
            <td>{index +1}</td>
            <td>{item.transactionId}</td>
            <td>{item.meterSerial}</td>
            <td>{item.customerName}</td>
            <td>{item.totalAmount}</td>
            <td>{item.dateTransaction}</td>
            <td>{item.account}</td>
            <td>{item.unit}</td>
            <td>{item.unitPayment}</td>
            <td>{item.unitType}</td>
            <td>{item.receipt}</td>
            <td>{item.debtPayment}</td>
          </tr>
        ))}
      </tbody>
    </table>
              </CCardBody>
            </CCard>
          </CCol>






        </CRow>
      </CContainer>

    </div>
  );
}

export default DataTable;




  // const isoTime = "2022-10-10T10:10:10.000Z";

  // const normalTime = new Date(isoTime);

  // return (
  //   <div>
  //     <p>ISO Time: {isoTime}</p>
  //     <p>Normal Time: {normalTime.toLocaleString()}</p>
  //   </div>












