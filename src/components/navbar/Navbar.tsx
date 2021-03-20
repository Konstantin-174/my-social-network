import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <section className="section_inner-nav">
            <div>
                <NavLink to="/profile" className="app_wrapper__nav-active">Profile</NavLink>
            </div>
            <div>
                {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                <NavLink to="/dialogs" className="app_wrapper__nav-active">Messages</NavLink>
            </div>
            <div>
                <a href="#s">News</a>
            </div>
            <div>
                <a href="#s">Friends</a>
            </div>
        </section>
    )
}