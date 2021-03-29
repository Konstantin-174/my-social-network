import React from 'react';
import classes from './Header.module.scss';

export function Header() {
    return (
        <header className={classes.sectionHeader}>
            <div className={classes.sectionWrapper}>
                <div className={classes.logo}>
                    <img src="https://image.flaticon.com/icons/png/512/25/25719.png"/>
                </div>
                <div className={classes.text}>
                    WELCOME TO MY SOCIAL NETWORK
                </div>
            </div>
        </header>
    )
}
