import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllNotification from './components/AllNotification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllNotification />
      </div>
    );
  }
}

export default App;
