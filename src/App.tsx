import React from 'react';
import './styles/App.scss';
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
            <div className="section-outer">
                <Header/>
                <section className="section-inner section-content">
                    <Navbar/>
                    <section className="section-inner section-profile">
                        <Route path="/profile" render={() => <Profile state={state}
                                                                      dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
                        <Route path="/dialogs" render={() => <Dialogs state={state}
                                                                      dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
                    </section>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
