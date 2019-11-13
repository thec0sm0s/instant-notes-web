import React, { Component } from 'react'
import TopAppBar, {
    TopAppBarSection,
    TopAppBarRow,
    TopAppBarIcon,
    TopAppBarTitle,
} from "@material/react-top-app-bar";
import MaterialIcon from '@material/react-material-icon'
import LinearProgress from "@material/react-linear-progress";
import {Button} from "@material/react-button";

import '@material/react-button/dist/button.css';
import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-linear-progress/dist/linear-progress.css';


export default class Header extends Component {
    render() {
        return (
            <div>
                <TopAppBar fixed={true}>
                    <TopAppBarRow>
                        <TopAppBarSection>
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <MaterialIcon hasRipple icon='notes' />
                            </TopAppBarIcon>
                            <TopAppBarTitle>Instant Notes</TopAppBarTitle>
                        </TopAppBarSection>
                        {this.props.parent.state.isLoggedIn ?
                            <TopAppBarSection>
                                <div className="header-username">
                                    <Button onClick={this.props.parent.doSessionLogout} style={{
                                        color: "white",
                                        textTransform: "none",
                                    }} icon={<MaterialIcon icon="exit_to_app" />}>
                                        {this.props.parent.state.username}
                                    </Button>
                                </div>
                            </TopAppBarSection> : ""}
                    </TopAppBarRow>
                    <LinearProgress indeterminate closed={!this.props.parent.state.isLoading} />
                </TopAppBar>
            </div>
        )
    }
}
