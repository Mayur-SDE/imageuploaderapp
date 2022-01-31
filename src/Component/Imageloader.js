import React, {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  Imageroot: {
    height: "70vh",
    alignItems: "center",
    justifyContent: "Center",
    display: "flex",

  },
  containerInfo:{
    border: "0.5px solid lightgray",
    background:  "linear-gradient(rgba(255,255,0.5), rgba(0,255,255,0.5))",
    height: "50vh",
    width: "100vh",
    justifyContent: "center",
    alignItems:"center",
    display:"flex",
  },

  textInfo:{
      color: "#fff",
      fontSize: "1.5rem",
  },
//     ImageWrapper:{
//     minHeight: "100%",
//     maxHeight: "auto",
//     width: "100%",
//     backgroundColor: "tranaparent",
//     marginTop: "0.5rem",
//     display: "flex",
//     flexWrap: "wrap",
//     alignItems:"center",
//     justifyContent:"left",
    
//   },
  DivWrapper:{
    minHeight: "100%",
    Height: "70px",
    width: "100%",
    backgroundColor: "tranaparent",
    marginTop: "0.5rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems:"center",
    justifyContent:"center",
  }
}));



export default function Imageloader({checkedItem}) {
  const classes = useStyles();


  const [yourImage, setImage] = useState([]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept : "image/*", 
    onDrop : (acceptedFiles) =>{
      setImage(
        acceptedFiles.map
        ((uploadFiles) => Object.assign(uploadFiles, {
          preview : URL.createObjectURL(uploadFiles)
        }))
      )
    }
  });



  return (
  
    
    <div className={classes.Imageroot}>
      <containe className= {classes.containerInfo}>
        <div {...getRootProps()} className={classes.textInfo}>
          <input {...getInputProps()}/>
          {
            isDragActive ? 
            <p>Upload your Image Here.</p> : <p> Drag 'n' Drop Your Image || Click to select Images  </p>
          }

        </div>                
      </containe>
      <div className={classes.DivWrapper}>
      <div>
          {yourImage.map((uploadFiles) =>{
            return (
              <div  className={classes.ImageWrapper}>
                <img src= {uploadFiles.preview}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
    
    
  );
}

