import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
        marginTop: 40,
      },
    contactPaper: {
      padding: theme.spacing(3, 2),
      marginTop: 40,
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    },
    bigAvatar: {
        margin: 30,
        width: 120,
        height: 120,
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
  

export default function Contact() {

  const classes = useStyles(); 

  const [openEmail, setOpenEmail] = React.useState(false);
  const [openPhone, setOpenPhone] = React.useState(false);
  const [openLinkedIn, setOpenLinkedIn] = React.useState(false);

  function handleClickOpenEmail() {
    setOpenEmail(true);
  }

  function handleCloseEmail() {
    setOpenEmail(false);
  }

  function handleClickOpenPhone() {
    setOpenPhone(true);
  }

  function handleClosePhone() {
    setOpenPhone(false);
  }

  function handleClickOpenLinkedIn() {
    setOpenLinkedIn(true);
  }

  function handleCloseLinkedIn() {
    setOpenLinkedIn(false);
  }

  return (
    <div>
       <Container>
              <Row>
                  <Col lg={2}><Photo /></Col>
                  <Col lg={10}>

                    <Paper className={classes.paper}>
                    <Typography variant="h5" component="h3">
                        Want to contact me?
                    </Typography>
                    <Typography component="p">
                        Select one of the following options to contact.
                    </Typography>
                    </Paper>

                  </Col>
              </Row>
              <Row>
                <Col sm={4}>
                <Paper className={classes.contactPaper}>
                <Grid container justify="center" alignItems="center">
                <Button variant="outlined" color="primary" onClick={handleClickOpenEmail}>
                    Email
                </Button>
                </Grid>
                </Paper>
                </Col>
                <Col sm={4}>
                <Paper className={classes.contactPaper}>
                <Grid container justify="center" alignItems="center">
                <Button variant="outlined" color="primary" onClick={handleClickOpenPhone}>
                    Phone
                </Button>
                </Grid>
                </Paper>
                </Col>
                <Col sm={4}>
                <Paper className={classes.contactPaper}>
                <Grid container justify="center" alignItems="center">
                <Button variant="outlined" color="primary" onClick={handleClickOpenLinkedIn}>
                    LinkedIn
                </Button> 
                </Grid>
                </Paper>  
                </Col>
              </Row>
        </Container>

      <Dialog
        open={openEmail}
        onClose={handleCloseEmail}
        aria-labelledby="email-title"
        aria-describedby="email-description"
      >
        <DialogTitle id="email-title">{"You can write me a letter."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="email-description">
          evgensharyy@gmail.com
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEmail} color="primary">
          Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openPhone}
        onClose={handleClosePhone}
        aria-labelledby="phone-title"
        aria-describedby="phone-description"
      >
        <DialogTitle id="phone-title">{"You can call me by phone."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="phone-description">
            +38 (099) 920-41-12
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePhone} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openLinkedIn}
        onClose={handleCloseLinkedIn}
        aria-labelledby="linkedin-title"
        aria-describedby="linkedin-description"
      >
        <DialogTitle id="linkedin-title">{"You can contact me on LinkedIn."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="linkedin-description">
          <Link href={'https://www.linkedin.com/in/yevhen-sharyi/'} className={classes.link}>
                    LinkedIn Profile
                </Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClosePhone} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}