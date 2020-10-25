import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';

type ProfilePropsType = {
    posts: Array<PostsType>
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}