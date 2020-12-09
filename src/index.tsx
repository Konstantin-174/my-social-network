import * as serviceWorker from './serviceWorker';
import {store} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {RootStateType} from './redux/state';

export const rerenderApp = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>, document.getElementById('root')
    );
}
rerenderApp(store.getState())

store.subscribe(rerenderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
