import React, { Component } from 'react'
import TopAppBar, {
    TopAppBarSection,
    TopAppBarRow,
    TopAppBarIcon,
    TopAppBarTitle,
} from "@material/react-top-app-bar";
import MaterialIcon from '@material/react-material-icon'
import LinearProgress from "@material/react-linear-progress";

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
                                <div className="header-username">{this.props.parent.state.username}</div>
                            </TopAppBarSection> : ""}
                    </TopAppBarRow>
                    <LinearProgress indeterminate closed={!this.props.parent.state.isLoading} />
                </TopAppBar>
            </div>
        )
    }
}
