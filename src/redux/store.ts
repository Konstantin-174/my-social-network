import dialogsReducer, { DialogsActionTypes } from "./dialogsReducer"
import profileReducer, { ProfileActionsType } from "./profileReducer"
import {v1} from 'uuid';

export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessage: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newText: string
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

export let store: StoreType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hey bro! What's up?", likesCount: 12},
                {id: v1(), message: "Keep calm and do hard working!!!", likesCount: 25},
            ] as Array<PostsType>,
            newText: "" as string
        }
    },
    _callSubscriber() {
        console.log("State changed!")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}