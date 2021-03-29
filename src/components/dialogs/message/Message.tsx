import React from 'react';
import classes from './Message.module.scss';

export type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.messageBody}>
            {props.message}
        </div>
    )
}