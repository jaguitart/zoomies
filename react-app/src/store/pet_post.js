const GET_POSTS = 'posts/GET_POSTS';
const ADD_POST = 'posts/ADD_POST';
const UPDATE_POST = 'posts/UPDATE_POST';
const DELETE_POST = 'posts/DELETE_POST';


const getPosts = posts => ({
    type: GET_POSTS,
    payload: posts
});

const addPost = post => ({
    type: ADD_POST,
    payload: post
})

const updatePost = post => ({
    type: UPDATE_POST,
    payload: post
})

const deletePost = post => ({
    type: DELETE_POST,
    payload: post
})



export const getAllPosts = () => async dispatch => {
    const res = await fetch('/api/posts/')
    if (res.ok) {
        const data = await res.json();
        if (data.errors) {
            return;
        }
        dispatch(getPosts(data));
        return data
    }
}

export const addOnePost = post => async dispatch => {
    const imgForm = new FormData()
    imgForm.append('user_id', post.user_id);
    imgForm.append('type', post.type);
    imgForm.append('name', post.name);
    imgForm.append('sex', post.sex);
    imgForm.append('age', post.age);
    imgForm.append('color', post.color);
    imgForm.append('size', post.size);
    imgForm.append('breed', post.breed);
    imgForm.append('pic_url1', post.pic_url1);
    imgForm.append('pic_url2', post.pic_url2);
    imgForm.append('pic_url3', post.pic_url3);
    imgForm.append('characteristics', post.characteristics);
    imgForm.append('vaccination_status', post.vaccination_status);
    imgForm.append('bio', post.bio);
    imgForm.append('question1', post.question1);
    imgForm.append('question2', post.question2);
    imgForm.append('question3', post.question3);

    const res = await fetch('/api/posts/', {
        method: 'POST',
        'Content-Type': 'multipart/form-data',
        body: imgForm
    })
    if (res.ok) {
        const data = await res;
        dispatch(addPost(data))
        return data
    }
}

export const updateOnePost = post => async dispatch => {
    const res = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(updatePost(data))
        return data
    }
}

export const deleteOnePost = id => async dispatch => {
    const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    })
    if (res.ok) {
        dispatch(deletePost(id))
        return 'Successfully deleted.'
    }
}




const initialState = {};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_POSTS:
            newState = { ...state }
            action.payload.posts.map(post => newState[post.id] = post)
            return newState

        case ADD_POST:
            newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState

        case UPDATE_POST:
            state[action.payload.id] = action.payload;
            newState = { ...state };
            return newState

        case DELETE_POST:
            newState = { ...state }
            delete newState[action.payload]
            return newState


        default:
            return state;
    }
}
