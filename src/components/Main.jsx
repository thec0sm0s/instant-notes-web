import axios from 'axios'
import React, {Component} from 'react'

import MaterialIcon from "@material/react-material-icon"


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            note: ""
        }
        this.textArea = React.createRef()
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.textArea.current.focus()
        axios.post(this.props.parent.baseURL + "/api/", {
            username: this.props.parent.state.username,
            password: this.props.parent.state.password
        }).then(response => {
            if (response.status === 200) {
                this.setState({note: response.data.note})
            }
        }).catch(error => {
            console.log(error)
        })
    }

    saveNote() {
        axios.post(this.props.parent.baseURL + "/api/", {
            username: this.props.parent.state.username,
            password: this.props.parent.state.password,
            note: this.state.note
        }).then(response => {
            if (response.status === 200) {
                // Sync.
            }
        }).catch(error => {
            console.log(error)
        })
    }

    handleChange(currentTarget) {
        this.setState({note: currentTarget.value})
        this.saveNote()
    }

    render() {
        return (
            <div className="container">
                <label>
                    <div className="content">
                        <MaterialIcon icon="arrow_forward_ios" />
                        <textarea ref={this.textArea} className="content-input" value={this.state.note} onChange={e => this.handleChange(e.currentTarget)} />
                    </div>
                </label>
            </div>
        );
    }
}

export default Main;