/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilSearch,
  cilContact,
  cilCheck,
  cilInfo,
  cilLoopCircular,
  cilLayers,
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
    name: 'Ven-Shit Enquires',
    to: '/tableSearch',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Customer Enquiries',
    to: '/tableRangeSearch/',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Check STS Token',
    to: '/stsTokenDisplay',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Information',
    to: '/vendorInformation',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },

  // {
  //   component: CNavItem,
  //   name: 'Unix Time Stamp',
  //   to: '/unixTimeStamp',
  //   icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  // },

  {
    component: CNavItem,
    name: 'Reset Password',
    to: '/resetPasswordDd',
    icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Update Password',
    to: '/updatePassword',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Drop Down',
    to: '/dropdown',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },


]

export default _nav
