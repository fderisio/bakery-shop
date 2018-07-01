import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Grid from './components/grid';
import ShoppingCartTable from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <div style={ {float:'left', width:'35%'} }>
            <Grid />
          </div>
          <div style={ {float:'right', width:'65%', marginRight: 20} }>
            <ShoppingCartTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
