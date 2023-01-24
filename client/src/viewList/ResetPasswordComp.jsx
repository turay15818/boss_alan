/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import ResetPassword from "src/views/dashboard/ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ResetPasswordComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <div>
      <ResetPassword />
    </div>
  );
};

export default ResetPasswordComp;
