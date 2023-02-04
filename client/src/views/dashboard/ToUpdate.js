/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "src/features/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  CCard,
  CCol,
  CButton,
  CForm,
  CContainer,
  CRow,
  CFormInput,
} from '@coreui/react'



const ToUpdate = () => {

  const [data, setData] = useState([]);

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


  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const [meterSerialNumber, setMeterSerialNumber] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:4433/update/${1}`, {
        meterSerialNumber,
        dateFrom,
        dateTo
      });
      if (response.status === 200) {
        window.location.reload();
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  return (

    <CRow>
      <CCol xs={12}>
        <CContainer sm>
          <div className="container text-left">
            <div className="row">
              <div >
                <CForm onSubmit={handleSubmit} className="row g-3">

                  
                <CCol md={4}>
                    <CFormInput
                    required
                    id="unixTimeStamp"
                    className="input"
                    value={dateFrom}
                    onChange={(event) => setDateFrom(event.target.value)}
                    type="dateTime-local"
                    label="Start Date"
                  />
                    </CCol>
                    <CCol md={4}>
                    <CFormInput
                    required
                    id="unixTimeStamp"
                    className="input"
                    value={dateTo}
                    onChange={(event) => setDateTo(event.target.value)}
                    type="dateTime-local"
                    label="End Date"
                  />
                    </CCol>
                    <CCol md={4}>
                    <CFormInput
                    required
                    className="input"
                    value={meterSerialNumber}
                    onChange={(event) => setMeterSerialNumber(event.target.value)}
                    type="number"
                    minLength={8}
                    label="End Date"
                  />
                    </CCol>
                 
                  <div className="d-grid gap-2">
                    <CButton color="primary" type="submit" style={{ backgroundColor: '#6610F2', border: 'solid 2px #6610F2' }}>
                      Search
                    </CButton>
                  </div>
                </CForm>
              </div>
            </div>
          </div>
        </CContainer>

      </CCol>
    </CRow>

  );
};

export default ToUpdate;


