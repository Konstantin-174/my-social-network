import React from 'react';
import {AiFillLike} from 'react-icons/ai'

type PostPropsType = {
    message: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className="profile-wrapper__posts-inner_post">
            <div className="post-wrapper">
                <div className="post-wrapper__image">
                    <img src="https://livacha.com/upload/user/cover/cd/2f/user_anzMN_9U0W2yF4SB8ZuNhYtReJpi449xSE3xsZoOhmHJg8.gif" alt="Avatar"/>
                </div>
                <div className="post-wrapper__message">
                    {props.message}
                </div>
            </div>
            <div className="like-wrapper">
                <div className="like-wrapper__likes">
                    <AiFillLike size="1.2em"/>
                </div>
                <div className="like-wrapper__count">{props.likesCount}</div>
            </div>
        </div>
    )
}