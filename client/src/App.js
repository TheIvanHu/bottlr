import React, { Component } from 'react';
import Feed from './components/Feed'
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';

class App extends Component{
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
        <AppNavbar />
      </div>
      <Feed />
      </Provider>
      
    )
  }
}

export default App;
