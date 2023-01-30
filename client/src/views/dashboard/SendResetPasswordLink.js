/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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

const SendResetPasswordLink = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const SendResetLink = async (e) => {
        e.preventDefault();
        try {
            //   await axios.post("http://172.25.164.15:4433/forgotPassword/", {
            await axios.post("http://localhost:4433/forgotPassword/", {
                email: email,

            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    };


    return (
        <div className="min-vh-100 d-flex flex-row align-items-center" style={{  }}>
            <CContainer >
                <CRow className="justify-content-center">
                    <CCol md={4}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CForm onClick={SendResetLink}>
                                    <h3 className="title is-2" style={{ textAlign: "center" }}>{message}</h3>
                                    <CFormInput
                                        required
                                        id="email"
                                        className="input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        label="Email"
                                    />


                                    <hr />

                                    <div className="d-grid gap-2">
                                        <CButton id="login" style={{ backgroundColor: '#6610F2', border: 'solid 2px #6610F2' }} type="submit">Send</CButton>
                                    </div>
                                </CForm>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default SendResetPasswordLink
