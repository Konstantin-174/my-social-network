import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';

type dialogsType = {
    id: number
    name: string
}

const dialogs = [
    {id: 1, name: 'Dimon'},
    {id: 2, name: 'Vovan'},
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Antony'}
] as Array<dialogsType>;

type messageType = {
    id: number
    message: string
}

const messages = [
    {id: 1, message: "Hey guys! How are you doing?"},
    {id: 1, message: "Hey bro! We're fine, thanks"},
    {id: 1, message: "Antony! Where is my money!?"}
] as Array<messageType>;

let dialogsElements = dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
let messagesElements = messages.map( m => <Message message={m.message}/>)

export function Dialogs() {
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