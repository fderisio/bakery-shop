import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Grid from './components/grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Grid />
      </div>
    );
  }
}

export default App;
