import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Badge from 'react-bootstrap/Badge';

import Skill from './Skill/Skill';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: 20,
    boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)',
    paddingBottom: 20
  }
}));

function SkillsBlock() {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
            <h3><Badge variant="success">Skills</Badge></h3>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
       
      <div className={classes.root}>

            {[
        {title: 'Node js',  },
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
         
      </div>

      </CardContent>
    </Card>
  );
}

export default SkillsBlock;