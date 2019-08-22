import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Panel from '../../components/Panel'




class SummaryPanel extends React.Component{
    render () {
        const { classes }= this.props
        return (
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

        )

    }
}


const styles= (theme) => ({
    root: {

    },

    panel_first: {
        marginTop: '0 !important',
    },
});

export default withStyles(styles)(
    SummaryPanel
)