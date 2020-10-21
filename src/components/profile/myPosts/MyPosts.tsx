import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {postsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<postsType>
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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