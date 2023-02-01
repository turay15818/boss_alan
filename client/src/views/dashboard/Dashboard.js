/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import axios from 'axios'
import { Link } from "react-router-dom";
import {
  CModalTitle,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from '@coreui/react'
import { FaUserPlus } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import 'datatables.net-buttons/js/buttons.flash.min.js'
import * as jzip from 'jszip';
import 'pdfmake';
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;




const API_URL = "http://localhost:4433//venInfoVendor/1.0.1/";




const Dashboard = () => {

  const dispatch = useDispatch();
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

  const { user } = useSelector((state) => state.auth);



  $(document).ready(function () {
    setTimeout(function () {
      $('#userlist').DataTable(
        {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          // scrollY: 200,
          // scrollX: true,
          dom: 'Bfrtip',
          destroy: true,
          buttons: ['copy', 'csv', 'excel', 'pdf', 'print'
          ]
        }
      );
    },
      1000
    );
  });

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);




  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // const response = await axios.get("http://172.25.164.15:3333/users");
    const response = await axios.get("http://localhost:4433/users");
    setUsers(response.data);
    console.log(response)
  };

  const deleteUser = async (userId) => {
    // await axios.delete(`http://172.25.164.15:3333/users/${userId}`);
    await axios.delete(`http://localhost:4433/users/${userId}`);
    getUsers();
  };
  const [visible, setVisible] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)


  const [vendor, setVendor] = useState({});
  useEffect(() => {
    fetch("http://localhost:4433//venInfoVendor/1.0.1/")
      .then((response) => response.json())
      .then((json) => setVendor(json.data));
  }, []);


  return (
    <>
      <div>
        <h1>API Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <CRow>
        <CCol xs={12}>

          <CRow>
            {user && user.role === 'admin' && (
              <><CButton color="light" onClick={() => setVisibleLg(!visibleLg)} style={{ fontWeight: 700, }}><FaUserPlus style={{ color: "orange", fontSize: "30px", marginRight: "20px" }} /> Add User</CButton>
                <CModal visible={visibleLg} onClose={() => setVisibleLg(false)}>
                  <CModalHeader>
                    <CModalTitle>Add User</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                  </CModalBody>
                </CModal></>
            )}



            {user && user.role === 'admin' && (
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardHeader>
                    <strong>Users Table</strong>
                  </CCardHeader>
                  <CCardBody>
                    <table className="table is-striped is-fullwidth" id="userlist">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Staff Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Role</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.staffId}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.role}</td>
                            <td>




                              <CButton color="warning" style={{ marginRight: "4px" }} id="editUsers">
                                <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                                  to={`/base/users/edit/${user.id}`}

                                >
                                  < BiEdit style={{ color: "black" }} />  Edit     </Link>
                              </CButton>


                              <CButton onClick={() => setVisible(!visible)} color="danger" style={{ fontWeight: 700, }}><FiDelete style={{ color: "orange" }} id="deleteButton" /> Delete</CButton>
                              <CModal visible={visible} onClose={() => setVisible(false)}>
                                <CModalHeader onClose={() => setVisible(false)}>
                                  <CModalTitle>Delete</CModalTitle>
                                </CModalHeader>
                                <CModalBody>Are you sure you want to delete this user!</CModalBody>
                                <CModalFooter>
                                  <CButton color="secondary" onClick={() => setVisible(false)}>
                                    Cancel
                                  </CButton>
                                  <CButton color="danger" onClick={() => deleteUser(user.id)}>Confirm Delete</CButton>
                                </CModalFooter>
                              </CModal>



                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CCardBody>
                </CCard>
              </CCol>
            )}

            {user && user.role === 'admin' && (
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardHeader>
                    <strong>Users Table</strong>
                  </CCardHeader>
                  <CCardBody>
                    <table className="table is-striped is-fullwidth" id="userlist">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Vendor Balance</th>
                          <th>Desc Vendor</th>
                          <th>Vendor Id</th>
                        </tr>
                      </thead>
                      <tbody>


                        {users.map((user, index) => (
                          <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{vendor.idVendor}</td>
                            <td>{vendor.descVendor}</td>
                            <td>{vendor.balance}</td>
                            

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CCardBody>
                </CCard>
              </CCol>
            )}



          </CRow>

        </CCol>
      </CRow>



    </>
  )
}

export default Dashboard
