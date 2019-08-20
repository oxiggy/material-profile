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

import ImageIcon from '@material-ui/icons/Image';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Panel from '../../components/Panel'

import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

import GoogleMapReact from 'google-map-react'
import CardContent from '@material-ui/core/CardContent'

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
                                <Box mt={9}>

                                    <Card className={classes.card}>
                                        <Avatar className={classes.avatar} color="primary">
                                            <PersonIcon fontSize="inherit"/>
                                        </Avatar>
                                        <CardContent>
                                            John Doe
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography color="textSecondary" gutterBottom>
                                                Current location
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8}>

                                <Tabs
                                    classes={{
                                        root: classes.tabs,
                                    }}
                                    value={0}
                                    //onChange={handleChange}
                                    indicatorColor="primary" textColor="primary" centered
                                >
                                    <Tab label="Profile" />
                                    <Tab label="Credentials" />
                                </Tabs>

                                <Panel
                                    classes={{
                                        root:classes.panel_first
                                    }}
                                    summary={(
                                        <Typography variant="h5">Summary</Typography>
                                    )}
                                    details={(
                                        <Typography>
                                            Adept madical doctor with eight solid years of practice experience. Dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. Willingness to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction.
                                        </Typography>
                                    )}
                                    actions={(
                                        <Button color="primary" size="small">
                                            Edit
                                        </Button>
                                    )}
                                />

                                <Panel
                                    summary={(
                                        <Typography variant="h5">Contacts</Typography>
                                    )}
                                    details={(
                                        <Grid container spacing={3} direction="row" alignItems="flex-start" justify="space-between">
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
                                    )}
                                    actions={(
                                        <Button color="primary" size="small">
                                            Edit
                                        </Button>
                                    )}
                                />

                                <Panel
                                    summary={(
                                        <Typography variant="h5">Languages</Typography>
                                    )}
                                    details={(
                                        <Box display="flex" justifyContent="flex-start">
                                            <Chip label="English" className={classes.chip} />
                                            <Chip label="Spanish" className={classes.chip} />
                                        </Box>
                                    )}
                                    actions={(
                                        <Button color="primary" size="small">
                                            Edit
                                        </Button>
                                    )}
                                />

                                <Panel
                                    summary={(
                                        <Typography variant="h5">System</Typography>
                                    )}
                                    details={(
                                        <Box display="flex" justifyContent="flex-start">
                                            <Chip label="Epic" className={classes.chip} />
                                            <Chip label="Devero" className={classes.chip} />
                                        </Box>
                                    )}
                                    actions={(
                                        <Button color="primary" size="small">
                                            Edit
                                        </Button>
                                    )}
                                />

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
    card: {
        overflow: 'visible !important',
        marginBottom: theme.spacing(2),
    },
    avatar: {
        width: 120,
        height: 120,
        margin: '0 auto',
        position: 'relative',
        top: -60,
        fontSize: '96px',
        backgroundColor: theme.palette.primary['100'],
    },
    chip: {
        background: theme.palette.background.default,
        marginRight: theme.spacing(1),
    },
    tabs: {
        marginBottom: theme.spacing(3),
    },
    panel_first: {
        marginTop: '0 !important',
    },
    panelDetailsInputName: {
        color: theme.palette.text.secondary,
    },


});

export default withStyles(styles)(
    ProfilePage
)