import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';

export function MyPosts() {
    return (
        <div className={s.posts}>
            MY POSTS
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post/>
            <Post/>
        </div>
    )
}