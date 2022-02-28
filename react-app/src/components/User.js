import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import SingleApplication from './applications/SingleApplication';
import NavBar from './NavBar/NavBar';
import SinglePost from './posts/SinglePost';
import { GiDogHouse } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import CheckedApplications from './applications/CheckedApplications';
import { getUsers } from '../store/user';

function User({ users, posts }) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const profile_owner = users.find(owner => +owner.id === +userId)
  const applications = Object.values(useSelector(state => state.applications ? state.applications : undefined));
  const user = useSelector(state => state.session.user ? state.session.user : undefined)
  const accountType = user?.account_type.id


  useEffect(() => {
    (async () => {
      await dispatch(getUsers());
    })();
  }, [dispatch]);


  let visibleApplications;
  let visiblePosts;
  if (accountType === 1) {
    visibleApplications = applications.filter(application => application.user_id === user.id)
    //AGREGAR LOS POSTS QUE EL USUARIO DA LIKE
  } else {
    visiblePosts = posts.filter(post => post?.user_id === user?.id)
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
    return <Redirect to='/login' />;
  }



  return (
    <>
      <NavBar />
      <div className='user-allprofile'>
        <div className='user-usercard'>
          <div className='user-background'>
            <img id='user-profilepic' src={profile_owner?.profile_pic} alt={profile_owner?.profile_ownername} width="75px" max-height='75px' />
          </div>

          <div id='user-textinfo'>
            {accountType === 2 ? <GiDogHouse id='user-icon' className='icon' /> : <BsFillPersonFill id='user-icon' className='icon' />}

            <p id='user-username'>{profile_owner?.username}</p>
            {accountType === 2 && (
              <div id='user-numericinfo'>
                <MdPets id='user-smallicon' className='icon' />
                <span id='user-number'>{visiblePosts.length}</span>
                <span id='user-dot'>•</span>
                <FaRegHandshake id='user-smallicon' className='icon' />
                <span id='user-number'>{visibleApplications.filter(application => application.status).length}</span>
              </div>
            )}
            <p>{profile_owner?.bio}</p>
          </div>
        </div>

        <div id='user-postsandappdiv'>
          <div>
            {accountType === 2 && (
              <h3 className='user-pendingapplicationstext'>Pending Applications</h3>
            )}

            {accountType === 1 && (
              <h3 className='user-pendingapplicationstext'>Your applications</h3>
            )}

            {visibleApplications
              .filter(noReviewed => noReviewed.status === null)
              .map(application => (
                <div key={application.id}>
                  <SingleApplication application={application} />
                </div>
              ))}

            {accountType === 2 && (
              <>
                <h3 className='user-pendingapplicationstext'>Your posts</h3>
                <div id='user-posts'>
                  {visiblePosts.map(post =>
                    <div key={post.id}>
                      <SinglePost post={post} resize='resize' />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className='user-reviewedapplications'>
          <div className='user-approvedapplications'>
            <h3 className='user-applicationssidebar'>Approved Applications</h3>
            {visibleApplications
              .filter(noReviewed => noReviewed.status)
              .map(application => (
                <div key={application.id}>
                  <CheckedApplications application={application} />
                </div>
              ))}
          </div>

          <div className='user-rejectedapplications'>
            <h3 className='user-applicationssidebar'>Rejected Applications</h3>
            {visibleApplications
              .filter(noReviewed => noReviewed.status === false)
              .map(application => (
                <div key={application.id}>
                  <CheckedApplications application={application} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default User;