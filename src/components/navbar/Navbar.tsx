import React from 'react';
import {NavLink} from 'react-router-dom';
import {BsPeopleFill, BsPersonFill,
    BsChatFill, BsGrid1X2Fill} from 'react-icons/bs'

export function Navbar() {
    return (
        <nav className="section-inner section-content__navbar">
            <ul className="nav-wrapper">
                <li className="nav-wrapper__item">
                    {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                    <NavLink to="/profile" activeClassName="active-link">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                <BsPersonFill/>
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                PROFILE
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li className="nav-wrapper__item">
                    <NavLink to="/dialogs" activeClassName="active-link">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                <BsChatFill/>
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                MESSAGES
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li className="nav-wrapper__item">
                    <a href="#">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                <BsPeopleFill/>
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                FRIENDS
                            </div>
                        </div>
                    </a>
                </li>
                <li className="nav-wrapper__item">
                    <a href="#">
                        <div className="nav-wrapper__item-inner">
                            <div className="nav-wrapper__item-inner_icon">
                                <BsGrid1X2Fill/>
                            </div>
                            <div className="nav-wrapper__item-inner_link">
                                NEWS
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}