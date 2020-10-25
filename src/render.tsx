import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {addPost, RootStateType} from './redux/state';


export const rerenderApp = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App messages={state.dialogsPage.messages}
                 dialogs={state.dialogsPage.dialogs}
                 posts={state.profilePage.posts}
                 addPost={addPost}
            />
        </React.StrictMode>, document.getElementById('root')
    );
}