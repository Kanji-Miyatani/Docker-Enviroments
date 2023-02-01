import React from 'react';
import logo from './logo.svg';
import Room from './Room';
import { testlog } from './repository/chatRepository';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" >
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                KCat
              </p>
            </header>
        </Route>
        <Route path="/room">
          <Room messages={testlog.messages}/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
