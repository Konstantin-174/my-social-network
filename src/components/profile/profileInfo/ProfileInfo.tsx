import React from 'react';
import classes from './ProfileInfo.module.scss'

export function ProfileInfo() {
    return (
        <section className={classes.profileWrapperInfo}>
            <div className={classes.image}>
                <img src="https://images.wallpaperscraft.ru/image/ekran_televizor_ispytatelnaia_tablitsa_129823_1024x768.jpg" alt="Profile background"/>
            </div>
            <div className={classes.content}>
                AVA + DESCRIPTION
            </div>
        </section>
    )
}