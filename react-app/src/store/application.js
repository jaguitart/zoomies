const GET_APPLICATIONS = 'applications/GET_APPLICATIONS';
const ADD_APPLICATION = 'applications/ADD_APPLICATION';
const UPDATE_APPLICATION = 'applications/UPDATE_APPLICATION';
const DELETE_APPLICATION = 'applications/DELETE_APPLICATION';

const getApplications = applications => ({
    type: GET_APPLICATIONS,
    payload: applications
})

const addApplication = application => ({
    type: ADD_APPLICATION,
    payload: application
})

const updateApplication = application => ({
    type: UPDATE_APPLICATION,
    payload: application
})

const deleteApplication = application => ({
    type: DELETE_APPLICATION,
    payload: application
})

//EVALUAR SI VALE LA PENA HACERLO EN FUNCION DE LA ORGANIZACION Y NO DEL POST ESPECIFICO
export const getAllApplications = postId => async dispatch => {
    const res = await fetch(`/api/pet-posts/${postId}/applications`)
    if (res.ok) {
        const data = await res.json();
        if (data.errors) {
            return;
        }

        dispatch(getApplications(data));
        return data
    }
}

export const addOneApplication = application => async dispatch => {
    const res = await fetch(`/api/posts/${application.post_id}/applications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(application)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addApplication(data))
        return data
    }
}

export const updateOneApplication = application => async dispatch => {
    const res = await fetch(`/api/applications/${application.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(application)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(updateApplication(data))
        return data
    }
}

export const deleteOneApplication = id => async dispatch => {
    const res = await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
    })
    if (res.ok) {
        dispatch(deleteApplication(id))
        return 'Successfully deleted.'
    }
}

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_APPLICATIONS:
            newState = {}
            action.payload.applications.map((application) => newState[application.id] = application )
            return newState
        case ADD_APPLICATION:
            newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState
        case UPDATE_APPLICATION:
            state[action.payload.application.id] = action.payload.application;
            newState = { ...state };
            return newState
        case DELETE_APPLICATION:
            newState = { ...state }
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}