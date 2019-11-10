import React, {Component} from 'react'
import MaterialIcon from "@material/react-material-icon"


class Main extends Component {

    constructor() {
        super()
        this.state = {
            note: "My note"
        }
    }

    componentDidMount() {
        // Get note.
    }

    render() {
        return (
            <div className="container">
                <label>
                    <div className="content">
                        <MaterialIcon icon="arrow_forward_ios" />
                        <textarea className="content-input" />
                    </div>
                </label>
            </div>
        );
    }
}

export default Main;