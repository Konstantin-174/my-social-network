import React from 'react';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import classes from './Dialogs.module.scss'
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
        <div className={classes.dialogsWrapper}>
            <div className={classes.content}>
                <div className={classes.contentDialog}>
                    {dialogsElements}
                </div>
                <div className={classes.contentMessages}>
                    {messagesElements}
                </div>
            </div>
            <div className={classes.input}>
                <div className={classes.inputArea}>
                    <textarea ref={newMessageElement}
                              value={props.state.dialogsReducer.newMessage}
                              onChange={onChangeMessage}
                              placeholder="Enter your message"
                    />
                </div>
                <div className={classes.inputBtn}>
                    <FiArrowUpLeft onClick={sendMessage} size="2em" color=""/>
                </div>
            </div>
        </div>
    )
}