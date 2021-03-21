import React from 'react';
import {Post} from './post/Post';
import {addPostAC, ProfileActionsType, updateNewPostTextAC} from '../../../redux/profileReducer';
import { PostsType } from '../../../redux/store';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newText: string
    dispatch: (action: ProfileActionsType) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    /*Ниже добавляем новый элемент в массив постов (новый пост на стене) */
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC(newPostElement.current.value))
        }
    }

    let onChangePost = () => {
        if(newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value))
        }
    }

    return (
        <section className="section-inner">
            MY POSTS
            <div>
                <div>
                    <textarea onChange={onChangePost}
                              ref={newPostElement}
                              value={props.newText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            {postsElements}
        </section>
    )
}