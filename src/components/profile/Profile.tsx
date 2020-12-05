import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
    updateNewPostText: (text: string) => void
    newText: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newText={props.newText}
            />
        </div>
    )
}