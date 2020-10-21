import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <img src="https://livacha.com/upload/user/cover/cd/2f/user_anzMN_9U0W2yF4SB8ZuNhYtReJpi449xSE3xsZoOhmHJg8.gif" alt="Avatar"/>
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}