/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
const STSToken = () => {
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


  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:4433/venShiftEnquiriesPatch/${1}`, {
        paymentDate,
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
    <CContainer >
      <CRow className="justify-content-center">
        <CCol md={4}>
          <CCardGroup>
            <CCard className="p-4">
              <CForm onSubmit={handleSubmit} className="row g-3">
                <CFormInput
                  required
                  id="unixTimeStamp"
                  className="input"
                  value={paymentDate}
                  onChange={(event) => setPaymentDate(event.target.value)}
                  type="dateTime-local"
                  label="Payment Date"
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
  )
}

export default STSToken
