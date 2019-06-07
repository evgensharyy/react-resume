import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Badge from 'react-bootstrap/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
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
      subheader="September 14, 2016"
    />
    <CardContent>

    </CardContent>
    </Card>
  );
}

export default OtherExperiences;