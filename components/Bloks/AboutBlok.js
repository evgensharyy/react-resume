import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Badge from '../../static/images/avatar/1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    marginTop: 20,
    boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

const classes = useStyles();

function Photo() {
    return (
        
        <Avatar alt="Remy Sharp" src='../../static/images/avatar/1.jpg' className={classes.bigAvatar} />

  );
}

function EducationBlok() {

  return (
        <Row>
            <Col sm={4}><Photo /></Col>
            <Col sm={8}>

            <Paper className={classes.root}>
                <Typography variant="h6">
                    Master of Computer Applications (M.C.A.)
                </Typography>
                <Typography component="p">
                    Donbass State Technical University 2008 - 2013"
                </Typography>
            </Paper>

            </Col>
        </Row>
  );
}

export default EducationBlok;