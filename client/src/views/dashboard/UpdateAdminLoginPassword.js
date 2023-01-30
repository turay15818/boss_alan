/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import {useSelector } from 'react-redux'
import {
    CModalBody,
    CModalTitle,
    CModalHeader,
    CModal,
    CCardGroup,
    CCard,
    CCol,
    CButton,
    CForm,
    CContainer,
    CRow,
    CFormInput,
} from '@coreui/react'

const UpdateAdminLoginPassword = () => {
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [message, setMessage] = useState('');
    const { token } = useParams();
    const { isError} = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confPassword) {
            setMessage('Passwords do not match');
            return;
        }

    axios.post(`http://localhost:4433/reset-password/${token}`, {
        password,
        confPassword,
    })
    .then((res) => {
        setMessage(res.data.message);
    })
    .catch((err) => {
        console.log(err);
    });
    }
    return (

<div className="min-vh-100 d-flex flex-row align-items-center"
style={{
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
>
<CContainer >
  <CRow className="justify-content-center">
    <CCol md={4}>
      <CCardGroup>
        <CCard className="p-4">
        <h4 className="has-text-centered" style={{}}>{message}</h4>
          <CForm onSubmit={handleSubmit} className="box" style={{ width: "100%" }}>
            <h4 className="title is-4" style={{ textAlign: "center", fontWeight: 800 }}>Update your New Password</h4>
            <CFormInput
              required
              id="email"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              placeholder="Password"
              aria-describedby="exampleFormControlInputHelpInline"
            />
            <CFormInput
              required
              id="confPassword"
              minLength={8}
              type="password"
              className="input"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="******"
              label="confirm Password"
              aria-describedby="exampleFormControlInputHelpInline"
            />

            <hr />

            <div className="d-grid gap-2">
              <CButton id="login" style={{ backgroundColor: '#ff6600', border: 'solid 2px #ff6600' }} type="submit">Update Password</CButton>
            </div>
          </CForm>
        </CCard>
      </CCardGroup>
    </CCol>
  </CRow>
</CContainer>
</div>
    );
};

export default UpdateAdminLoginPassword;






