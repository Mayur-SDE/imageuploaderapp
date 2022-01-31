import React from "react";
import './style.css';

import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from "@material-ui/core";
import UiPage from "../Component/UiPage";
import Imageloader from "../Component/Imageloader";
import ImagePreview from "../Component/ImagePreview";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bgimg1.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
  },
  footerInfo:{
    height: "20vh",
    color: "#fff",  
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerTitle:{
    color: "white",
    marginRight: "1rem",
    textUnderlineOffset: "none",
  },
  LinkedInIconInfo:{
    color: "blue",
    marginRight: "1rem",
    cursor: "pointer",
  },
  GitHubIconInfo:{
    cursor:"pointer",
  }
}));

export default function Home(){

  const classes = useStyles();

  return <div className={classes.root}>
      <UiPage />
      <CssBaseline />

      {/* <div>
      <Imageloader/>
      </div> */}
      <ImagePreview/>
      <footer className={classes.footerInfo}>
        <h2 className={classes.footerTitle}>
          For More Info Visit: <a style={{cursor:"pointer", textDecoration: "none",}} href="https://visionify.ai/">Visionify.ai</a>
        </h2>
        <LinkedInIcon className={classes.LinkedInIconInfo}/>
        <GitHubIcon className={classes.GitHubIconInfo}/>
      </footer>
      
  </div>
}