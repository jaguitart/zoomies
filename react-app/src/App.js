import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import NewPostForm from './components/posts/NewPostForm';
import EditPostForm from './components/posts/EditPostForm';
import Posts from './components/posts/Posts'
import PetPost from './components/posts/PetPost';
import { getAllPosts } from './store/pet_post';
import { authenticate } from './store/session';
import { getAllApplications } from './store/application';
import { getUsers } from './store/user';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getAllApplications());
      await dispatch(getAllPosts());
      await dispatch(getUsers());
      setLoaded(true);
    })();
  }, [dispatch]);


  const posts = Object.values(useSelector(state => state.posts))
  const users = Object.values(useSelector(state => state.users))

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/new-pet-post' exact={true}>
          <NewPostForm />
        </Route>
        <Route path='/pet-post/:id/edit' exact={true}>
          <EditPostForm posts={posts} />
        </Route>
        <Route path='/pet-post/:id' exact={true}>
          <PetPost posts={posts} />
        </Route>
        <Route path='/pet-post' exact={true}>
          <Posts posts={posts} />
        </Route>
        <Route path='/users' exact={true} >
          <UsersList />
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User users={users} posts={posts} />
        </Route>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
