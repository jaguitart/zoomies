import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import About from './components/about';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import User from './components/User';
import NewPostForm from './components/posts/NewPostForm';
import EditPostForm from './components/posts/EditPostForm';
import Posts from './components/posts/Posts'
import PetPost from './components/posts/PetPost';
import Dogs from './components/posts/Dogs';
import Cats from './components/posts/Cats';
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

  const users = Object.values(useSelector(state => state.users))
  const applications = Object.values(useSelector(state => state.applications))

  const approvedApplicationsOnPosts = applications.filter(application => application.status).map(application => application.post_id)
  const posts = Object.values(useSelector(state => state.posts))
  const reposts = posts.slice().filter(post => !approvedApplicationsOnPosts.includes(post.id))


  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
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
          <PetPost posts={posts} applications={applications} />
        </Route>
        <Route path='/' exact={true}>
          <Posts posts={reposts} />
        </Route>
        <Route path='/pet-post' exact={true}>
          <Posts posts={reposts} />
        </Route>
        <Route path='/cats' exact={true}>
          <Cats posts={reposts} />
        </Route>
        <Route path='/dogs' exact={true}>
          <Dogs posts={reposts} />
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User users={users} posts={posts} />
        </Route>
        <Route path='/about' exact={true} >
          <About posts={reposts} applications={applications} users={users} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
