import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

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
  },
  skills: {
    margin: theme.spacing(1),
  }
}));

function SkillsBlock() {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
            <h3><Badge variant="light">Skills</Badge></h3>
        }
        title="I have good skills in:"
        subheader="updated June 09, 2019"
      />
      <CardContent>
       
      <div className={classes.root}>

            {[
        {title: 'JavaScript', text: 'Node JavaScript is a prototype-based scripting language that is dynamic, weakly typed and has first-class functions. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.js' },
        {title: 'Node js', text: 'Node.js is a software system designed for writing highly-scalable internet applications, notably web servers. Programs are written in JavaScript, using event-driven, asynchronous I/O to minimize overhead and maximize scalability.' },
        {title: 'Angular', text: 'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.' },
        {title: 'React', text: 'React is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications.' },
        {title: 'Express', text: 'Express is a minimal and flexible Node.js Web application framework, providing a robust set of features for building single-page, multipage, and hybrid Web applications' },
        {title: 'MongoDB', text: 'MongoDB is an open source document-oriented NoSQL database system written in the C++ programming language. It manages collections of BSON documents.' },
        {title: 'Git', text: 'Git is a distributed revision control system with an emphasis on speed. Git was initially designed and developed by Linus Torvalds for Linux kernel development.' },
        {title: 'Webpack', text: 'Webpack takes modules with dependencies and generates static assets representing those modules. ' },
        {title: 'CentOS', text: 'CentOS is a free operating system distribution based upon the Linux kernel. It is derived entirely from the Red Hat Enterprise Linux (RHEL) distribution. ' },
        {title: 'Data Scraping', text: 'Data scraping is a technique in which a computer program extracts data from human-readable output coming from another program.' },
      ].map((skill, idx) => (
        <Skill key={idx} 
        title={skill.title} 
        text={skill.text}
        skillButton={
          <Button className={classes.skills} variant="outline-success">{skill.title}</Button>
        }
        />
      ))}
         
      </div>

      </CardContent>
    </Card>
  );
}

export default SkillsBlock;