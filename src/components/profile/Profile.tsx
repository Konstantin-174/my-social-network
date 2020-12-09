import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {RootStateType} from '../../redux/state';

type ProfilePropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (text: string) => void
    }

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts newText={props.state.profilePage.newText}
                     posts={props.state.profilePage.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}