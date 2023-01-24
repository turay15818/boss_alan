/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilSearch,
  cilCloudUpload,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'



const _nav = [

  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customer Enquiry',
    to: '/tableSearch',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Customer Enquiries',
    to: '/tableRangeSearch',
    icon: <CIcon icon={cilCloudUpload} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Check STS Token',
    to: '/stsToken',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Information',
    to: '/vendorInformation',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Unix Time Stamp',
    to: '/unixTimeStamp',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Reset Password',
    to: '/resetPassword',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Update Password',
    to: '/updatePassword',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },


]

export default _nav
