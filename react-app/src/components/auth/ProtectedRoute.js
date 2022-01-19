import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  const organization = useSelector(state => state.organizations_session.organization)
  return (
    <Route {...props}>
      {(user)? props.children  : <Redirect to='/login'/> || (organization)? props.children  : <Redirect to='/login' />}
    </Route>
  )
};


export default ProtectedRoute;
