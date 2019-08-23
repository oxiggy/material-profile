import React from 'react'
import { withStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'

import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'

import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'

class Header extends React.PureComponent {

    render() {
        const { classes, onOpenMenu }= this.props
        return (
            <AppBar position="static" color="inherit" elevation={0} className={classes.root}>
                <Box className={classes.fix}/>
                <Toolbar>
                    <IconButton
                        color="primary"
                        edge="start"
                        aria-label="menu"
                        onClick={onOpenMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link variant="h6" color="inherit" href="/">
                            Human Resources
                        </Link>
                        <Typography variant="h6" color="textPrimary">John Doe</Typography>
                    </Breadcrumbs>

                    <div style={{ flexGrow:1 }}/>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Badge className={classes.badgeMargin} badgeContent={10} color="secondary">
                        <NotificationsIcon />
                    </Badge>

                </Toolbar>
            </AppBar>
        )
    }

}

const styles= (theme) => ({
    root: {
        position: 'relative',
    },
    fix: {
        position: 'absolute',
        top: 0,
        left: -64,
        width: 64,
        height: 64,
        backgroundColor: theme.palette.background.paper,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.background.default, 0.75),
        '&:hover': {
            backgroundColor: fade(theme.palette.background.default, 1),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    badgeMargin: {
        margin: theme.spacing(2),
    },
});

export default withStyles(styles)(
    Header
)

