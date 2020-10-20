import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';

export function Dialogs() {
    return (
        <div className={s.dialogs_item}>
            <div className={s.dialogs}>
                <Dialog name={"Dimon"} id={1}/>
                <Dialog name={"Vovan"} id={2}/>
                <Dialog name={"Andrey"} id={3}/>
                <Dialog name={"Antony"} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hey guys! How are you doing?"}/>
                <Message message={"Hey bro! We're fine, thanks"}/>
                <Message message={"Antony! Where is my money!?"}/>
            </div>
        </div>
    )
}