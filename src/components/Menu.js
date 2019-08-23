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
            <List className={classes.list} component="nav" aria-label="main menu">
                <ListItem button>
                    <ListItemIcon>
                        <ScheduleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Human Resources" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MoveToInboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hire Clinicians" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
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
    list: {
        flexGrow: 1,
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
