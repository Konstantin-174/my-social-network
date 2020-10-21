import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {dialogsType, messageType} from '../../redux/state';

type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs_item}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}