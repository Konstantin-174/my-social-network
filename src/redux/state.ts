export type dialogsType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    message: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
}

export let state = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Vovan'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Antony'}
    ] as Array<dialogsType>,
    messages: [
        {id: 1, message: "Hey guys! How are you doing?"},
        {id: 1, message: "Hey bro! We're fine, thanks"},
        {id: 1, message: "Antony! Where is my money!?"}
    ] as Array<messageType>,
    posts: [
        {id: 1, message: "Hey bro! What's up?", likesCount: 12},
        {id: 2, message: "Keep calm and do hard working!!!", likesCount: 25},
    ] as Array<postsType>
}