import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Badge from 'react-bootstrap/Badge';
import EmploymentHistory from './EmploymentHistory';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: 20,
    boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)',
  }
}));

function PortfolioBlock() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
            <h3><Badge variant="light">Employment History</Badge></h3>
        }
        title="I like interesting work"
        subheader="updated June 09, 2019"
      />
      <CardContent>

        <EmploymentHistory />
        
      </CardContent>
    </Card>
  );
}

export default PortfolioBlock;