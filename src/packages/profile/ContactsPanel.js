import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Panel from '../../components/Panel'
import Grid from '@material-ui/core/Grid'


import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'



class ContactsPanel extends React.Component{
    render () {
        const { classes }= this.props
        return (
            <Panel
                summary={(
                    <Typography variant="h5">Contacts</Typography>
                )}
                details={(
                    <Grid container spacing={3} direction="row" alignItems="flex-start" justify="space-between">
                        <Grid item xs={12} sm={12} md={6} lg={4} container>
                            <Grid item xs={1} md={2}>
                                <PhoneOutlinedIcon color="primary"/>
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
                                <EmailOutlinedIcon color="primary"/>
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
                                <LocationOnOutlinedIcon color="primary"/>
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

        )

    }
}


const styles= (theme) => ({
    root: {

    },

    panelDetailsInputName: {
        color: theme.palette.text.secondary,
    },
});

export default withStyles(styles)(
    ContactsPanel
)