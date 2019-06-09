import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

function EducationBlok() {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <CardHeader
      avatar={
          <h3><Badge variant="light">Education</Badge></h3>
      }
      title="Shrimp and Chorizo Paella"
      subheader="updated June 09, 2019"
    />
    <CardContent>
        <div>
        <Paper className={classes.root}>
            <Typography variant="h6">
                Master of Computer Applications (M.C.A.)
            </Typography>
            <Typography component="p">
                Donbass State Technical University 2008 - 2013"
            </Typography>
        </Paper>
        </div>
    </CardContent>
    </Card>
  );
}

export default EducationBlok;