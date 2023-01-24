/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CDropdown,
  CDropdownToggle,
} from '@coreui/react'
import { RiLogoutCircleLine } from 'react-icons/ri';
import {
  CButton,
} from '@coreui/react'
import { LogOut, reset } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CButton color="danger" onClick={logout} style={{ marginLeft: "5px" }}> <RiLogoutCircleLine /> Logout </CButton>
      </CDropdownToggle>
     
    </CDropdown>
  )
}

export default AppHeaderDropdown
