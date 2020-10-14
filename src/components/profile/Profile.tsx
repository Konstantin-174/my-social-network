import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';

export function Profile() {
    return (
        <div className={s.content}>
            <div className={s.profile_img}>
                <img src="https://images.wallpaperscraft.ru/image/ekran_televizor_ispytatelnaia_tablitsa_129823_1024x768.jpg" alt="Profile image"/>
            </div>
            <div>
                AVA + DESCRIPTION
            </div>
            <MyPosts/>
        </div>
    )
}