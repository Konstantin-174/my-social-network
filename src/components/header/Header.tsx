import React from 'react';
import local from './Header.module.scss'

const Header = () => {
    return (
        <header className={local.headerWrap}>
            <div className={local.headLogo}> </div>
            <div className={local.headContent}>Welcome to my SocialNetwork</div>
        </header>
    )
}

export default Header;