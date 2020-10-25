import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {DialogsType, MessageType} from '../../redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogs.map( d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map( m => <Message message={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        alert(newMessageElement.current?.value);
    }

    return (
        <div className={s.dialogs_item}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}