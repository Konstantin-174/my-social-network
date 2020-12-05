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
    newText: string
}

export type RootStateType = {
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
        ] as Array<PostsType>,
        newText: "" as string
    }
}

let fakeApp = (state: RootStateType) => {
    console.log("State changed!")
}

export const addPost = () => {
    const newPost: PostsType = {
        id: 3,
        message: state.profilePage.newText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newText = ""
    fakeApp(state);
}

export const updateNewPostText = (text: string) => {
    state.profilePage.newText = text
    fakeApp(state);
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    fakeApp = observer
}