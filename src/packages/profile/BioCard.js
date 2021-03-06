import React from 'react'
import { withStyles } from '@material-ui/styles'
import Card from '../../components/Card'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

import PersonIcon from '@material-ui/icons/Person'
import postImage from '../../images/post.jpg'

class BioCard extends React.PureComponent {
    render () {
        const { classes }= this.props
        return (
            <Card
                logo={(
                    <Avatar className={classes.avatar} color="primary">
                        <PersonIcon fontSize="inherit"/>
                    </Avatar>
                )}
                content={(
                    <Box className={classes.content}>
                        <Typography className={classes.name} variant="h6">James Connors</Typography>
                        <Box className={classes.tagsContainer} display="flex" flexWrap="wrap">
                            <img className={classes.profession} src={postImage}/>
                            <Box display="flex" flexDirection="column">
                                <Chip className={classes.workPosition} label="Registered Nurse"/>
                                <Chip className={classes.workPosition} label="Eergency Room Nurse"/>
                            </Box>
                        </Box>
                        <Button className={classes.button} variant="contained" color="primary" fullWidth>Message</Button>
                    </Box>
                )}
            />
        )
    }
}

const styles= (theme) => ({
    root: {

    },
    avatar: {
        width: 120,
        height: 120,
        margin: '0 auto',
        position: 'relative',
        top: -60,
        marginBottom: -60,
        fontSize: '96px',
        backgroundColor: theme.palette.primary['100'],
    },
    content: {

    },
    name: {
        textAlign: 'center',
    },
    tagsContainer: {
        justifyContent: 'center',
        margin: "24px 0px",
    },
    profession: {
        width: 56,
        height: 56,
        marginRight: theme.spacing(1.5),
        marginBottom: theme.spacing(1.5),
        borderRadius: theme.shape.borderRadius,
    },
    workPosition: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        height: theme.spacing(3),
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        display: 'flex',
        width: '80%',
        margin: '0 auto',
        background: 'linear-gradient(45deg, #5fb2e3 30%, #14eef9 90%)',
        color: 'white',
    },
});

export default withStyles(styles)(
    BioCard
)
