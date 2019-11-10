import React, {Component} from 'react';
import MaterialIcon from "@material/react-material-icon"
import TextField, {Input} from '@material/react-text-field'
import IconButton from "@material/react-icon-button";
import '@material/react-icon-button/dist/icon-button.css';

class Login extends Component {
    render() {
        return (
            <div className="login-component">
                <MaterialIcon icon="account_circle" />
                <TextField label='Username'><Input /></TextField>
                <TextField label='Password'><Input /></TextField>
                <IconButton>
                    <MaterialIcon icon="lock_open" />
                </IconButton>
            </div>
        );
    }
}

export default Login;