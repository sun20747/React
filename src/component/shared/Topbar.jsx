import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Linkm from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import React,{useState} from "react";
import { Link , useLocation} from "react-router-dom";

import "./css/topbar.css";

const Topbar = () => {
  // const location = useLocation();
  // const path=location.pathname.split("/")[1];
  const classes = useStyles();
  return (
    <div className="Topbar">
             <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Linkm variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Linkm>
            <Linkm variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Linkm>
            <Linkm variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Linkm>
          </nav>
          <Link to='/login'>
          <Button  color="primary" variant="outlined" className={classes.link} >
            Login
          </Button></Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

{/* <div id="navbar">
        <Link to="/" id="logo">
          CompanyLogo
        </Link>
        <div id="navbar-right">
 
          <Link to="/" className={(path==="")? "active" : ""}>
            Home
           </Link>
          <Link to="/contact" className={(path==="contact")? "active" : ""} >Contact</Link>
          <Link to="/login" className={(path==="login")? "active" : ""}  >Login</Link>
        </div>
       </div> */}