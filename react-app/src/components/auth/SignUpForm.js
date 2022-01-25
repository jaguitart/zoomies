import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../NavBar/footer';
import FormSelect from '../FormsComponents/FormSelect';
import FormInput from '../FormsComponents/FormInput';
import './form.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [account_type_id, setAccount_type_id] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [profile_pic, setProfile_pic] = useState('');
  const [logo, setLogo] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(account_type_id, username, name, email, bio, password, profile_pic, logo));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateAccountTypeId = (e) => { setAccount_type_id(e.target.value) };
  const updateUsername = (e) => { setUsername(e.target.value) };
  const updateName = (e) => { setName(e.target.value) };
  const updateEmail = (e) => { setEmail(e.target.value) };
  const updateBio = (e) => { setBio(e.target.value) };
  const updatePassword = (e) => { setPassword(e.target.value) };
  const updateRepeatPassword = (e) => { setRepeatPassword(e.target.value) };
  const updateProfile_pic = (e) => { setProfile_pic(e.target.value) };
  const updateLogo = (e) => { setLogo(e.target.value) };


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='allsignup'>
      <div className="mainsignup">
        <div className="signup">
          {/* <img className="loginImage" src=""></img> */}
          <br />
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}

            </div>
            <FormSelect field='account_type' updateValue={updateAccountTypeId} preselection={account_type_id} />

            <div>
              <FormInput field='username' updateValue={updateUsername} placeholder='Username' preselection={username} />
            </div>

            <div>
              <FormInput field='name' updateValue={updateName} placeholder='Name' preselection={name} />
            </div>

            <div>
              <FormInput field='email' updateValue={updateEmail} placeholder='Email' preselection={email} />
            </div>

            <div>
              <FormInput field='bio' updateValue={updateBio} placeholder='Bio' preselection={bio} />
            </div>

            <div>
              <FormInput field='password' updateValue={updatePassword} placeholder='Password' preselection={password} />
            </div>

            <div>
              <FormInput field='password' updateValue={updateRepeatPassword} placeholder='Repeat Password' preselection={repeatPassword} />
            </div>

            <div>
              <FormInput field='profile_pic' updateValue={updateProfile_pic} placeholder='Profile Picture URL' preselection={profile_pic} />
            </div>

            <div>
              <FormInput field='logo' updateValue={updateLogo} placeholder='Logo' preselection={logo} />
            </div>

            <button type='submit'>Sign Up</button>

          </form>
          <div>
            <p id='account'>Have an account?
              <NavLink to='/login'>
                <b id='signUp'>   Log in</b>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div >
  );
};

export default SignUpForm;
