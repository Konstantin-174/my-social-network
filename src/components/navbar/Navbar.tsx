import React from 'react';
import s from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={s.nav}>
            <a href="#s">Profile</a><br/>
            <a href="#s">News</a><br/>
            <a href="#s">Messages</a><br/>
            <a href="#s">Friends</a><br/>
        </div>
    )
}