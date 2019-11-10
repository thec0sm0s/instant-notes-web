import React, { Component } from 'react'
import TopAppBar, {
    TopAppBarSection,
    TopAppBarRow,
    TopAppBarIcon,
    TopAppBarTitle,
} from "@material/react-top-app-bar";
import MaterialIcon from '@material/react-material-icon'

import '@material/react-top-app-bar/dist/top-app-bar.css'


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
                    </TopAppBarRow>
                </TopAppBar>
            </div>
        )
    }
}
