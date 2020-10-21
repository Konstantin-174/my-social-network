import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import { dialogsType, messageType, postsType } from './redux/state';

type AppPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
    posts: Array<postsType>
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Route path="/profile" render={ () => <Profile posts={props.posts}/>}/>
                <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
