import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { IoPaw } from "react-icons/io5";
import { BsPlusSquare, BsFillPersonFill, BsInfoSquare } from "react-icons/bs";
import { GiDogHouse } from "react-icons/gi";
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
          <NavLink to='/' exact={true} activeClassName='active'>
            <img id='logo' src='https://i.imgur.com/VU7sSY7.png' alt='logo' />
          </NavLink>
        </div>
        <div className='navBarOptions'>

          <NavLink to='/' exact={true} activeClassName='active'>
            <div id='petposts' className='optionclass' onMouseEnter={() => setPointToLineFinder('pointtoline')} onMouseLeave={() => setPointToLineFinder('')}>
              <IoPaw className='icon' />
              <span>Home</span>
              <div className={`point ${pointToLineFinder}`}></div>
            </div>
          </NavLink>

          {user?.account_type?.id !== 1 && (
            <NavLink to='/new-pet-post' exact={true} activeClassName='active'>
              <div id='newpost' className='optionclass' onMouseEnter={() => setPointToLineAdd('pointtoline')} onMouseLeave={() => setPointToLineAdd('')}>
                <BsPlusSquare className='icon' />
                <span>Add</span>
                <div className={`point ${pointToLineAdd}`}></div>
              </div>
            </NavLink>
          )}

          {user?.id && (
            <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
              <div id='profile' className='optionclass' onMouseEnter={() => setPointToLineProfile('pointtoline')} onMouseLeave={() => setPointToLineProfile('')}>
                {user.account_type.id === 1 ? <BsFillPersonFill className='icon' /> : <GiDogHouse className='icon' />}
                <span className='navBar-span'>Profile</span>
                <div className={`point ${pointToLineProfile}`}></div>
              </div>
            </NavLink>
          )}

          {user?.id && (
            <div id='logout' className='optionclass' onMouseEnter={() => setPointToLineLogout('pointtoline')} onMouseLeave={() => setPointToLineLogout('')}>
              <LogoutButton />
              <span>Logout</span>
              <div className={`point ${pointToLineLogut}`}></div>
            </div>
          )}

          <NavLink to='/about' exact={true} activeClassName='active'>
            <div id='home' className='optionclass' onMouseEnter={() => setPointToLineAbout('pointtoline')} onMouseLeave={() => setPointToLineAbout('')}>
              <BsInfoSquare className='icon' />
              <span>About</span>
              <div className={`point ${pointToLineAbout}`}></div>
            </div>
          </NavLink>

        </div>
      </div>
    </nav >
  );
}

export default NavBar;