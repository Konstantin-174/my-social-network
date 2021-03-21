import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import { ProfileActionsType } from '../../redux/profileReducer';
import { AppStateType } from '../../redux/redux-store';

type ProfilePropsType = {
    state: AppStateType
    dispatch: (action: ProfileActionsType) => void
    }

export function Profile(props: ProfilePropsType) {
    return (
        <section className="section-inner section-profile__content">
            <ProfileInfo/>
            <MyPosts newText={props.state.profileReducer.newText}
                     posts={props.state.profileReducer.posts}
                     dispatch={props.dispatch}
            />
        </section>
    )
}