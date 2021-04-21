import React from 'react';
import local from './Avatar.module.scss';
import img from './img/IRh4RWeX.jpg';

const Avatar = () => {
    return (
        <section className={local.avaWrap}>
            <div className={local.avaImg}>
                <img className={local.ava} src={img} alt="Avatar"/>
            </div>
            <div className={local.avaSettings}>
                <button className={local.avaBtn}>
                    Edit
                </button>
            </div>
        </section>
    )
}

export default Avatar;