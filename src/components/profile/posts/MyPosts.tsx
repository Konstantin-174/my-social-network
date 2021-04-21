import React from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';

const MyPosts = () => {
    return (
        <section className={local.postsWrap}>
            <div className={local.inputPost}>
                <input className={local.inputArea} type="text"/>
                <BsBoxArrowInDown className={local.inputBtn} size="2em"/>
            </div>
        </section>
    )
}

export default MyPosts;