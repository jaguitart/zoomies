import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../NavBar/footer';
import FormInput from '../FormsComponents/FormInput';
import FormTypeOfAccount from '../FormsComponents/FormTypeOfAccount';
import './form.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [account_type_id, setAccount_type_id] = useState(1);
  const [biosize, setSBioSize] = useState(false);
  const [clicked, setClicked] = useState('');
  const [organizationFields, setOrganizationFields] = useState(false);
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

  const updateUsername = (e) => { setUsername(e.target.value) };
  const updateName = (e) => { setName(e.target.value) };
  const updateEmail = (e) => { setEmail(e.target.value) };
  const updateBio = (e) => { setBio(e.target.value) };
  const updatePassword = (e) => { setPassword(e.target.value) };
  const updateRepeatPassword = (e) => { setRepeatPassword(e.target.value) };
  const updateProfile_pic = (e) => { setProfile_pic(e.target.value) };
  const updateLogo = (e) => { setLogo(e.target.value) };

  const updateAccountTypeId = (e) => {
    setAccount_type_id(e.target.value)
    setOrganizationFields(+e.target.value !== 1 ? true : false)
    setClicked(+e.target.value !== 1 ? true : false)
  };
  const bioSizeChanger = () => { setSBioSize(!biosize) };


  if (user) {
    return <Redirect to='/' />;
  }



  return (
    <>
      <div id='allsignup'>
        {/* AGREGAR INFORMACION DE COMO LLENAR EL FORMULARIO */}
        <div className="mainsignup">
          <div id='movingimgdiv'>
            <div className='fadein'>
              <img className="f1" alt='sideimg1' src="https://i.imgur.com/EcHmywZ.png" />
              <img className="f2" alt='sideimg2' src="https://i.imgur.com/bjRM2Ev.png" />
            </div>
          </div>
          <div className="signup" >
            <br />
            <p>First select your type of account:</p>
            <FormTypeOfAccount clicked={clicked} field='account_type' updateValue={updateAccountTypeId} />

            <form onSubmit={onSignUp}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}

              </div>
              {account_type_id && (
                <p>{`Creating an ${+account_type_id === 1 ? "User" : "Organization"} account`}</p>
              )}
              <div>
                <FormInput requiered='true' field='username' updateValue={updateUsername} placeholder='Username' preselection={username} />
              </div>
              {!organizationFields && (
                <div>
                  <FormInput field='name' updateValue={updateName} placeholder='Name' preselection={name} />
                </div>
              )}

              <div>
                <FormInput field='email' updateValue={updateEmail} placeholder='Email' preselection={email} />
              </div>

              <div>
              </div>

              <div>
                <FormInput field='password' updateValue={updatePassword} placeholder='Password' preselection={password} />
              </div>

              <div>
                <FormInput field='password' updateValue={updateRepeatPassword} placeholder='Repeat Password' preselection={repeatPassword} />
              </div>
              {!organizationFields && (
                <div>
                  <FormInput field='profile_pic' updateValue={updateProfile_pic} placeholder='Profile Picture URL' preselection={profile_pic} />
                </div>
              )}

              {organizationFields && (
                <div>
                  <FormInput field='logo' updateValue={updateLogo} placeholder='Logo' preselection={logo} />
                </div>
              )}

              <div>
                <textarea placeholder='Tell us about you...' onClick={bioSizeChanger} className={biosize ? 'bigbio' : ''} id='biotextarea' type='text' name='bio' onChange={updateBio} value={bio} />
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
          <img id='logozoomiesvertical' alt='splash' src="https://i.imgur.com/qDk29Iy.png" />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </div >
    </>
  );
};

export default SignUpForm;
