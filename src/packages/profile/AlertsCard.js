import React from 'react'
import { withStyles } from '@material-ui/styles'

import Card from '../../components/Card'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

class AlertsCard extends React.PureComponent {
    render () {
        const { classes }= this.props
        return (
            <Card
                content={(
                    <Box>
                        <Typography color="textSecondary" gutterBottom>
                            Alerts:
                        </Typography>
                        <ul className={classes.list}>
                            <Typography className={classes.listItem} variant="body2" variantMapping={{ body2:'li' }}>
                                <span className={classes.bullet}>●</span> <span className={classes.event}>CPR License expiration on</span> <strong className={classes.deadline}>07/19/2019</strong>
                            </Typography>
                            <Typography className={classes.listItem} variant="body2" variantMapping={{ body2:'li' }}>
                                <span className={classes.bullet}>●</span> <span className={classes.event}>Car Insurance expiration on </span> <strong className={classes.deadline}>08/25/2019</strong>
                            </Typography>
                        </ul>
                    </Box>
                )}
            />
        )
    }
}

const styles= (theme) => ({
    root: {

    },
    list: {
        listStyle: 'none',
        margin: 0,
        marginTop: 12,
        marginBottom: -4,
        padding: 0,
    },
    listItem: {
        marginTop: 8,
        '& + &': {
            marginTop: 8,
        }
    },
    bullet: {
        color: theme.palette.secondary.A700,
    },
    event: {
    },
    deadline: {
        color: theme.palette.secondary.A700,
    },
})

export default withStyles(styles)(
    AlertsCard
)
