const GET_ALL_USER = 'session/GET_ALL_USER';

const getAllUser = (users) => ({
  type: GET_ALL_USER,
  payload: users
});

export const getUsers = () => async dispatch => {
  const res = await fetch('/api/users')
  if (res.ok) {
    const data = await res.json();
    if (data.errors) {
      return;
    }
    dispatch(getAllUser(data));
    return data
  }
}

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_USER:
      newState = { ...state }
      action.payload.users.map(user => newState[user.id] = user)
      return newState

    default:
      return state;
  }
}