import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOnePost, getAllPosts } from "../../../store/pet_post";
import FormDropdown from "../../FormsComponents/FormDropdown";
import FormDropdownBreed from "../../FormsComponents/FormDropDownBreeds";
import FormInput from "../../FormsComponents/FormInput";
import FormImageAWS from "../../FormsComponents/FormImageAWS";
import NavBar from "../../NavBar/NavBar";
import FormAge from "../../FormsComponents/FormAge";
import FormDoubleButton from "../../FormsComponents/FormDoubleButton";
import FormSize from "../../FormsComponents/FormSize";

const NewPostForm = () => {
    const history = useHistory();
    const [clickedType, setClickedType] = useState(1);
    const [clickedSex, setClickedSex] = useState(1);
    const [clickedSize, setClickedSize] = useState(1);
    const [clickedVaccionationStatus, setClickedVaccionationStatus] = useState(1);
    const [clickedAge, setClickedAge] = useState(1);
    const [errors1, setErrors1] = useState([]);
    const [errors2, setErrors2] = useState([]);
    const [errors3, setErrors3] = useState([1]);
    const [type, setType] = useState(1);
    const [sex, setSex] = useState(1);
    const [size, setSize] = useState(1);
    const [name, setName] = useState('');
    const [age, setAge] = useState(1);
    const [color, setColor] = useState(1);
    const [breed, setBreed] = useState(1);
    const [pic_url1, setPic_url1] = useState('');
    const [file_pic_url1, setFile_pic_url1] = useState('');
    const [pic_url2, setPic_url2] = useState('');
    const [file_pic_url2, setFile_pic_url2] = useState('');
    const [pic_url3, setPic_url3] = useState('');
    const [file_pic_url3, setFile_pic_url3] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [vaccination_status, setVaccination_status] = useState(1);
    const [bio, setBio] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');

    const [formPage, setFormPage] = useState(1);

    const validate1 = () => {
        let errores = []
        if (!type) errores.push('TYPE')
        else if (!sex) errores.push('SEX')
        else if (!size) errores.push('SIZE')
        else if (!age) errores.push('AGE')
        else if (!vaccination_status) errores.push('VACCINATION')
        else if (!breed) errores.push('BREED')
        else if (!color) errores.push('COLOR')
        setErrors1(errores)
        console.log(errores);
    }
    const validate2 = () => {
        let errores = []
        if (!name) errores.push('Please provide a Name')
        if (!pic_url1) errores.push('Please upload picture1')
        if (!characteristics) errores.push('Please provide some characteristics')
        setErrors2(errores)
    }
    const validate3 = () => {
        let errores = []
        if (!bio) errores.push('BIO')
        if (!question1) errores.push('Q1')
        if (!question2) errores.push('Q2')
        if (!question3) errores.push('Q3')
        setErrors3(errores)
    }

    const nextStep = (e) => {
        console.log(formPage)
        e.preventDefault()
        if (formPage === 1) {
            validate1()
            if (errors1.length === 0) setFormPage(formPage + 1)
            setErrors2([''])
        }
        if (formPage === 2) {
            validate2()
            if (errors2.length === 0) {
                setFormPage(formPage + 1)
                if (pic_url1) setFile_pic_url1('OKfile');
                if (pic_url2) setFile_pic_url2('OKfile');
                if (pic_url3) setFile_pic_url3('OKfile');
            }
            console.log('***', errors2);
        }
        if (formPage === 3) {
            validate3()
        }
    }
    const backStep = (e) => {
        e.preventDefault()
        setFormPage(formPage - 1)
    }

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const submit = async (e) => {
        e.preventDefault();
        const errors = validate1();

        if (errors) return setErrors3(errors);
        const newPost = {
            user_id: user.id,
            type,
            name,
            sex,
            age,
            color,
            size,
            breed,
            pic_url1,
            pic_url2,
            pic_url3,
            characteristics,
            vaccination_status,
            bio,
            question1,
            question2,
            question3
        }
        let submited = await dispatch(addOnePost(newPost))
        await dispatch(getAllPosts())
        if (submited) {
            history.push(`/users/${user.id}`)
        }
    }

    const updateType = e => {
        e.preventDefault()
        setClickedType(+e.target.value);
        setType(e.target.value)
    }

    const updateSex = e => {
        e.preventDefault()
        setClickedSex(+e.target.value);
        setSex(e.target.value)
    }

    const updateSize = e => {
        e.preventDefault()
        setSize(e.target.value)
        setClickedSize(e.target.value)
    }

    const updateAge = e => {
        e.preventDefault()
        setAge(e.target.value)
        setClickedAge(e.target.value)
    }

    const updateVaccination_status = e => {
        e.preventDefault()
        setClickedVaccionationStatus(+e.target.value);
        setVaccination_status(e.target.value)
    }
    const updateColor = value => setColor(value[0].id)
    const updateBreed = value => setBreed(value[0].id)
    const updateName = e => setName(e.target.value)
    const updatePic_url1 = e => {
        const file = e.target.files[0];
        if (file) setPic_url1(file);
    }
    const updatePic_url2 = e => {
        const file = e.target.files[0];
        if (file) setPic_url2(file);
    }
    const updatePic_url3 = e => {
        const file = e.target.files[0];
        if (file) setPic_url3(file);
    }
    const updateCharacteristics = e => setCharacteristics(e.target.value)
    const updateBio = e => setBio(e.target.value)
    const updateQuestion1 = e => setQuestion1(e.target.value)
    const updateQuestion2 = e => setQuestion2(e.target.value)
    const updateQuestion3 = e => setQuestion3(e.target.value)

    const [biosize, setSBioSize] = useState(false);
    const bioSizeChangerTrue = () => setSBioSize(true);
    const bioSizeChangerFalse = () => setSBioSize(false);

    return (
        <>
            <NavBar />
            <div id='allsignup' onClickCapture={bioSizeChangerFalse}>
                <div className="mainsignup">
                    <div id='signup-form-container' className="signup" >
                        <form onSubmit={submit}>
                            <p id="createanewpettext">Create new Pet post {formPage}/3</p>
                            {formPage === 1 && (
                                <>
                                    <p id='vaccionationstatustext'>Type of pet:</p>
                                    <FormDoubleButton clicked={clickedType} field='type' updateValue={updateType} preselection={type} />

                                    <p id='vaccionationstatustext'>Pet sex:</p>
                                    <FormDoubleButton clicked={clickedSex} field='sex' updateValue={updateSex} preselection={sex} />

                                    <p id='vaccionationstatustext'>Size:</p>
                                    <FormSize clicked={clickedSize} field='size' updateValue={updateSize} preselection={size} />

                                    <p id='vaccionationstatustext'>Age:</p>
                                    <FormAge field='age' clicked={clickedAge} updateValue={updateAge} preselection={age} />

                                    <p id='vaccionationstatustext'>Vaccionation Status:</p>
                                    <FormDoubleButton clicked={clickedVaccionationStatus} field='vaccination_status' updateValue={updateVaccination_status} preselection={vaccination_status} />

                                    <p id='vaccionationstatustext'>Fur color:</p>
                                    <FormDropdown field='color' updateValue={updateColor} required={true} />

                                    <p id='vaccionationstatustext'>Breed:</p>
                                    <FormDropdownBreed type={type} field='breed' updateValue={updateBreed} required={true} />

                                    <button id='single-nextback' onClickCapture={nextStep}>Next</button>
                                </>
                            )}
                            {formPage === 2 && (
                                <>
                                    {(errors2.map((error, idx) => <i key={error} className='loginErrors'>{error}<br/></i>))}

                                    <p id='vaccionationstatustext'>Pet Name:</p>
                                    <FormInput field='name' preselection={name} updateValue={updateName} placeholder='Pet name' required={true} />

                                    <p id='add-images' >Add some pictures:</p>
                                    <p id='vaccionationstatustext'>Picture 1</p>
                                    <FormImageAWS field='pic_url1' extraclass={file_pic_url1} updateValue={updatePic_url1} required={true} />
                                    <p id='vaccionationstatustext'>Picture 2 (optional)</p>
                                    <FormImageAWS field='pic_url2' extraclass={file_pic_url2} updateValue={updatePic_url2} />
                                    <p id='vaccionationstatustext'>Picture 3 (optional)</p>
                                    <FormImageAWS field='pic_url3' extraclass={file_pic_url3} updateValue={updatePic_url3} />
                                    <p id='vaccionationstatustext'>Give us some characteristics of the pet:</p>
                                    <FormInput field='characteristics' preselection={characteristics} updateValue={updateCharacteristics} placeholder='Characteristics' required={true} />
                                    <br />
                                    <div id="doublebutton" className="single-nextback">
                                        <button id='doublebuttonleft' onClick={backStep}>Back</button>
                                        <button id='doublebuttonright' onClickCapture={nextStep}>Next</button>
                                    </div>
                                </>
                            )}
                            {formPage === 3 && (
                                <>
                                    <p id='vaccionationstatustext'>Pet bio:</p>
                                    <div>
                                        <textarea required={true} value={bio} placeholder='Tell us about yourself...' onClick={bioSizeChangerTrue} className={biosize ? 'bigbio' : ''} id='biotextarea' type='text' name='bio' onChange={updateBio} />
                                    </div>

                                    <p id='add-images'>Personalize your application <br /> templete with three questions:</p>
                                    <p id='vaccionationstatustext'>Question 1:</p>
                                    <FormInput field='question1' preselection={question1} updateValue={updateQuestion1} placeholder='1.Make a question to the applicant' required={true} />

                                    <p id='vaccionationstatustext'>Question 2:</p>
                                    <FormInput field='question2' preselection={question2} updateValue={updateQuestion2} placeholder='2.Make a question to the applicant' required={true} />

                                    <p id='vaccionationstatustext'>Question 3:</p>
                                    <FormInput field='question3' preselection={question3} updateValue={updateQuestion3} placeholder='3.Make a question to the applicant' required={true} />
                                    <br />
                                    <button id='single-nextback' onClick={backStep}>Back</button>
                                    <br />
                                    <button id='signup-postbutton' type='submit'>Post</button>
                                </>
                            )}
                        </form>
                    </div>
                    <img id='logozoomiesvertical' alt='splash' src="https://i.imgur.com/qDk29Iy.png" />
                </div>
            </div>
        </>
    )
};

export default NewPostForm
