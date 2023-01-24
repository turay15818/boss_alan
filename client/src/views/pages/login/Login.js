/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser, reset } from '../../../features/authSlice'
import {
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CCard,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/dashboard')
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const Auth = (e) => {
    e.preventDefault()
    dispatch(LoginUser({ email, password }))
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
        {isError && <p className="has-text-centered">
          <CModal
            className="show d-block position-static"
            backdrop={false}
            keyboard={false}
            portal={false}
            visible
          >
            <CModalHeader>
              <CModalTitle>Login Fail Due To</CModalTitle>
            </CModalHeader>
            <CModalBody>{message}</CModalBody>
          </CModal>



        </p>}





        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CForm onSubmit={Auth} className="box" style={{ width: "100%" }}>
                  <h1 className="title is-2" style={{ textAlign: "center" }}>Sign In</h1>
                  <CFormInput
                    required
                    id="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    label="Email address"
                    placeholder="name@example.com"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                  <CFormInput
                    required
                    id="password"
                    minLength={8}
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                    label="Password"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />

                  <hr />

                  <div className="d-grid gap-2">
                    <CButton id="login" style={{ backgroundColor: '#ff6600', border: 'solid 2px #ff6600' }} type="submit">{isLoading ? "Loading..." : "Login"}</CButton>
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

export default Login
