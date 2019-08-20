import React from 'react'
import { withStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ScheduleIcon from '@material-ui/icons/Schedule'
import DraftsIcon from '@material-ui/icons/Drafts'
import Button from '@material-ui/core/Button'

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
                <List className={classes.list} component="nav" aria-label="main mailbox folders">
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
                <Button className={classes.button} variant="contained" color="secondary">
                    Help
                </Button>
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
