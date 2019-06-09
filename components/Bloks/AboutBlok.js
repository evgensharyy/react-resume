import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    marginTop: 10,
    boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)',
  },
  bigAvatar: {
    margin: 30,
    width: 120,
    height: 120,
  },
  helloText: {
    color: '#28a745',
  }
}));

function Photo() {

  const classes = useStyles();

    return (
      <Grid container justify="center" alignItems="center">
          <Avatar alt="Yevhen Sharyi" src='https://avatars3.githubusercontent.com/u/27727709' className={classes.bigAvatar} />
      </Grid>
  );
}

export default function EducationBlok() {

  const classes = useStyles();

  return (
        <Row>
            <Col lg={2}><Photo /></Col>
            <Col lg={10}>

            <Card className={classes.card}>
              <CardHeader
                avatar={
                    <h4>Yevhen Sharyi</h4>
                }
                title={
                  <h5>Node.js / React / Angular / Front End / Back End Developer</h5>
              }
                
                subheader="updated June 09, 2019"
              />
                <CardContent> 
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.helloText}>
                      Hello. My name is Evgen. I'm from Kiev. I'm very glad that you are reading my profile. 
                      If you are looking for an executive specialist, I am the one you need.
                  </Typography>

                </CardContent>
            </Card>

            </Col>
        </Row>
  );
}