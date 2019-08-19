import React from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'

import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Menu from '../../components/Menu'

class ProfilePage extends React.Component {

    render() {
        const { classes }= this.props
        return (
            <Box flexGrow={1} display="flex" flexDirection="row" className={classes.root}>
                <Box width={240} minWidth={240}>
                    <Menu/>
                </Box>
                <Box flexGrow={1} bgcolor="background.default">

                    <AppBar position="static" color="inherit" elevation={0}>
                        <Toolbar>
                            <IconButton
                                color="primary"
                                edge="start"
                                aria-label="menu"
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

                        </Toolbar>
                    </AppBar>

                    <Box p={{ xs:2, sm:3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Card>
                                    John Doe
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <Tabs
                                    value={0}
                                    //onChange={handleChange}
                                    indicatorColor="primary" textColor="primary" centered
                                >
                                    <Tab label="Profile" />
                                    <Tab label="Credentials" />
                                </Tabs>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography variant="h5">Summary</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography className={classes.panelDetailsText}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                        <Divider/>
                                        <Box display="flex" justifyContent="flex-end" p={3} pt={1} pb={1}>
                                            <Button color="primary" className={classes.textButton}>
                                                Edit
                                            </Button>
                                        </Box>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        )
    }

}

const styles= (theme) => ({
    root: {

    },
    panelDetails: {
        flexDirection: 'column',
        padding: 0,
    },
    panelDetailsText: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    panelDetailsActions: {

    },
    textButton: {

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
});

export default withStyles(styles)(
    ProfilePage
)