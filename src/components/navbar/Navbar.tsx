import React from 'react';
import local from './Navbar.module.scss';
import { BsFillGrid1X2Fill, BsFillChatFill,
    BsPeopleFill, BsFillExclamationSquareFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <section className={local.navWrap}>
            <div className={local.navContent}>
                <a href="/profile" className={local.link}>
                    <BsFillGrid1X2Fill className={local.navIcon}/>
                    <div  className={local.navText}>
                        Profile
                    </div>
                </a>
                <a href="/messages" className={local.link}>
                    <BsFillChatFill className={local.navIcon}/>
                    <div className={local.navText}>
                        Messages
                    </div>
                </a>
                <a href="/friends" className={local.link}>
                    <BsPeopleFill className={local.navIcon}/>
                    <div className={local.navText}>
                        Friends
                    </div>
                </a>
                <a href="/news" className={local.link}>
                    <BsFillExclamationSquareFill className={local.navIcon}/>
                    <div className={local.navText}>
                        News
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Navbar;