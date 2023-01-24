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





  return (
    <div>

      <CContainer >
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CForm onSubmit={convertTimeStamp} className="box" style={{ width: "100%" }}>
                  <h1 className="title is-2" style={{ textAlign: "center" }}>{date}</h1>
                  <CFormInput
                    required
                    id="unixTimeStamp"
                    className="input"
                    value={unixTimestamp}
                    onChange={(e) => setUnixTimestamp(e.target.value)}
                    type="number"
                    label="Input Unix Time"
                    placeholder="1674563128"

                  />

                  <hr />

                  <div className="d-grid gap-2">
                    <CButton id="login" style={{ backgroundColor: '#6610F2', border: 'solid 2px #6610F2' }} type="submit">Convert Time</CButton>
                  </div>
                </CForm>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>

      <input 
      // value={unixTimestamp}
      // type="dateTime-local" 
      onChange={e => setStartDate(e.target.value)} 
      />
      <input 
      // value={unixTimestamp}
      // type="datetime-local" 
      onChange={e => setEndDate(e.target.value)} 
      />
      <button onClick={handleSearch} type="submit">Search</button>

      <table className="table is-striped is-fullwidth" id="filteredData">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(filteredData => (
            <tr key={filteredData.uuid}>
              <td>{filteredData.name}</td>
              <td>{filteredData.staffId}</td>
              <td>{filteredData.email}</td>
              <td>
              {
                new Date(filteredData.createdAt).toLocaleDateString() 
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
