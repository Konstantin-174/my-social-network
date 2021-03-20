import React from 'react';
import './App.scss';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

type AppPropsType = {
    store: any
}

function App(props: AppPropsType) {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile" render={() => <Profile state={state}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs state={state}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
