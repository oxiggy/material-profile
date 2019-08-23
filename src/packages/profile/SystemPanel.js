import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Panel from '../../components/Panel'

class SystemPanel extends React.PureComponent {

    render () {
        const { classes }= this.props
        return (
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
        )
    }

}

const styles= (theme) => ({
    root: {

    },
    chip: {
        background: theme.palette.background.default,
        marginRight: theme.spacing(1),
    },
})

export default withStyles(styles)(
    SystemPanel
)
