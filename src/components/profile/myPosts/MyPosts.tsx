import React from 'react';
import {Post} from './post/Post';
import classes from './MyPosts.module.scss'
import {addPostAC, ProfileActionsType, updateNewPostTextAC} from '../../../redux/profileReducer';
import { PostsType } from '../../../redux/store';
import {FiArrowDown} from 'react-icons/fi'

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
        <section className={classes.profileWrapperPosts}>
            <div className={classes.postsInner}>
                <div className={classes.postsInnerInput}>
                    <textarea onChange={onChangePost}
                              ref={newPostElement}
                              value={props.newText}
                    />
                </div>
                <div className={classes.postsInnerBtn}>
                    <FiArrowDown size="2em" onClick={addPost} color=""/>
                </div>
            </div>
            {postsElements}
        </section>
    )
}