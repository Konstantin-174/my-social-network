import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        alert(newPostElement.current?.value);
    }

    return (
        <div className={s.posts}>
            MY POSTS
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}