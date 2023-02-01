/* eslint-disable prettier/prettier */
import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DropDown = React.lazy(() => import('./views/dashboard/DropDown'))
// const UpdateAdminLoginPassword = React.lazy(() => import('./views/dashboard/UpdateAdminLoginPassword'))
const unixTimeStamp = React.lazy(() => import('./views/dashboard/unixTimeStamp'))
const TableSearch = React.lazy(() => import('./views/dashboard/TableSearch'))
const VendorInformation = React.lazy(() => import('./views/dashboard/VendorInformation'))
const STSToken = React.lazy(() => import('./views/dashboard/STSToken'))
const TableRangeSearch = React.lazy(() => import('./views/dashboard/TableRangeSearch'))
const ResetPassword = React.lazy(() => import('./views/dashboard/ResetPassword'))
const UpdatePassword = React.lazy(() => import('./views/dashboard/UpdatePassword'))

// const UserList = React.lazy(() => import('./views/base/tables/UserList'))






const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dropdown', name: 'Dropdown', element: DropDown },
  // { path: '/UpdateAdminLoginPassword/:token', name: 'Update Password', element: UpdateAdminLoginPassword },
  { path: '/unixTimeStamp', name: 'Unix Time Stamp', element: unixTimeStamp },
  { path: '/vendorInformation', name: 'Vendor Information', element: VendorInformation },
  { path: '/stsToken', name: 'Check STS Token', element: STSToken,},
  { path: '/tableSearch', name: 'Ven-Shit Enquires', element: TableSearch },
  { path: '/tableRangeSearch', name: 'Customer Enquiries', element: TableRangeSearch },
  { path: '/updatePassword', name: 'Dashboard', element: UpdatePassword },
  // { path: '/base/userList', name: 'User List', element: UserList },
  { path: '/resetPasswordDd', name: 'Reset Password', element: ResetPassword },

]

export default routes
