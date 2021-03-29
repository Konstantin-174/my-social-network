import React from 'react';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {DialogsActionTypes, newMessageTextAC, sendNewMessageTextAC} from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import {FiArrowUpLeft} from 'react-icons/fi';

type DialogsPropsType = {
    state: AppStateType
    dispatch: (action: DialogsActionTypes) => void
}

export function Dialogs(props: DialogsPropsType) {
    debugger

    let dialogsElements = props.state.dialogsReducer.dialogs.map( d => <Dialog key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.state.dialogsReducer.messages.map( m => <Message key={m.id} message={m.message}/>);

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
        <div className="dialogs-wrapper">
            <div className="dialogs-wrapper__content">
                <div className="dialogs-wrapper__content-dialog">
                    {dialogsElements}
                </div>
                <div className="dialogs-wrapper__content-messages">
                    {messagesElements}
                </div>
            </div>
            <div className="dialogs-wrapper__input">
                <div className="dialogs-wrapper__input-area">
                    <textarea ref={newMessageElement}
                              value={props.state.dialogsReducer.newMessage}
                              onChange={onChangeMessage}
                              placeholder="Enter your message"
                    />
                </div>
                <div className="dialogs-wrapper__input-btn">
                    <FiArrowUpLeft onClick={sendMessage} size="2em" color=""/>
                </div>
            </div>
        </div>
    )
}