import {PostsType, ProfilePageType} from './store';
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (newText: string) => ({
    type: ADD_POST,
    newText: newText
}) as const
export const updateNewPostTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

let initialState = {
    posts: [
        {id: v1(), message: "Hey bro! What's up?", likesCount: 12},
        {id: v1(), message: "Keep calm and do hard working!!!", likesCount: 25},
    ] as Array<PostsType>,
    newText: "" as string
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer