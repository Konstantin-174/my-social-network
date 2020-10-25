import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsType, MessageType, PostsType} from './redux/state';

type AppPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    posts: Array<PostsType>
    addPost: (postText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile" render={() => <Profile addPost={props.addPost}
                                                                  posts={props.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs}
                                                                  messages={props.messages}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
