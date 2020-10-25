import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    /*Ниже добавляем новый элемент в массив постов (новый пост на стене) */
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ""; //Очищение поля <textarea> после ввода данных
        }
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