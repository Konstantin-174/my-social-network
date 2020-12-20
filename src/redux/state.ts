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

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessage: string
}
type ProfilePageType = {
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
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof newMessageTextAC> | ReturnType<typeof sendNewMessageTextAC>//Автоматически создаем тип ActionCreator

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT'

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
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: 3,
                message: this._state.profilePage.newText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newText = ""
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newText = action.newText
            this._callSubscriber()
        } else if (action.type === NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.newMessage
            this._callSubscriber()
        } else if (action.type === SEND_NEW_MESSAGE_TEXT) {
            const newMessage: MessageType = {
                id: 4,
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = ""
            this._callSubscriber()
        }
    }
}

export const addPostAC = (newText: string) => ({
    type: ADD_POST,
    newText: newText
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

export const newMessageTextAC = (newMessage: string) => ({
    type: NEW_MESSAGE_TEXT,
    newMessage: newMessage
}) as const

export const sendNewMessageTextAC = (newMessage: string) => ({
    type: SEND_NEW_MESSAGE_TEXT,
    newMessage: newMessage
}) as const

