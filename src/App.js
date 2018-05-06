import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import Layout from 'Layout.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout/>
      </div>
    );
  }
}

export default App;
