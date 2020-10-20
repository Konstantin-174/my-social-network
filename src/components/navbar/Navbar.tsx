import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <div className={s.nav}>
            <div>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <a href="#s">News</a>
            </div>
            <div>
                <a href="#s">Friends</a>
            </div>
        </div>
    )
}