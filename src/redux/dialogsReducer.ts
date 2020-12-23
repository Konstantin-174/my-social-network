import {DialogsPageType, DialogsType, MessageType } from "./store"

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
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Vovan'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Antony'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hey guys! How are you doing?"},
        {id: 2, message: "Hey bro! We're fine, thanks"},
        {id: 3, message: "Antony! Where is my money!?"}
    ] as Array<MessageType>,
    newMessage: "" as string
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes) => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            state.newMessage = action.newMessage
            return state
        case 'SEND-NEW-MESSAGE-TEXT':
            const newMessage: MessageType = {
                id: 4,
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