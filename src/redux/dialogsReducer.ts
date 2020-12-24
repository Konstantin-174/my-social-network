import {DialogsPageType, DialogsType, MessageType } from "./store"
import {v1} from 'uuid';

const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT'

export type DialogsActionTypes = ReturnType<typeof newMessageTextAC> | ReturnType<typeof sendNewMessageTextAC>

export const newMessageTextAC = (newMessage: string) => ({
    type: NEW_MESSAGE_TEXT,
    newMessage: newMessage
}) as const
export const sendNewMessageTextAC = (newMessage: string) => ({
    type: SEND_NEW_MESSAGE_TEXT,
    newMessage: newMessage
}) as const

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimon'},
        {id: v1(), name: 'Vovan'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Antony'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: "Hey guys! How are you doing?"},
        {id: v1(), message: "Hey bro! We're fine, thanks"},
        {id: v1(), message: "Antony! Where is my money!?"}
    ] as Array<MessageType>,
    newMessage: "" as string
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes) => {
    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage
            return state
        case SEND_NEW_MESSAGE_TEXT:
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessage
            }
            state.messages.push(newMessage);
            state.newMessage = ""
            return state
        default:
            return state
    }
}

export default dialogsReducer