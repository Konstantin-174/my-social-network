import React from 'react';

export type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className="">{props.message}</div>
    )
}