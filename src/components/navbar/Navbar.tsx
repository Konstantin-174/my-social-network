import React from 'react';
import {NavLink} from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="section-inner section-content__navbar">
            <ul className="nav-wrapper">
                <li className="nav-wrapper__item">
                    {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                    <NavLink to="/profile" activeClassName="active-link">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                icon
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                Profile
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li className="nav-wrapper__item">
                    <NavLink to="/dialogs" activeClassName="active-link">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                icon
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                Messages
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li className="nav-wrapper__item">
                    <a href="#">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                icon
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                Friends
                            </div>
                        </div>
                    </a>
                </li>
                <li className="nav-wrapper__item">
                    <a href="#">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                icon
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                News
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}