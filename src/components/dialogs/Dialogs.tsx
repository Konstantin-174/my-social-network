import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {DialogsActionTypes, newMessageTextAC, sendNewMessageTextAC} from '../../redux/dialogsReducer';
import { RootStateType } from '../../redux/state';

type DialogsPropsType = {
    state: RootStateType
    dispatch: (action: DialogsActionTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogsPage.dialogs.map( d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.state.dialogsPage.messages.map( m => <Message message={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let sendMessage = () => {
        // alert(newMessageElement.current?.value)
        if(newMessageElement.current) {
            props.dispatch(sendNewMessageTextAC(newMessageElement.current?.value))
        }
    }
    let onChangeMessage = () => {
        if(newMessageElement.current) {
            props.dispatch(newMessageTextAC(newMessageElement.current?.value))
        }
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
                <textarea ref={newMessageElement}
                          value={props.state.dialogsPage.newMessage}
                          onChange={onChangeMessage}
                          placeholder="Enter your message"></textarea>
                <div>
                    <button onClick={sendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}