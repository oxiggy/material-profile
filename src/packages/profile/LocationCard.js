import React from 'react'
import { withStyles } from '@material-ui/styles'

import Card from '../../components/Card'
import Typography from '@material-ui/core/Typography'
import mapImage from '../../images/map.jpg'
import Box from '@material-ui/core/Box'

class LocationCard extends React.PureComponent {

    render () {
        const { classes }= this.props
        return (
            <Card
                content={(
                    <Box>
                        <Typography color="textSecondary" gutterBottom>
                             Current location:
                        </Typography>
                        <Box className={classes.mapContainer}>
                            <img className={classes.mapImage} src={mapImage}/>
                        </Box>
                    </Box>
                )}
            />
        )
    }

}

const styles= (theme) => ({
    root: {

    },
    mapContainer: {

    },
    mapImage: {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
    },
})

export default withStyles(styles)(
    LocationCard
)
