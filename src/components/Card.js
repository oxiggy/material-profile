import React from 'react'
import { withStyles } from '@material-ui/styles'
import CardBase from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


class Card extends React.PureComponent {

    render() {
        const { classes, logo, content }= this.props
        return (
            <CardBase className={classes.root}>
                {!!logo && logo}

                <CardContent
                    className={classes.content}
                >
                    {!!content && content}
                </CardContent>
            </CardBase>
        )
    }

}

const styles= (theme) => ({
    root: {
        overflow: 'visible !important',
        marginBottom: theme.spacing(2),

    },
    content: {

    },
});

export default withStyles(styles)(
    Card
)
