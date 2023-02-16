import React from 'react';
import logo from './logo.svg';
import Room from './Room';
import { testlog } from './repository/chatRepository';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <header className="App-header">
          <Link to='/room/1'>Room1</Link> <Link to='/room/2'>Room2</Link><Link to='/room/3'>Room3</Link>
            <Route exact path="/" >
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    KCat
                  </p>
                
            </Route>
            <Route path="/room/:roomId">
              <Room messages={testlog.messages}/>
            </Route>
            </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
