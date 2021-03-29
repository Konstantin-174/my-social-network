import React from 'react';
import classes from './Post.module.scss'
import {AiFillLike} from 'react-icons/ai'

type PostPropsType = {
    message: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={classes.post}>
            <div className={classes.postWrapper}>
                <div className={classes.postWrapperImage}>
                    <img src="https://livacha.com/upload/user/cover/cd/2f/user_anzMN_9U0W2yF4SB8ZuNhYtReJpi449xSE3xsZoOhmHJg8.gif" alt="Avatar"/>
                </div>
                <div className={classes.postWrapperMessage}>
                    {props.message}
                </div>
            </div>
            <div className={classes.likeWrapper}>
                <div className={classes.likeWrapperLikes}>
                    <AiFillLike size="1.2em"/>
                </div>
                <div className={classes.likeWrapperCount}>{props.likesCount}</div>
            </div>
        </div>
    )
}