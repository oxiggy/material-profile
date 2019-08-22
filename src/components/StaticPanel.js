import React from 'react'
import { withStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


class Panel extends React.PureComponent {

    render() {
        const { classes, logo, content }= this.props
        return (
            <Card className={classes.root}>
                {!!logo && logo}

                <CardContent
                    className={classes.content}
                >
                    {!!content && content}
                </CardContent>
            </Card>


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
    Panel
)
