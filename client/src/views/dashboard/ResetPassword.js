/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getMe } from "../../features/authSlice";
import {
  CButton,
  CModal,
  CCard,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react'

const ResetPassword = () => {
const language = ("eng")

  const [idVendor, setIdVendor] = useState('')
  const [codUser, setCodUser] = useState('')
  const [codLanguage, setCodLanguage] = useState(`${language}`)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);





  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://oucedsa-web.cwbyminsait.com:8254/venLogin/1.0.1/', {
        idVendor: idVendor,
        codUser: codUser,
        codLanguage: language,
      })
      navigate('/updatePassword')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CContainer>
        {isError && (
          <p className="has-text-centered">
            <CModal
              className="show d-block position-static"
              backdrop={false}
              keyboard={false}
              portal={false}
              visible
            >
              {/* <CModalHeader>
                            <CModalTitle>Login Fail Due To</CModalTitle>
                        </CModalHeader>
                        <CModalBody>{message}</CModalBody> */}
            </CModal>
          </p>
        )}
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CForm onSubmit={handleSubmit} className="box" style={{ width: '100%' }}>
                  <h1 className="title is-2" style={{ textAlign: 'center' }}>
                    Reset{' '}
                  </h1>
                  <CFormInput
                    required
                    className="input"
                    value={idVendor}
                    onChange={(e) => setIdVendor(e.target.value)}
                    label="Vendor Id"
                  />
                  <CFormInput
                    required
                    className="input"
                    value={codUser}
                    label="User Cod"
                    onChange={(e) => setCodUser(e.target.value)}
                  />
                  <CFormInput
                    required
                    disabled
                    className="input"
                    value={language}
                    onChange={(e) => setCodLanguage(e.target.value)}
                
                    label="Cod Language"
                  />
                  <hr />
                  <div className="d-grid gap-2">
                    <CButton
                      id="login"
                      style={{ backgroundColor: '#ff6600', border: 'solid 2px #ff6600' }}
                      type="submit"
                    >
                      {isLoading ? 'Loading...' : 'Send'}
                    </CButton>
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

export default ResetPassword
