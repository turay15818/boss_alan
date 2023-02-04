/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import {
  CCard,
  CContainer,
  CCardGroup,
  CCardBody,
  CCardHeader,
  CButton,
  CCol,
  CFormInput,
  CRow,
} from '@coreui/react'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useSelector } from 'react-redux'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;

const TableSearch = () => {
  $(document).ready(function () {
    setTimeout(function () {
      $('#tableSearch').DataTable(
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


  const { user } = useSelector((state) => state.auth);



  const [items, setItems] = useState([])
  useEffect(() => {
    getItems()
  }, [])
  const getItems = async () => {
    const response = await axios.get("http://localhost:4433/users")
    setItems(response.data)
    console.log(response);
  }



  const formatDate = (unixTime) => {
    let date = new Date(unixTime * 1000);
    return date.toLocaleString();
  }

  const [firstSearch, setFirstSearch] = useState('');
  const [result, setResult] = useState({});
  useEffect(() => {
    async function convert() {
      const res = await fetch(`http://localhost:4433/convertSingle?start=${firstSearch}`);
      const data = await res.json();
      setResult(data);
    }
    if (firstSearch) {
      convert();
    }
  }, [firstSearch]);


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





  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    const options = {
      uri: "http://localhost:4433/generateToken",
      method: 'POST',
    };
    fetch(options.uri, {
      method: options.method,
    })
      .then(res => res.json())
      .then(response => {
        setDataPost(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  const turay = (dataPost.access_token)
  console.log(turay)
  
  // const [musa, setMusa] = useState(`${turay}`);
  const [vendor, setVendor] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4433/venInfoVendor/1.0.1/",
          {
            headers: {
              musa:  turay,
            },
          }
        );
        setVendor(response.data.data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [turay]);








  return (
    <div>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardHeader>
                    <h4>Ven Shift Enquiry</h4>
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






      <CContainer >
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">

                <h1 className="title is-2" style={{ textAlign: "center" }}>{result.start}</h1>
                <CFormInput
                  required
                  id="unixTimeStamp"
                  className="input"
                  value={firstSearch}
                  onChange={(e) => setFirstSearch(e.target.value)}
                  type="dateTime-local"
                  label="Input Unix Time"
                />
                <hr />
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>




      {/* <CCol xs={12}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Users Table</strong>
              </CCardHeader>
              <CCardBody>
                <table className="table is-striped is-fullwidth" id="tableSearch">
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
                    {items.map((items, index) => (
                      <tr key={items.uuid}>
                        <td>{index + 1}</td>
                        <td>{items.staffId}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.phoneNumber}</td>
                        <td>{items.role}</td>
                        <td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol> */}


    </div >
  )
}

export default TableSearch