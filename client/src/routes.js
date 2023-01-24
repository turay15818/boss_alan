/* eslint-disable prettier/prettier */
import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
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
  { path: '/unixTimeStamp', name: 'Unix Time Stamp', element: unixTimeStamp },
  { path: '/vendorInformation', name: 'Vendor Information', element: VendorInformation },
  { path: '/stsToken', name: 'STS Token', element: STSToken },
  { path: '/tableSearch', name: 'Table Search', element: TableSearch },
  { path: '/tableRangeSearch', name: 'Table Range Search', element: TableRangeSearch },
  { path: '/updatePassword', name: 'Dashboard', element: UpdatePassword },
  // { path: '/base/userList', name: 'User List', element: UserList },
  { path: '/resetPassword', name: 'Reset Password', element: ResetPassword },

]

export default routes
