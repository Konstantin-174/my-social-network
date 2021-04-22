import React from 'react';
import local from './Post.module.scss';
import img from './img/ghML0mY_.jpg';
import { AiFillLike } from "react-icons/ai";

const Post = () => {
    return (
        <section className={local.postWrap}>
            <div className={local.postAutor}>
                Philip J. Fry
            </div>
            <div className={local.postContent}>
                <div className={local.ava}>
                    <img src={img} alt="Avatar"/>
                </div>
                <div className={local.postText}>
                    &#8220;Phew! What a terrible dream I had! I will never sleep again!&#8221;
                </div>
            </div>
            <div className={local.postLikes}>
                <AiFillLike className={local.likeIcon}/>
                <div className={local.likesCount}>12</div>
            </div>
        </section>
    )
}

export default Post;