import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionTypes, RootStateType} from '../../redux/state';

type ProfilePropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
    }

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts newText={props.state.profilePage.newText}
                     posts={props.state.profilePage.posts}
                     dispatch={props.dispatch}
            />
        </div>
    )
}