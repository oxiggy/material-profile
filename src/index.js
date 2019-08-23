import React from 'react'
import ReactDOM from 'react-dom'
import './index.styl'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'
import orange from '@material-ui/core/colors/orange'

const theme= createMuiTheme({
    palette: {
        primary: {
            ...cyan,
            main: '#5fc7e3',
        },
        secondary: orange,
        background: {
            default: '#ecf2f3',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                letterSpacing: '0.5px',
            },
        },
        MuiTypography: {
            h5: {
                fontSize: '15px',
                fontWeight: 500,
            },
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
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router basename="/">
            <Switch>
                <Route path="/" exact component={ProfilePage} />
            </Switch>
        </Router>
    </ThemeProvider>,
    document.getElementById('app')
)
