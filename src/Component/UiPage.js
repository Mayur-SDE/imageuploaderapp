import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
    h1:"Download",
  },
  colorText: {
    color: '#5AFF3D',
    
  },
  colorText1:{
    fontSize:"1rem",
    color: '#5AFF3D',
  },
  IconButtoninfo:{
    color: "#fff",
    display: "flex",
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },

}));
export default function UiPage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []); //animation effect set to true to transition the layout
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            IMAGE<span className={classes.colorText1}>World.</span>
          </h1>
          <h1 className={classes.IconButtoninfo}>
                      Visionify.<span style={{color: "#5AFF3D"}}>ai</span>
                
          </h1>
        </Toolbar>
      </AppBar>
    
      <Collapse //collapseHeight feature
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}      > 
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Image<span className={classes.colorText}>Trainer.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton >
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}