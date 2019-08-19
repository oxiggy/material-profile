import React from 'react'
import ReactDOM from 'react-dom'
import './index.styl'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'

const theme= createMuiTheme({
    palette: {
        primary: {
            ...cyan,
            main: '#5fc7e3',
        },
        background: {
            default: '#ecf2f3',
        },
    },
    overrides: {
        MuiTypography: {
            h6: {
                fontWeight: 400,
            },
            colorTextPrimary: {
                fontWeight: 500,
            }
        },
    }
});

console.warn(theme)

import ThemeProvider from '@material-ui/styles/ThemeProvider'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router basename="/">
            <Switch>
                <Route path="/" exact component={ProfilePage} />
            </Switch>
        </Router>
    </ThemeProvider>,
    document.getElementById('app')
)
