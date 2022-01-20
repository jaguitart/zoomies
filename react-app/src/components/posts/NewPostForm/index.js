import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const NewPostForm = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [imgURL, setImgURL] = useState('');
    const [caption, setCaption] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const validUrl = require('valid-url');

    const validate = () => {
        const errors = [];
        if (!imgURL || !validUrl.isUri(imgURL)) {
            errors.push("Please provide an image URL for your photo.")
        }
        else if (caption.length > 2200) {
            errors.push("Character limit is 2200.")
        }
        return errors
    }


    const submit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setErrors(errors);

        const newPost = {
            user_id: user.id,
            imgURL,
            caption,
        }
        let submited = await dispatch(addOnePost(newPost))
        if (submited) {
            history.push(`/users/${user.id}`)
        }
    }

    const updateImgURL = e => {
        setImgURL(e.target.value)
    }
    console.log(imgURL)

    const updateCaption = e => {
        setCaption(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <img src={user.profileURL} alt="demo"></img>
                    <p>&nbsp;&nbsp;{user.name}</p>
                </div>
                <p>Create new post</p>
                
                <div>
                    <label htmlFor='imgURL'></label>
                    <input
                        name='imgURL'
                        type='text'
                        placeholder="Image URL"
                        value={imgURL}
                        onChange={updateImgURL}
                        width="600px"
                    />
                </div>
                
                <div>
                    <label  htmlFor='caption'></label>
                    <textarea
                        name='caption'
                        type='text'
                        placeholder="Write a caption..."
                        value={caption}
                        onChange={updateCaption}
                    />
                </div>
                
                <button type='submit'>Post</button>
            </form>
        </div>
    )
};

export default NewPostForm
