import React, {Component} from 'react';
import MaterialIcon from "@material/react-material-icon";


class Shared extends Component {

    constructor(props) {
        super(props)
        this.textArea = React.createRef()
    }

    componentDidMount() {
        this.textArea.current.focus()
    }

    render() {
        return (
            <div className="container">
                <label>
                    <div className="content">
                        <MaterialIcon icon="arrow_forward_ios" /><span style={{
                        fontFamily: "Roboto", position: "absolute"
                    }}><h2 style={{display: "inline", paddingLeft: "5px"}}>{window.sharedPayload ? window.sharedPayload.username : ""}</h2></span>
                        <textarea ref={this.textArea} className="content-input" value={window.sharedPayload ? window.sharedPayload.note : ""} onChange={() => {}} style={{
                            backgroundColor: "white"
                        }} />
                    </div>
                </label>
            </div>
        );
    }
}

export default Shared;