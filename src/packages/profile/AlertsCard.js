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
                        <ul className={classes.ul}>
                            <li className={classes.li}><span className={classes.event}>алерт и</span> <span className={classes.deadline}>дата</span></li>
                            <li className={classes.li}><span className={classes.event}>алерт и </span> <span className={classes.deadline}>дата</span></li>
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
    ul: {
        lineHeight: "1rem",
    },
    li: {
        color: "red",
        fontSize: 28,
        lineHeight: "inherit",
    },
    event: {
        fontSize: "1rem",
        color: "blue",
        lineHeight: "inherit",

    },
    deadline: {
        fontSize: "1rem",
        color: "yellow",
        lineHeight: "inherit",
    },
})

export default withStyles(styles)(
    AlertsCard
)
