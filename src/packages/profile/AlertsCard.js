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
                            <Typography variant="body1" variantMapping={{ body1:'li' }}>
                                <span className={classes.bullet}>●</span> <span className={classes.event}>алерт и</span> <span className={classes.deadline}>дата</span>
                            </Typography>
                            <Typography variant="body1" variantMapping={{ body1:'li' }}>
                                <span className={classes.bullet}>●</span> <span className={classes.event}>алерт и </span> <span className={classes.deadline}>дата</span>
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
        padding: 0,
    },
    bullet: {
        color: 'red',
    },
    event: {
    },
    deadline: {
        color: "red",
    },
})

export default withStyles(styles)(
    AlertsCard
)
