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

      <Tabs defaultActiveKey="dm" id="uncontrolled-tab-example">
        <Tab eventKey="dm" title="Digital Marketing">
          <Alert variant="success" className={classes.alert}>
            <Alert.Heading>I like marketing, and especially digital marketing</Alert.Heading>
            <p>
              Digital marketing is a generic term for marketing 
              products and services that uses digital channels to attract and retain customers.
            </p>
            <hr />
            <p className="mb-0">
              The experience of introducing advertising companies with the use of modern information technology (Zoho CRM)
            </p>
          </Alert>
        </Tab>
        <Tab eventKey="advertising" title="Online Advertising">
        <Alert variant="success" className={classes.alert}>
            <Alert.Heading>Internet advertising and advertising in social networks</Alert.Heading>
            <p>
              An advertisement displayed on time can turn a regular user into a valuable customer.
            </p>
            <hr />
            <p className="mb-0">
              Experience setting advertising campaigns with a budget of more than 11,000 dollars
            </p>
          </Alert>
        </Tab>
      </Tabs>

    </CardContent>
    </Card>
  );
}

export default OtherExperiences;