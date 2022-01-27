import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { IoPaw } from "react-icons/io5";
import { BsPlusSquare, BsFillPersonFill } from "react-icons/bs";
import { GrOrganization } from "react-icons/gr";
import { GiDogHouse } from "react-icons/gi";
import './NavBar.css';


const NavBar = () => {

  const user = useSelector(state => state.session.user ? state.session.user : false)


  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <nav>
      <div className='navBarDiv'>
        <div className='navLogo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img id='logo' src='https://i.imgur.com/VU7sSY7.png' alt='logo' />
          </NavLink>
        </div>
        <div className='navBarOptions'>

          <div id='home' className='optionclass'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <GiDogHouse className='icon' />
            </NavLink>
          </div>

          <div id='petposts' className='optionclass'>
            <NavLink to='/pet-post' exact={true} activeClassName='active'>
              <IoPaw className='icon' />
            </NavLink>
          </div>

          {user?.account_type?.id !== 1 && (
            <div id='newpost' className='optionclass'>
              <NavLink to='/new-pet-post' exact={true} activeClassName='active'>
                <BsPlusSquare className='icon' />
              </NavLink>
            </div>
          )}

          {user?.id && (
            <div id='profile' className='optionclass'>
              <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
                {user.account_type.id === 1 ? <BsFillPersonFill className='icon' /> : <GrOrganization className='icon' />}
              </NavLink>
            </div>
          )}

          {user?.id && (
            <div id='logout' className='optionclass'>
              <LogoutButton />
            </div>
          )}

        </div>
      </div>
    </nav >
  );
}

export default NavBar;


// {!user?.id && (
//   <div>
//     <NavLink to='/login' exact={true} activeClassName='active'>
//       Login
//     </NavLink>

//     <NavLink to='/sign-up' exact={true} activeClassName='active'>
//       Sign Up
//     </NavLink>
//   </div>
// )}