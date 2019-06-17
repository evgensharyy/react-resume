import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from '@material-ui/core/Link';

import Skill from './Skill/Skill';

const useStyles = makeStyles(theme => ({
  portfolioSkills: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: 20,
    boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  skills: {
    margin: theme.spacing(1),
  },
  link: {
    margin: theme.spacing(1),
  },
}));

function PortfolioBlock() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
            <h3><Badge variant="light">Portfolio</Badge></h3>
        }
        title="Have questions? Contact with me!"
        subheader="updated June 09, 2019"
      />
      <CardContent>
        <Row>
          <Col lg>
            <Card className={classes.card}>
              <CardHeader />
              <CardMedia
                className={classes.media}
                image="/static/images/portfolio/1.png"
                title="Angular Material Landing Page"
              />
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                NGLP - Angular Material Landing Page. NGLP built with Angular and Angular CLI. Landing Page is developed on the basis of the Angular Material framework.
                <Link href={'https://evgensharyy.github.io/nglp_prod/'} className={classes.link}>
                  Go to project: Angular Material Landing Page
                </Link>
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Skills:
                </Typography>
                <div className={classes.portfolioSkills}>
                  {[
                  {title: 'JavaScript', text: 'Node JavaScript is a prototype-based scripting language that is dynamic, weakly typed and has first-class functions. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.js' },
                  {title: 'Node js', text: 'Node.js is a software system designed for writing highly-scalable internet applications, notably web servers. Programs are written in JavaScript, using event-driven, asynchronous I/O to minimize overhead and maximize scalability.' },
                  {title: 'Angular', text: 'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.' },
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
          </Col>
          <Col lg>
            <Card className={classes.card}>
              <CardHeader />
              <CardMedia
                className={classes.media}
                image="/static/images/portfolio/2.png"
                title="Modeltut - beauty forum"
              />
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Modeltut - beauty forum. NodeBB is next generation forum software. It's powerful, mobile-ready and easy to use.
                <Link href={'https://nodebb.org/'} className={classes.link}>
                  See more information about Nodebb
                </Link>
                <Link href={'https://modeltut.com.ua'} className={classes.link}>
                  Go to project: Modeltut
                </Link>
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Skills:
                </Typography>
                <div className={classes.portfolioSkills}>
                  {[
                  {title: 'JavaScript', text: 'Node JavaScript is a prototype-based scripting language that is dynamic, weakly typed and has first-class functions. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.js' },
                  {title: 'Node js', text: 'Node.js is a software system designed for writing highly-scalable internet applications, notably web servers. Programs are written in JavaScript, using event-driven, asynchronous I/O to minimize overhead and maximize scalability.' },
                  {title: 'Express', text: 'Express is a minimal and flexible Node.js Web application framework, providing a robust set of features for building single-page, multipage, and hybrid Web applications' },
                  {title: 'MongoDB', text: 'MongoDB is an open source document-oriented NoSQL database system written in the C++ programming language. It manages collections of BSON documents.' },
                  {title: 'CentOS', text: 'CentOS is a free operating system distribution based upon the Linux kernel. It is derived entirely from the Red Hat Enterprise Linux (RHEL) distribution. ' },
                  {title: 'Nginx', text: 'ginx [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server, originally written by Igor Sysoev.' },
                  {title: 'Server admin', text: 'The Server Administrators role is to design, install, administer, and optimize company servers and related components to achieve high performance of the various business functions supported by the servers as necessary.' },
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
          </Col>
          <Col lg>
            <Card className={classes.card}>
              <CardHeader />
              <CardMedia
                className={classes.media}
                image="/static/images/portfolio/3.png"
                title="React Resume"
              />
              <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                React Resume - is developed on the basis of the React framework.
                <Link href={'https://evgensharyy.github.io/react_resume_prod/'} className={classes.link}>
                  Go to project: React Resume
                </Link>
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Skills:
                </Typography>
                <div className={classes.portfolioSkills}>
                  {[
                  {title: 'JavaScript', text: 'Node JavaScript is a prototype-based scripting language that is dynamic, weakly typed and has first-class functions. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.js' },
                  {title: 'Node js', text: 'Node.js is a software system designed for writing highly-scalable internet applications, notably web servers. Programs are written in JavaScript, using event-driven, asynchronous I/O to minimize overhead and maximize scalability.' },
                  {title: 'React', text: 'React is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications.' },
                  {title: 'Webpack', text: 'Webpack takes modules with dependencies and generates static assets representing those modules. ' },
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
          </Col>
          </Row>
      </CardContent>
    </Card>
  );
}

export default PortfolioBlock;