import React from 'react';
import './App.css';
import Tabs from "./Components/Tabs";


function App() {
  return (
    <div className="App">
      <h1>Your Tabs</h1>
      <Tabs>
        <div label="Home">
          Welcome to home page!
        </div>
        <div label="About">
        Welcome to about page!
        </div>
        <div label="Ask us">
        Welcome to ask us page!
        </div>
        <div label="Contact">
        Welcome to contact page!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
