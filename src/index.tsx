import * as serviceWorker from './serviceWorker';
import store, {AppStateType} from './redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

export const rerenderApp = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>, document.getElementById('root')
    );
}
rerenderApp(store.getState())
store.subscribe(() => {
        let state = store.getState()
        rerenderApp(state)
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
