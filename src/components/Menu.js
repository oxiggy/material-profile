import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ScheduleIcon from '@material-ui/icons/Schedule'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import SendIcon from '@material-ui/icons/Send'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import logoImage from '../images/logo.png'

function Menu(props) {

    const { classes, open, onClose }= props
    const isDesktop= useMediaQuery(theme => theme.breakpoints.up('md'))

    return (
        <Drawer
            classes={{
                docked: classes.docked,
                paper: classes.paper,
                paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
            }}
            variant={isDesktop ? 'permanent' : 'temporary'}
            open={isDesktop ? true : open}
            onClose={onClose}
        >
            <img className={classes.logoImage} src={logoImage}/>
            <List className={classes.list} component="nav" aria-label="main menu">
                <ListItem className={classes.listItem} button>
                    <ListItemIcon className={classes.icon}>
                        <ScheduleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Human Resources" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemIcon className={classes.icon}>
                        <MoveToInboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hire Clinicians" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemIcon className={classes.icon}>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemIcon className={classes.icon}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Agency Profile" />
                </ListItem>
            </List>
            <Button className={classes.button} variant="contained" color="secondary">
                Help
            </Button>
        </Drawer>
    )

}

const styles= (theme) => ({
    root: {

    },
    docked: {
        width: 240,
    },
    paper: {
        width: 240,
        backgroundColor: theme.palette.primary.main,
        borderTopRightRadius: 20,
    },
    paperAnchorDockedLeft: {
        borderRight: 0
    },
    logoImage: {
      width: "80%",
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    list: {
        flexGrow: 1,
    },
    listItem: {
        color: '#fff',
    },
    icon: {
        color: 'inherit',
    },
    button: {
        width: '62%',
        margin: '0 auto 64px',
        color: '#fff',
    },
});

export default withStyles(styles)(
    Menu
)
