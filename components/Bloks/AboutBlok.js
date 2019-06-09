import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

function Photo() {

  const classes = useStyles();

    return (
        <div>
          <Avatar alt="Remy Sharp" src='../../static/images/avatar/1.jpg' className={classes.bigAvatar} />
        </div>
  );
}

export default function EducationBlok() {

  const classes = useStyles();

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