import React, {Component} from 'react'
import MaterialIcon from "@material/react-material-icon"


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            note: ""
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <label>
                    <div className="content">
                        <MaterialIcon icon="arrow_forward_ios" />
                        <textarea className="content-input" value={this.state.note} onChange={e => this.setState({note: e.currentTarget.value})} />
                    </div>
                </label>
            </div>
        );
    }
}

export default Main;