import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import SingleApplication from './applications/SingleApplication';
import NavBar from './NavBar/NavBar';


function User({ users, posts }) {
  const { userId } = useParams();
  const profile_owner = users.find(owner => +owner.id === +userId)
  const applications = Object.values(useSelector(state => state.applications ? state.applications : undefined));
  const user = useSelector(state => state.session.user ? state.session.user : undefined)
  const accountType = user?.account_type.id

  let visibleApplications;
  if (accountType === 1) {
    visibleApplications = applications.filter(application => application.user_id === user.id)
  } else {
    const orgPosts = posts.filter(post => post?.user_id === user?.id).map(post => post.id)
    visibleApplications = []
    for (let i = 0; i < orgPosts.length; i++) {
      const orgPost = orgPosts[i];
      for (let i = 0; i < applications.length; i++) {
        const application = applications[i];
        if (application.post_id === orgPost) {
          visibleApplications.push(application)
        }
      }
    }
  }


  if (!user) {
    return <Redirect to='/' />;
  }



  return (
    <>
      <NavBar />
      <div>
        <div>
          <img src={profile_owner?.profile_pic} alt={profile_owner?.profile_ownername} width="75px" max-height='75px' />
        </div>
        <div>
          <strong>Username</strong> <i>{profile_owner.username}</i>
        </div>
        <div>
          <strong>Email</strong> <i>{profile_owner.email}</i>
        </div>
        <div>
          <strong>Bio</strong> <i>{profile_owner.bio}</i>
        </div>
        {visibleApplications.map(application => (
          <div key={application.id}>
            <SingleApplication application={application} />
          </div>
        ))}
      </div>
    </>
  );
}
export default User;