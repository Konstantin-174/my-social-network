import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Dialogs} from './components/dialogs/Dialogs';

function App() {
  return (
    <div className="app_wrapper">
        <Header/>
        <Navbar/>
        <div className="app_wrapper_content">
            <Dialogs/>
            {/*<Profile/>*/}
        </div>
        <Footer/>
    </div>
  );
}

export default App;
