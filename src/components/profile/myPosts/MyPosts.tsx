import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';

type postsType = {
    id: number
    message: string
    likesCount: number
}

const posts = [
    {id: 1, message: "Hey bro! What's up?", likesCount: 12},
    {id: 2, message: "Keep calm and do hard working!!!", likesCount: 25},
] as Array<postsType>;

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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
            {postsElements}
        </div>
    )
}