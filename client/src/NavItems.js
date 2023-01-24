/* eslint-disable prettier/prettier */
import React from "react";
import _nav from "./_nav"
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "./features/authSlice";
import { useNavigate } from "react-router-dom";
const NavItems = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <_nav />
        </div>
    );
};

export default NavItems;
