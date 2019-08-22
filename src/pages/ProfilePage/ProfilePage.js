import React from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from '@material-ui/core/Card'

import Chip from '@material-ui/core/Chip'


import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Panel from '../../components/Panel'

import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

import CardContent from '@material-ui/core/CardContent'

import postImage from '../../images/post.jpg'
import SystemPanel from '../../packages/profile/SystemPanel'
import LanguagesPanel from '../../packages/profile/LanguagesPanel'
import ContactsPanel from '../../packages/profile/ContactsPanel'
import SummaryPanel from '../../packages/profile/SummaryPanel'
import BioCard from '../../packages/profile/BioCard'
import AlertsCard from '../../packages/profile/AlertsCard'
import LocationCard from '../../packages/profile/LocationCard'



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

                                    <BioCard/>
                                    <AlertsCard/>
                                    <LocationCard/>

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
                                <SummaryPanel/>
                                <ContactsPanel/>
                                <LanguagesPanel/>
                                <SystemPanel/>
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


    chip: {
        background: theme.palette.background.default,
        marginRight: theme.spacing(1),
    },
    tabs: {
        marginBottom: theme.spacing(3),
    },




});

export default withStyles(styles)(
    ProfilePage
)