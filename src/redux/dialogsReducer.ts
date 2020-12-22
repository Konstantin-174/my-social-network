import {DialogsPageType, MessageType } from "./state"

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

const dialogsReducer = (state: DialogsPageType, action: DialogsActionTypes) => {
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