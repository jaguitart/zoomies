
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import OrganizationLogoutButton from './organization_auth/OrganizationLogoutButton'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <NavLink to='/org-login' exact={true} activeClassName='active'>
            Organizations Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/org-sign-up' exact={true} activeClassName='active'>
            Organizations Sign Up
          </NavLink>
        </li>
        <li>
          <OrganizationLogoutButton />
        </li>
        {/* <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Organizations
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
