import React, { Component } from 'react'

import './App.css'

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Shared from "./components/Shared";
import axios from "axios";



export default class App extends Component {

    baseURL = "https://instant-notes.herokuapp.com"

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false,
            isLoading: false,
            hasPageLoaded: false,
        }
        this.doSessionLogout = this.doSessionLogout.bind(this)
    }

    componentDidMount() {
        this.trySessionLogin()
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

    trySessionLogin() {
        this.startLoading()
        axios.get(this.baseURL + "/api/").then(response => {
            if (response.status === 200) {
                this.setState(prevState => {
                    prevState.username = response.data.username
                    prevState.password = response.data.password
                    prevState.isLoggedIn = true
                    prevState.isLoading = false
                    return prevState
                })
            }
        }).catch(error => {
            // Normal login flow.
            this.stopLoading()
        })
        this.setState(prevState =>{
            prevState.hasPageLoaded = true
            return prevState
        }) //TODO: it will run insta since async.
    }

    doSessionLogout() {
        this.startLoading()
        axios.delete(this.baseURL + "/api/revoke/").then(response => {
            if (response.status === 200) {
                this.setState(prevState => {
                    prevState.username = ""
                    prevState.password = ""
                    prevState.isLoggedIn = false
                    prevState.isLoading = false
                    return prevState
                })
            }
        }).catch(error => {
            this.stopLoading()
        })
    }

  render() {
    return (
      <div>
        <Header parent={this} />
          {window.sharedPayload ? <Shared/> :
              this.state.hasPageLoaded ?
                this.state.isLoggedIn ? <Main parent={this}/> : <Login parent={this}/> : ""
          }
      </div>
    )
  }
}
