import axios from 'axios'
import React, {Component} from 'react';

import MaterialIcon from "@material/react-material-icon"
import TextField, {Input} from '@material/react-text-field'
import {Snackbar} from "@material/react-snackbar";
import {Button} from "@material/react-button";

import '@material/react-snackbar/dist/snackbar.css';
import '@material/react-button/dist/button.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordWrong: false,
            didSomethingWentWrong: false,
            showPassword: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.hideErrors = this.hideErrors.bind(this)
        this.login = this.login.bind(this)
    }


    handleChange(currentTarget) {
        this.props.parent.setState(prevState => {
            prevState[currentTarget.name] = currentTarget.value
            return prevState
        })
    }

    hideErrors() {
        this.setState(prevState => {
            prevState.isPasswordWrong = false
            prevState.didSomethingWentWrong = false
            return prevState
        })
    }

    login() {
        this.props.parent.startLoading()
        axios.post(this.props.parent.baseURL + "/api/", {
            username: this.props.parent.state.username,
            password: this.props.parent.state.password
        }).then(response => {
            if (response.status === 200) {
                this.props.parent.setState(prevState => {
                    prevState.isLoggedIn = true
                    prevState.isLoading = false
                    return prevState
                })
            }
        }).catch(error => {
            if (error.response.status === 401) {
                this.setState(prevState => {
                    prevState.isPasswordWrong = true
                    return prevState
                })
            } else {
                this.setState(prevState => {
                    prevState.didSomethingWentWrong = true
                    return prevState
                })
            }
            this.props.parent.stopLoading()
        })
    }

    render() {
        return (
            <div className="login-component">
                <MaterialIcon icon="account_circle" />
                <TextField label='Username'><Input name="username" id="username" value={this.props.parent.state.username} onChange={(e) => this.handleChange(e.currentTarget)} /></TextField>
                <TextField label='Password' trailingIcon={<MaterialIcon icon="remove_red_eye" />} onTrailingIconSelect={() => this.setState(prevstate => {
                    prevstate.showPassword = !prevstate.showPassword
                    return prevstate
                })}><Input name="password" type={this.state.showPassword ? "text" : "password"} id="password" value={this.props.parent.state.password} onChange={(e) => this.handleChange(e.currentTarget)} /></TextField>
                <Button raised icon={<MaterialIcon icon="lock_open" />} onClick={this.login}>Login</Button>
                {this.state.isPasswordWrong ? <Snackbar message="The password you entered is incorrect." onClose={this.hideErrors} /> : ""}
                {this.state.didSomethingWentWrong ? <Snackbar message="Sorry, something went wrong." onClose={this.hideErrors} /> : ""}
            </div>
        );
    }
}

export default Login;