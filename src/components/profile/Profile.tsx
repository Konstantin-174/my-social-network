import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './posts/MyPosts';

const Profile = () => {
    return (
        <section className={local.profileWrap}>
          <div className={local.avaDiscript}>
              <Avatar/>
              <ProfileInfo/>
          </div>
            <MyPosts/>
        </section>
    )
}

export default Profile;