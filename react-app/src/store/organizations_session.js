// constants
const SET_ORGANIZATION = 'organizations_session/SET_ORGANIZATION';
const REMOVE_ORGANIZATION = 'organizations_session/REMOVE_ORGANIZATION';

const setOrganization = (organization) => ({
  type: SET_ORGANIZATION,
  payload: organization
});

const removeOrganization = () => ({
  type: REMOVE_ORGANIZATION,
})

const initialState = { organization: null };

export const org_authenticate = () => async (dispatch) => {
  const response = await fetch('/api/organizations_auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setOrganization(data));
  }
}

export const org_login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/organizations_auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setOrganization(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const org_logout = () => async (dispatch) => {
  const response = await fetch('/api/organizations_auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeOrganization());
  }
};


export const org_signUp = (name, email, password) => async (dispatch) => {
  const response = await fetch('/api/organizations_auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setOrganization(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORGANIZATION:
      return { organization: action.payload }
    case REMOVE_ORGANIZATION:
      return { organization: null }
    default:
      return state;
  }
}