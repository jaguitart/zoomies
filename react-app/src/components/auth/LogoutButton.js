import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { RiLogoutBoxRLine } from "react-icons/ri";


const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <RiLogoutBoxRLine className='icon' onClick={onLogout}/>
};

export default LogoutButton;
