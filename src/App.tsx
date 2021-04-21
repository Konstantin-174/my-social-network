import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';

function App() {
    return (
        <div className="App-wrapper">
            <Header />
            <Navbar />
            <section className="Content">
                <Profile/>
                <Messages/>
            </section>
        </div>
    );
}

export default App;
