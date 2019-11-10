import React, { Component } from 'react'

import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        {/*<Main />*/}
      </div>
    )
  }
}
