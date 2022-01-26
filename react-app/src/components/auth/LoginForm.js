import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Footer from '../NavBar/footer';
import DemoOrgButton from './DemoOrgButton';
import DemoUserButton from './DemoUserButton';
import './form.css';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(['Login failed. Please try again.']);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='allsignup'>
      <div className="mainsignup">
        <div className="signup">
          <img className="loginImage" alt='splash' src="https://thearkpets.org/wp-content/uploads/2021/02/adopt-pet-with-woman-dog_23-2148511804.jpg" />
          <br />
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <input
                required={true}
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
                />
            </div>
            <div>
              <input
                required={true}
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
              <button type='submit'>Login</button>

              <p id='typeofuser'>Demo</p>
              <div id='demobuttons'>
                <DemoOrgButton /><DemoUserButton />
              </div>

            </div>
          </form >
          <div>
            <p id='account'>Don't have an account?
              <NavLink to='/sign-up'>
                <b id='signUp'>   Sign Up</b>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default LoginForm;
