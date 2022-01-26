import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOnePost } from "../../../store/pet_post";
import FormDropdown from "../../FormsComponents/FormDropdown";
import FormInput from "../../FormsComponents/FormInput";
import NavBar from "../../NavBar/NavBar";
import FormAge from "../../FormsComponents/FormAge";
import FormDoubleButton from "../../FormsComponents/FormDoubleButton";


const NewPostForm = () => {
    const history = useHistory();
    const [clickedType, setClickedType] = useState('');
    const [clickedSex, setClickedSex] = useState('');
    const [clickedVaccionationStatus, setClickedVaccionationStatus] = useState('');
    const [clickedAge, setClickedAge] = useState(1);
    const [errors, setErrors] = useState([]);
    const [type, setType] = useState(1);
    const [sex, setSex] = useState(1);
    const [name, setName] = useState('');
    const [age, setAge] = useState(1);
    const [color, setColor] = useState(1);
    const [breed, setBreed] = useState('');
    const [pic_url1, setPic_url1] = useState('');
    const [pic_url2, setPic_url2] = useState('');
    const [pic_url3, setPic_url3] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [vaccination_status, setVaccination_status] = useState(1);
    const [bio, setBio] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const validate = () => {
        // const errors = [];
    }


    const submit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors) return setErrors(errors);
        const newPost = {
            user_id: user.id,
            type,
            name,
            sex,
            age,
            color,
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
        if (submited) {
            history.push(`/pet-post`)
        }
    }

    const updateType = e => {
        e.preventDefault()
        setClickedType(+e.target.value !== 1 ? true : false);
        setType(e.target.value)
    }

    const updateSex = e => {
        e.preventDefault()
        setClickedSex(+e.target.value !== 1 ? true : false);
        setSex(e.target.value)
    }

    const updateAge = e => {
        e.preventDefault()
        setAge(e.target.value)
        setClickedAge(e.target.value)
    }

    const updateVaccination_status = e => {
        e.preventDefault()
        setClickedVaccionationStatus(+e.target.value !== 1 ? true : false);
        setVaccination_status(e.target.value)
    }

    const updateColor = value => setColor(value[0].id)

    const updateName = e => setName(e.target.value)
    const updateBreed = e => setBreed(e.target.value)
    const updatePic_url1 = e => setPic_url1(e.target.value)
    const updatePic_url2 = e => setPic_url2(e.target.value)
    const updatePic_url3 = e => setPic_url3(e.target.value)
    const updateCharacteristics = e => setCharacteristics(e.target.value)
    const updateBio = e => setBio(e.target.value)
    const updateQuestion1 = e => setQuestion1(e.target.value)
    const updateQuestion2 = e => setQuestion2(e.target.value)
    const updateQuestion3 = e => setQuestion3(e.target.value)


    return (
        <>
            <NavBar />
            <div id='allsignup'>
                <div className="mainsignup">
                    <div className="signup" >
                        <form onSubmit={submit}>
                            <div>
                                {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                ))}
                            </div>
                            <p id="createanewpettext">Create new Pet post</p>

                            <FormDoubleButton clicked={clickedType} field='type' updateValue={updateType} preselection={type} />

                            <FormDoubleButton clicked={clickedSex} field='sex' updateValue={updateSex} preselection={sex} />

                            <FormAge field='age' clicked={clickedAge} updateValue={updateAge} preselection={age} />

                            <FormDoubleButton clicked={clickedVaccionationStatus} field='vaccination_status' updateValue={updateVaccination_status} preselection={vaccination_status} />

                            <FormDropdown field='color' updateValue={updateColor} />

                            <FormInput field='name' updateValue={updateName} placeholder='Name' />

                            <FormInput field='breed' updateValue={updateBreed} placeholder='Breed' />

                            <FormInput field='pic_url1' updateValue={updatePic_url1} placeholder='Picture' />

                            <FormInput field='pic_url2' updateValue={updatePic_url2} placeholder='Picture' />

                            <FormInput field='pic_url3' updateValue={updatePic_url3} placeholder='Picture' />

                            <FormInput field='characteristics' updateValue={updateCharacteristics} placeholder='Characteristics' />

                            <FormInput field='bio' updateValue={updateBio} placeholder='Bio' />

                            <FormInput field='question1' updateValue={updateQuestion1} placeholder='Question' />

                            <FormInput field='question2' updateValue={updateQuestion2} placeholder='Question' />

                            <FormInput field='question3' updateValue={updateQuestion3} placeholder='Question' />


                            <button type='submit'>Post</button>
                        </form>
                    </div>
                    <img id='logozoomiesvertical' alt='splash' src="https://i.imgur.com/qDk29Iy.png" />
                </div>
            </div>
        </>
    )
};

export default NewPostForm
