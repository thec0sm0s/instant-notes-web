import axios from 'axios'
import React, {Component} from 'react'

import MaterialIcon from "@material/react-material-icon"
import {Snackbar} from "@material/react-snackbar";


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            note: "",
            didSomethingWentWrong: false,
        }
        this.textArea = React.createRef()
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.textArea.current.focus()
        this.props.parent.startLoading()
        axios.post(this.props.parent.baseURL + "/api/", {
            username: this.props.parent.state.username,
            password: this.props.parent.state.password
        }).then(response => {
            if (response.status === 200) {
                this.setState({note: response.data.note})
                this.props.parent.stopLoading()
            }
        }).catch(error => {
            console.log(error)
            this.props.parent.stopLoading()
        })
    }

    saveNote() {
        this.props.parent.startLoading()
        axios.post(this.props.parent.baseURL + "/api/", {
            username: this.props.parent.state.username,
            password: this.props.parent.state.password,
            note: this.state.note
        }).then(response => {
            if (response.status === 200) {
                this.props.parent.stopLoading()
                // Sync.
            }
        }).catch(error => {
            console.log(error)
            this.setState(prevState => {
                prevState.didSomethingWentWrong = true
                return prevState
            })
            this.props.parent.stopLoading()
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
                {this.state.didSomethingWentWrong ? <Snackbar message="Sorry, something went wrong saving your note." onClose={prevState => {
                    prevState.didSomethingWentWrong = false
                    return prevState
                }} /> : ""}
            </div>
        );
    }
}

export default Main;