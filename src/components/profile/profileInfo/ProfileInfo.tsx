import React from 'react';
import s from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <div className={s.profile_img}>
                <img src="https://images.wallpaperscraft.ru/image/ekran_televizor_ispytatelnaia_tablitsa_129823_1024x768.jpg" alt="Profile image"/>
            </div>
            <div className={s.description}>
                AVA + DESCRIPTION
            </div>
        </div>
    )
}