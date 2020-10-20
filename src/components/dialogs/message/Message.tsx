import React from 'react';
import s from './Message.module.css';

export type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}