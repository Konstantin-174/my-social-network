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
}
type ProfilePageType = {
    posts: Array<PostsType>
}

type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimon'},
            {id: 2, name: 'Vovan'},
            {id: 3, name: 'Andrew'},
            {id: 4, name: 'Antony'}
        ] as Array<DialogsType>,
        messages: [
            {id: 1, message: "Hey guys! How are you doing?"},
            {id: 1, message: "Hey bro! We're fine, thanks"},
            {id: 1, message: "Antony! Where is my money!?"}
        ] as Array<MessageType>
    },
    profilePage: {
        posts: [
            {id: 1, message: "Hey bro! What's up?", likesCount: 12},
            {id: 2, message: "Keep calm and do hard working!!!", likesCount: 25},
        ] as Array<PostsType>
    }
}