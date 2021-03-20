import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="section-inner section-navbar">
            <div>
                <NavLink to="/profile" className="section-navbar__active">Profile</NavLink>
            </div>
            <div>
                {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                <NavLink to="/dialogs" className="section-navbar__active">Messages</NavLink>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Friends</a>
            </div>
        </nav>
    )
}