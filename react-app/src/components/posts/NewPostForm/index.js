import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addOnePost } from "../../../store/pet_post";

const NewPostForm = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');
    const [breed, setBreed] = useState('');
    const [pic_url1, setPic_url1] = useState('');
    const [pic_url2, setPic_url2] = useState('');
    const [pic_url3, setPic_url3] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [vaccination_status, setVaccination_status] = useState('');
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

    const updateType = e => setType(e.target.value)
    const updateName = e => setName(e.target.value)
    const updateSex = e => setSex(e.target.value)
    const updateAge = e => setAge(e.target.value)
    const updateColor = e => setColor(e.target.value)
    const updateBreed = e => setBreed(e.target.value)
    const updatePic_url1 = e => setPic_url1(e.target.value)
    const updatePic_url2 = e => setPic_url2(e.target.value)
    const updatePic_url3 = e => setPic_url3(e.target.value)
    const updateCharacteristics = e => setCharacteristics(e.target.value)
    const updateVaccination_status = e => setVaccination_status(e.target.value)
    const updateBio = e => setBio(e.target.value)
    const updateQuestion1 = e => setQuestion1(e.target.value)
    const updateQuestion2 = e => setQuestion2(e.target.value)
    const updateQuestion3 = e => setQuestion3(e.target.value)

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <p>Create new Pet post</p>
                <div>
                    <label htmlFor='type' />
                    <input name='type' type='text' placeholder="Type" value={type}
                        onChange={updateType} />
                </div>

                <div>
                    <label htmlFor='name' />
                    <input name='name' type='text' placeholder="Name" value={name}
                        onChange={updateName} />
                </div>

                <div>
                    <label htmlFor='sex' />
                    <input name='sex' type='text' placeholder="Sex" value={sex}
                        onChange={updateSex} />
                </div>

                <div>
                    <label htmlFor='age' />
                    <input name='age' type='text' placeholder="Age" value={age}
                        onChange={updateAge} />
                </div>

                <div>
                    <label htmlFor='color' />
                    <input name='color' type='text' placeholder="Color" value={color}
                        onChange={updateColor} />
                </div>

                <div>
                    <label htmlFor='breed' />
                    <input name='breed' type='text' placeholder="Breed" value={breed}
                        onChange={updateBreed} />
                </div>

                <div>
                    <label htmlFor='pic_url1' />
                    <input name='pic_url1' type='text' placeholder="Picture" value={pic_url1}
                        onChange={updatePic_url1} />
                </div>

                <div>
                    <label htmlFor='pic_url2' />
                    <input name='pic_url2' type='text' placeholder="Picture" value={pic_url2}
                        onChange={updatePic_url2} />
                </div>

                <div>
                    <label htmlFor='pic_url3' />
                    <input name='pic_url3' type='text' placeholder="Picture" value={pic_url3}
                        onChange={updatePic_url3} />
                </div>

                <div>
                    <label htmlFor='characteristics' />
                    <input name='characteristics' type='text' placeholder="Characteristics" value={characteristics}
                        onChange={updateCharacteristics} />
                </div>

                <div>
                    <label htmlFor='vaccination_status' />
                    <input name='vaccination_status' type='text' placeholder="Vaccination Status" value={vaccination_status}
                        onChange={updateVaccination_status} />
                </div>

                <div>
                    <label htmlFor='bio' />
                    <input name='bio' type='text' placeholder="Bio" value={bio}
                        onChange={updateBio} />
                </div>

                <div>
                    <label htmlFor='question1' />
                    <input name='question1' type='text' placeholder="Question" value={question1}
                        onChange={updateQuestion1} />
                </div>

                <div>
                    <label htmlFor='question2' />
                    <input name='question2' type='text' placeholder="Question" value={question2}
                        onChange={updateQuestion2} />
                </div>

                <div>
                    <label htmlFor='question3' />
                    <input name='question3' type='text' placeholder="Question" value={question3}
                        onChange={updateQuestion3} />
                </div>

                <button type='submit'>Post</button>
            </form>
        </div>
    )
};

export default NewPostForm
