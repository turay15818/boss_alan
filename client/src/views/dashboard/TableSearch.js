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
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'
  import pdfMake from "pdfmake/build/pdfmake";
  import pdfFonts from "pdfmake/build/vfs_fonts";
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





    const [items, setItems] = useState([])
    useEffect(() => {
        getItems()
    }, [])
    const getItems = async () => {
        const response = await axios.get("http://localhost:4433/users")
        setItems(response.data)
        console.log(response);
    }

    return (
        <div>

        <CCol xs={12}>
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
        </CCol>









            {/* {items.map((items) => (
                <>
                <h1>{items.name }</h1>
                </>
            ))} */}
        
        </div >
    )
}

export default TableSearch