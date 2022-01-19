import React from 'react';
import { useDispatch } from 'react-redux';
import { org_logout } from '../../store/organizations_session';

const OrganizationLogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(org_logout());
  };

  return <button onClick={onLogout}>Logout Organizations</button>;
};

export default OrganizationLogoutButton;
