import dialogsReducer, { DialogsActionTypes } from "./dialogsReducer"
import profileReducer, { ProfileActionsType } from "./profileReducer"

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
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
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hey bro! What's up?", likesCount: 12},
                {id: 2, message: "Keep calm and do hard working!!!", likesCount: 25},
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