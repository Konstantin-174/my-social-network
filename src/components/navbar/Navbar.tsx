import React from 'react';
import {NavLink} from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="section-inner section-navbar">
            <ul className="nav-wrapper">
                <li className="nav-wrapper__item">
                    <div className="nav-wrapper__item-link">
                        {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                        <NavLink to="/profile" className="section-navbar__active">
                            <span className="nav-wrapper__item-icon">
                                icon
                            </span>
                            Profile
                        </NavLink>
                    </div>
                </li>
                <li className="nav-wrapper__item">
                    <div className="nav-wrapper__item-link">
                        <NavLink to="/dialogs" className="section-navbar__active">
                            <span className="nav-wrapper__item-icon">
                                icon
                            </span>
                            Messages
                        </NavLink>
                    </div>
                </li>
                <li className="nav-wrapper__item">
                    <div className="nav-wrapper__item-link">
                        <a href="#">
                            <span className="nav-wrapper__item-icon">
                                icon
                            </span>
                            News
                        </a>
                    </div>
                </li>
                <li className="nav-wrapper__item">

                    <div className="nav-wrapper__item-link">
                        <a href="#">
                            <span className="nav-wrapper__item-icon">
                                icon
                            </span>
                            Friends
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}