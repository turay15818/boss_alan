/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CButton,
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



  return (
    <div>
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

                {/* <div className="d-grid gap-2">
                    <CButton id="login" style={{ backgroundColor: '#6610F2', border: 'solid 2px #6610F2' }} type="submit">Convert Time</CButton>
                  </div> */}
              </CCard>
            </CCardGroup>
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
