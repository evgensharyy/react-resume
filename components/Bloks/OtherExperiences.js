import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  alert: {
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)',
  },
}));

function OtherExperiences() {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <CardHeader
      avatar={
          <h3><Badge variant="light">Other Experiences</Badge></h3>
      }
      title="Shrimp and Chorizo Paella"
      subheader="updated June 09, 2019"
    />
    <CardContent>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Alert variant="success" className={classes.alert}>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This example
              text is going to run a bit longer so that you can see how spacing within an
              alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice
              and tidy.
            </p>
          </Alert>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </Tab>
      </Tabs>

    </CardContent>
    </Card>
  );
}

export default OtherExperiences;