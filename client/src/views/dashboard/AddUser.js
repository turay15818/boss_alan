/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import {
  CCard,
  CDropdown,
  CCardBody,
  CDropdownToggle,
  CCardHeader,
  CDropdownDivider,
  CDropdownMenu,
  CCol,
  CButton,
  CForm,
  CContainer,
  CDropdownItem,
  CRow,
  CFormInput,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Button from 'react-bootstrap/Button';



const FormAddUser = () => {
  const [staffId, setStaffId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://172.25.164.15:3333/users", {
      // await axios.post("http://localhost:3333/users", {
        staffId: staffId,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    }
    
    catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <CRow>


      <CCol xs={12}>

        <CContainer sm>

          {/* <div className="container text-center">
            <div className="row">
              <div className="col-md-6 offset-md-3">


              </div>
            </div>
          </div> */}

          <div className="container text-left">
            <div className="row">
              <div className="">

                <CForm onSubmit={saveUser}>
                  <CFormInput
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                    placeholder="OSL_20ITN_190"
                    required
                    type="text"
                    className="input"
                    id="exampleFormControlInput1"
                    label="Staff ID"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />

                  <CFormInput
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    id="exampleFormControlInput1"
                    label="Staff Name"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />

                  <CFormInput
                    required
                    id="phoneNumber"
                    minLength={8}
                    maxLength={13}
                    type="number"
                    className="input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="23279366751"
                    label="Phone Number"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />


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


                  <CFormInput
                    required
                    id="confPassword"
                    minLength={8}
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                    label="Confirm Password"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />

                  <CDropdown alignment={{ xs: 'end', lg: 'start' }}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <CDropdownMenu
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <CDropdownItem value="">***Select***</CDropdownItem>
                      <CDropdownItem value="user" id="userRole">User</CDropdownItem>
                      <CDropdownItem value="TCM" id="TCM">TCM</CDropdownItem>
                      <CDropdownDivider />
                      <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>

                  <div className="d-grid gap-2">

                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">***Select***</option>
                      {/* <option value="admin" id="adminRole">Admin</option> */}
                      <option value="user" id="userRole">User</option>
                      <option value="TCM" id="TCM">TCM</option>
                    </select>

                  </div>
                  {/* <CButton color="primary" size="lg" type="submit">Primary button</CButton> */}
                  <hr />
                  <div className="d-grid gap-2">
                    <CButton color="primary" type="submit">Save User</CButton>
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

export default FormAddUser;




