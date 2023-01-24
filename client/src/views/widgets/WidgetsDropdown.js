/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import axios from 'axios'
import { Link } from "react-router-dom";

import {
  CRow,
  CSpinner,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  const { user } = useSelector((state) => state.auth);
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


  const [complainByDateSeven, setComplainByDateSeven] = useState([]);

  useEffect(() => {
    getComplainByDateSeven();
  }, []);

  const getComplainByDateSeven = async () => {
    const response = await axios.get("http://172.25.164.15:3333/complain");
    // const response = await axios.get("http://localhost:3333/complain");
    // const response = await axios.get("http://172.25.164.15:3333/complainByDateSeven");
    setComplainByDateSeven(response.data);
    console.log(response)
  };

  const [complainByDateOne, setComplainByDateOne] = useState([]);

  useEffect(() => {
    getComplainByDateOne();
  }, []);

  const getComplainByDateOne = async () => {
    // const response = await axios.get("http://172.25.164.15:3333/complain");
    const response = await axios.get("http://172.25.164.15:3333/complainByDateOne");
    // const response = await axios.get("http://localhost:3333/complainByDateOne");
    setComplainByDateOne(response.data);
    console.log(response)
  };


  const [solvedComplain, setSolvedComplain] = useState([]);

  useEffect(() => {
    getSolvedComplain();
  }, []);

  const getSolvedComplain = async () => {
    const response = await axios.get("http://172.25.164.15:3333/allComplain");
    // const response = await axios.get("http://localhost:3333/allComplain");
    // const response = await axios.get("http://localhost:3333/allComplain");
    setSolvedComplain(response.data);
    console.log(response)
  };


  const [workingOn, setWorkingOn] = useState([]);

  useEffect(() => {
    getWorkingOn();
  }, []);

  const getWorkingOn = async () => {
    // const response = await axios.get("http://localhost:3333/workingOn");
    const response = await axios.get("http://172.25.164.15:3333/workingOn");
    // const response = await axios.get("http://localhost:3333/workingOn");
    setWorkingOn(response.data);
    console.log(response)
  };




  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>

              {complainByDateOne.length}

              <span className="fs-6 fw-normal">
                (12.4% <CIcon icon={cilArrowTop} />)
              </span>
              <img src="https://www.svgrepo.com/show/41634/24-hours.svg" alt="" style={{ width: "60px", marginLeft: "15px", marginTop: "5px" }} />
            </>
          }
          title="Last 24 hrs"

          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

          }
        />
      </CCol>


      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {complainByDateSeven.length}{' '}
              <span className="fs-6 fw-normal">
                (40.9% <CIcon icon={cilArrowTop} />)
                <img src="https://www.svgrepo.com/show/2228/calendar.svg" alt="" style={{ width: "60px", marginLeft: "15px", marginTop: "5px" }} />
              </span>
            </>
          }
          title="Last 7 Days"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              {workingOn.length}{' '}
              <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
                <img src="https://www.svgrepo.com/show/287725/working-work.svg" alt="" style={{ width: "60px", marginLeft: "15px", marginTop: "5px" }} />
              </span>
            </>
          }
          title="Working On"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              {solvedComplain.length}{' '}
              <span className="fs-6 fw-normal">
                (-23.6% <CIcon icon={cilArrowBottom} />)
                <img src="https://www.svgrepo.com/show/283592/wave-data.svg" alt="" style={{ width: "60px", marginLeft: "15px", marginTop: "5px" }} />
              </span>
            </>
          }
          title="All Complain"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
