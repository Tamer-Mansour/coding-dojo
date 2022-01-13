import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Navigation from './Components/Navigation.js';
import Main from './Components/Main.js';
import SubContents from './Components/SubContents.js';
import Advertisement from './Components/Advertisement.js';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;