import * as serviceWorker from './serviceWorker';
import {state, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {addPost, updateNewPostText, RootStateType} from './redux/state';


export const rerenderApp = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App messages={state.dialogsPage.messages}
                 dialogs={state.dialogsPage.dialogs}
                 posts={state.profilePage.posts}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 newText={state.profilePage.newText}
            />
        </React.StrictMode>, document.getElementById('root')
    );
}
rerenderApp(state)

subscribe(rerenderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
