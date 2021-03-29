import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.scss'
import {BsPeopleFill, BsPersonFill,
    BsChatFill, BsGrid1X2Fill} from 'react-icons/bs'

export function Navbar() {
    return (
        <nav className={classes.sectionContentNavbar}>
            <ul className={classes.navWrapper}>
                <li className={classes.item}>
                    {/* Задача NavLink без перезагрузки поменять url в адресной строке браузера (аналог тега </a>) */}
                    <NavLink to="/profile" activeClassName={classes.activeLink}>
                        <div className={classes.itemInner}>
                            <div className={classes.itemIcon}>
                                <BsPersonFill/>
                            </div>
                            <div className="">
                                PROFILE
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                        <div className={classes.itemInner}>
                            <div className={classes.itemIcon}>
                                <BsChatFill/>
                            </div>
                            <div className="">
                                MESSAGES
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <a href="#">
                        <div className={classes.itemInner}>
                            <div className={classes.itemIcon}>
                                <BsPeopleFill/>
                            </div>
                            <div className="">
                                FRIENDS
                            </div>
                        </div>
                    </a>
                </li>
                <li className={classes.item}>
                    <a href="#">
                        <div className={classes.itemInner}>
                            <div className={classes.itemIcon}>
                                <BsGrid1X2Fill/>
                            </div>
                            <div className="">
                                NEWS
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}