import React from 'react';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {DialogsActionTypes, newMessageTextAC, sendNewMessageTextAC} from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';

type DialogsPropsType = {
    state: AppStateType
    dispatch: (action: DialogsActionTypes) => void
}

export function Dialogs(props: DialogsPropsType) {
    debugger

    let dialogsElements = props.state.dialogsReducer.dialogs.map( d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.state.dialogsReducer.messages.map( m => <Message message={m.message}/>);

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
        <div className="">
            <div className="">
                {dialogsElements}
            </div>
            <div className="">
                {messagesElements}
            </div>
            <div></div>
            <div>
                <textarea ref={newMessageElement}
                          value={props.state.dialogsReducer.newMessage}
                          onChange={onChangeMessage}
                          placeholder="Enter your message"></textarea>
                <div>
                    <button onClick={sendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}