import React from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from '@material-ui/core/Card'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ImageIcon from '@material-ui/icons/Image';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'


class ProfilePage extends React.Component {

    render() {
        const { classes }= this.props
        return (
            <Box flexGrow={1} display="flex" flexDirection="row" className={classes.root}>
                <Box width={240} minWidth={240}>
                    <Menu/>
                </Box>
                <Box flexGrow={1} bgcolor="background.default">

                    <Header/>

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
                                        <Typography className={classes.panelDetailsContent}>
                                            Adept madical doctor with eight solid years of practice experience. Dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. Willingness to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                    <Divider/>
                                    <ExpansionPanelActions>
                                        <Button className={classes.textButton} color="primary" size="small">
                                            Edit
                                        </Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography variant="h5">Contacts</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Grid container spacing={3} direction="row"
                                              alignItems="flex-start" justify="space-between" className={classes.panelDetailsContent}>
                                            <Grid item xs={12} sm={12} md={6} lg={4} container>
                                                <Grid item xs={1} md={2}>
                                                    <DeleteOutlinedIcon color="primary"/>
                                                </Grid>
                                                <Grid item xs={11} md={10}>
                                                    <Box pb={3}>
                                                        <Typography variant="body1" color="textPrimary">(650) 555-1234</Typography>
                                                        <Typography variant="body2" className={classes.panelDetailsInputName} >Home Phone</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="subtitle2">(323) 555-6789</Typography>
                                                        <Typography variant="body2" className={classes.panelDetailsInputName}>Business phone</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={4} container>
                                                <Grid item xs={1} md={2}>
                                                    <DeleteOutlinedIcon color="primary"/>
                                                </Grid>
                                                <Grid item xs={11} md={10}>
                                                    <Box>
                                                        <Typography variant="subtitle2">aliconnors@example.com</Typography>
                                                        <Typography variant="body2" className={classes.panelDetailsInputName}>E-mail</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={4} container>
                                                <Grid item xs={1} md={2}>
                                                    <DeleteOutlinedIcon color="primary"/>
                                                </Grid>
                                                <Grid item xs={11} md={10}>
                                                    <Box>
                                                        <Typography variant="subtitle2">200 SW 1st Ave San Francisco, CA 94112</Typography>
                                                        <Typography variant="body2" className={classes.panelDetailsInputName}>Address</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ExpansionPanelDetails>
                                    <Divider/>
                                    <ExpansionPanelActions>
                                        <Button className={classes.textButton} color="primary" size="small">
                                            Edit
                                        </Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography variant="h5">Langauges</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Box display="flex" justifyContent="flex-start" className={classes.panelDetailsContent}>
                                            <Chip label="English" className={classes.chip} />
                                            <Chip label="Spanish" className={classes.chip} />
                                        </Box>
                                    </ExpansionPanelDetails>
                                    <Divider/>
                                    <ExpansionPanelActions>
                                        <Button className={classes.textButton} color="primary" size="small">
                                            Edit
                                        </Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography variant="h5">System</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Box display="flex" justifyContent="flex-start" className={classes.panelDetailsContent}>
                                            <Chip label="Epic" className={classes.chip} />
                                            <Chip label="Devero" className={classes.chip} />
                                        </Box>
                                    </ExpansionPanelDetails>
                                    <Divider/>
                                    <ExpansionPanelActions>
                                        <Button className={classes.textButton} color="primary" size="small">
                                            Edit
                                        </Button>
                                    </ExpansionPanelActions>
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
    panelDetailsContent: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    chip: {
        background: theme.palette.background.default,
        marginRight: theme.spacing(1),
    },
    panelDetailsInputName: {
        color: theme.palette.text.secondary,
    },
    panelDetailsActions: {

    },

    textButton: {

    },


});

export default withStyles(styles)(
    ProfilePage
)