import React from 'react';

export type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className="dialogs-wrapper__content-messages_request">
            {props.message}
        </div>
    )
}