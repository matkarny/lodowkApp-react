import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";
import './App.css';
import Drawing from './components/drawing-component/drawing-component';
import Component1 from './components/component1/component1';
import Main from './leyouts/dashboadr/dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Component1/>
        <Main/>
      </div>
    );
  }
}

export default App;
