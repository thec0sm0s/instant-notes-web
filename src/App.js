import React, { Component } from 'react'

import './App.css'

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";



export default class App extends Component {

    baseURL = "http://127.0.0.1:5000"

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false,
        }
    }

    getNote() {

    }

  render() {
    return (
      <div>
        <Header />
          {this.state.isLoggedIn ? <Main /> : <Login parent={this} />}
      </div>
    )
  }
}
