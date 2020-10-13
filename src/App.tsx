import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';

function App() {
  return (
    <div className="app_wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
        <Footer/>
    </div>
  );
}

export default App;
