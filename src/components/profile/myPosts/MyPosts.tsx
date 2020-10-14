import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';

export function MyPosts() {
    return (
        <div className={s.posts}>
            MY POSTS
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
        </div>
    )
}