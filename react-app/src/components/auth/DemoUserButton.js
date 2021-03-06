import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './form.css';


const DemoUserButton = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const handleDemo = async (e) => {
    e.preventDefault();
    const email = 'user@demo.io'
    const password = 'password'
    await dispatch(login(email, password));

  };

  if (user) {
    return <Redirect to='/' />;
  }

  return <button id='demobuttonuser' onClick={handleDemo}>User</button>;
}


export default DemoUserButton;