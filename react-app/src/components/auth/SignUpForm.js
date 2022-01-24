import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import FormSelect from '../FormsComponents/FormSelect';
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
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

      <FormSelect field='account_type' updateValue={updateAccountTypeId} preselection={account_type_id} />

      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>

      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={updateName}
          value={name}
        ></input>
      </div>

      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>

      <div>
        <label>Bio</label>
        <input
          type='text'
          name='bio'
          onChange={updateBio}
          value={bio}
        ></input>
      </div>

      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>

      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>

      <div>
        <label>Profile Pic</label>
        <input
          type='profile_pic'
          name='profile_pic'
          onChange={updateProfile_pic}
          value={profile_pic}
        ></input>
      </div>

      <div>
        <label>Logo</label>
        <input
          type='logo'
          name='logo'
          onChange={updateLogo}
          value={logo}
        ></input>
      </div>

      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
