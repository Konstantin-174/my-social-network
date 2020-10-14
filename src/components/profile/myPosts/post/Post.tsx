import React from 'react';
import s from './Post.module.css'

export function Post() {
    return (
        <div className={s.post}>
            <img src="https://livacha.com/upload/user/cover/cd/2f/user_anzMN_9U0W2yF4SB8ZuNhYtReJpi449xSE3xsZoOhmHJg8.gif" alt="Avatar"/>
            Post_1
            <div>
                <span>likes</span>
            </div>
        </div>
    )
}