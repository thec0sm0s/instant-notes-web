import React, { Component } from 'react'

import './App.css'

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Shared from "./components/Shared";



export default class App extends Component {

    baseURL = "https://instant-notes.herokuapp.com"

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false,
            isLoading: false,
        }
    }

    startLoading() {
        this.setState(prevState => {
            prevState.isLoading = true
            return prevState
        })
    }

    stopLoading() {
        this.setState(prevState => {
            prevState.isLoading = false
            return prevState
        })
    }

  render() {
    return (
      <div>
        <Header parent={this} />
          {window.sharedPayload ? <Shared/> :
              this.state.isLoggedIn ? <Main parent={this}/> : <Login parent={this}/>
          }
      </div>
    )
  }
}
