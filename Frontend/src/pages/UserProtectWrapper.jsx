import React, { useState, useContext } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    if(!token) {
        navigate('/login');
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper