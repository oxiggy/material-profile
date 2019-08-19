import React from 'react'
import { withStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ScheduleIcon from '@material-ui/icons/Schedule'
import DraftsIcon from '@material-ui/icons/Drafts'

class Menu extends React.Component {

    render() {
        const { classes }= this.props
        return (
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                    paperAnchorDockedLeft: classes.drawerPaperAnchorDockedLeft,
                }}
                variant="permanent"
                open
            >
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <ScheduleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Human Resources" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }

}

const styles= (theme) => ({
    root: {

    },
    drawerPaper: {
        width: 240,
        backgroundColor: theme.palette.primary.main,
        borderTopRightRadius: 20,
    },
    drawerPaperAnchorDockedLeft: {
        borderRight: 0
    },
});

export default withStyles(styles)(
    Menu
)
