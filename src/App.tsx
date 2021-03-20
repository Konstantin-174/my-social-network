import React from 'react';
import './styles/App.scss';
import './styles/normalize.css'
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

type AppPropsType = {
    store: any
}

function App(props: AppPropsType) {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <section className="section_inner">
                <Header/>
                <Navbar/>
                <div className="section_inner-content">
                    <Route path="/profile" render={() => <Profile state={state}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs state={state}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default App;
