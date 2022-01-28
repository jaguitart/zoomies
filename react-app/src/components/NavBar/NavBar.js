import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { IoPaw } from "react-icons/io5";
import { BsPlusSquare, BsFillPersonFill, BsInfoSquare } from "react-icons/bs";
import { GrOrganization } from "react-icons/gr";
import './NavBar.css';


const NavBar = () => {

  const user = useSelector(state => state.session.user ? state.session.user : false)
  const [pointToLineAbout, setPointToLineAbout] = useState('');
  const [pointToLineFinder, setPointToLineFinder] = useState('');
  const [pointToLineAdd, setPointToLineAdd] = useState('');
  const [pointToLineProfile, setPointToLineProfile] = useState('');
  const [pointToLineLogut, setPointToLineLogout] = useState('');

  if (!user) {
    return <Redirect to='/login' />;
  }


  return (
    <nav>
      <div className='navBarDiv'>
        <div className='navLogo'>
          <NavLink to='/pet-post' exact={true} activeClassName='active'>
            <img id='logo' src='https://i.imgur.com/VU7sSY7.png' alt='logo' />
          </NavLink>
        </div>
        <div className='navBarOptions'>

          <div id='petposts' className='optionclass' onMouseEnter={() => setPointToLineFinder('pointtoline')} onMouseLeave={() => setPointToLineFinder('')}>
            <NavLink to='/pet-post' exact={true} activeClassName='active'>
              <IoPaw className='icon' />
            </NavLink>
            <span>Adopt</span>
            <div className={`point ${pointToLineFinder}`}></div>
          </div>

          {user?.account_type?.id !== 1 && (
            <div id='newpost' className='optionclass' onMouseEnter={() => setPointToLineAdd('pointtoline')} onMouseLeave={() => setPointToLineAdd('')}>
              <NavLink to='/new-pet-post' exact={true} activeClassName='active'>
                <BsPlusSquare className='icon' />
              </NavLink>
              <span>Add</span>
              <div className={`point ${pointToLineAdd}`}></div>
            </div>
          )}

          {user?.id && (
            <div id='profile' className='optionclass' onMouseEnter={() => setPointToLineProfile('pointtoline')} onMouseLeave={() => setPointToLineProfile('')}>
              <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
                {user.account_type.id === 1 ? <BsFillPersonFill className='icon' /> : <GrOrganization className='icon' />}
              </NavLink>
              <span className='navBar-span'>Profile</span>
              <div className={`point ${pointToLineProfile}`}></div>
            </div>
          )}

          {user?.id && (
            <div id='logout' className='optionclass' onMouseEnter={() => setPointToLineLogout('pointtoline')} onMouseLeave={() => setPointToLineLogout('')}>
              <LogoutButton />
              <span>Logout</span>
              <div className={`point ${pointToLineLogut}`}></div>
            </div>
          )}

          <div id='home' className='optionclass' onMouseEnter={() => setPointToLineAbout('pointtoline')} onMouseLeave={() => setPointToLineAbout('')}>
            <NavLink to='/about' exact={true} activeClassName='active'>
              <BsInfoSquare className='icon' />
            </NavLink>
            <span>About</span>
            <div className={`point ${pointToLineAbout}`}></div>
          </div>

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