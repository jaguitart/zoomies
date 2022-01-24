import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {

  const user = useSelector(state => state.session.user ? state.session.user : false)

  return (
    <nav>
      <div className='navBarDiv'>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
        {!user?.id && (
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>

            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        )}
        {user?.id && (
          <LogoutButton />
        )}
        <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
          Profile
        </NavLink>

        <NavLink to='/new-pet-post' exact={true} activeClassName='active'>
          New-Post
        </NavLink>

        <NavLink to='/pet-post' exact={true} activeClassName='active'>
          Pet Posts
        </NavLink>

      </div>
    </nav>
  );
}

export default NavBar;
