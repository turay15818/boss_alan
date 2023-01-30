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
    const [transitionID, setTransitionID] = useState([])
    useEffect(() => {
        getSts();
    }, [])

    const getSts = async () => {
        const response = await axios.get("http://localhost:4433/users");
        setTransitionID(response.data);
        console.log(response)
    }


    return (
        <CContainer >
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                  {/* <h3 className="title is-2" style={{ textAlign: "center" }}>{result.start}</h3>
                  <h3 className="title is-2" style={{ textAlign: "center" }}>{result.end}</h3> */}
                  <CFormInput
                    required
                    id="unixTimeStamp"
                    className="input"
                    value={transitionID}
                    onChange={(e) => setTransitionID(e.target.value)}
                    type="number"
                    label="Transition ID"
                  />
                 

                  <hr />

                  <div className="d-grid gap-2">
                    <CButton id="login" style={{ backgroundColor: '#6610F2', border: 'solid 2px #6610F2' }} type="submit">Send</CButton>
                  </div>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    )
}

export default STSToken
