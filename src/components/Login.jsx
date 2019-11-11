import axios from 'axios'
import React, {Component} from 'react';

import MaterialIcon from "@material/react-material-icon"
import TextField, {Input} from '@material/react-text-field'
import IconButton from "@material/react-icon-button";
import '@material/react-icon-button/dist/icon-button.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }


    handleChange(currentTarget) {
        this.props.parent.setState(prevState => {
            prevState[currentTarget.name] = currentTarget.value
            return prevState
        })
    }

    login() {
        axios.post(this.props.parent.baseURL + "/api/", {
            username: this.props.parent.state.username,
            password: this.props.parent.state.password
        }).then(response => {
            if (response.status === 200) {
                this.props.parent.setState(prevState => {
                    prevState.isLoggedIn = true
                    return prevState
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="login-component">
                <MaterialIcon icon="account_circle" />
                <TextField label='Username'><Input name="username" id="username" value={this.props.parent.state.username} onChange={(e) => this.handleChange(e.currentTarget)} /></TextField>
                <TextField label='Password'><Input name="password" type="password" id="password" value={this.props.parent.state.password} onChange={(e) => this.handleChange(e.currentTarget)} /></TextField>
                <IconButton>
                    <MaterialIcon icon="lock_open" onClick={this.login} />
                </IconButton>
            </div>
        );
    }
}

export default Login;