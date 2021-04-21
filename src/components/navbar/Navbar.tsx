import React from 'react';
import local from './Navbar.module.scss'

const Navbar = () => {
    return (
        <section className={local.navWrap}>
            <div className={local.navContent}>
                <div className={local.navItem}>
                    Profile
                </div>
                <div className={local.navItem}>
                    Messages
                </div>
                <div className={local.navItem}>
                    Friends
                </div>
                <div className={local.navItem}>
                    News
                </div>

            </div>
        </section>
    )
}

export default Navbar;