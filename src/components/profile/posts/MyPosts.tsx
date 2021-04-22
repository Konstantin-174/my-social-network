import React from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <section className={local.postsWrap}>
            <div className={local.inputPost}>
                <div className={local.inputArea}>
                    <input type="text"/>
                </div>
                <BsBoxArrowInDown className={local.inputBtn} size="2em"/>
            </div>
            <Post/>
        </section>
    )
}

export default MyPosts;