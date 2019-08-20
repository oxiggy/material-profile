import React from 'react'
import { withStyles } from '@material-ui/styles'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Divider from '@material-ui/core/Divider'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class Panel extends React.PureComponent {

    render() {
        const { classes, summary, details, actions }= this.props
        return (
            <ExpansionPanel className={classes.root} square={false} defaultExpanded>

                <ExpansionPanelSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon />}
                >
                    {!!summary && summary}
                </ExpansionPanelSummary>

                <ExpansionPanelDetails
                    className={classes.details}
                >
                    {!!details && details}
                </ExpansionPanelDetails>

                {!!actions && (
                    <React.Fragment>
                        <Divider/>
                        <ExpansionPanelActions
                            className={classes.actions}
                        >
                            {actions}
                        </ExpansionPanelActions>
                    </React.Fragment>
                )}

            </ExpansionPanel>
        )
    }

}

const styles= (theme) => ({
    root: {
        margin: '16px 0',
        borderRadius: theme.shape.borderRadius,
        '&::before': {
            backgroundColor: 'transparent',
        }
    },
    summary: {

    },
    details: {
        flexDirection: 'column',
    },
    actions: {

    },
});

export default withStyles(styles)(
    Panel
)
