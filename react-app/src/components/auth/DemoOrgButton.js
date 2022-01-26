import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './form.css';


const DemoOrgButton = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const handleDemo = async (e) => {
    e.preventDefault();
    const email = 'org@demo.io'
    const password = 'password'
    await dispatch(login(email, password));

  };

  if (user) {
    return <Redirect to='/pet-post' />;
  }

  return <button id='demobuttonorg' onClick={handleDemo}>Organization</button>

}


export default DemoOrgButton;