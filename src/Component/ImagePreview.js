import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import FileUploadIcon from '@mui/icons-material/FileUpload';import UploadFileIcon from '@mui/icons-material/UploadFile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DownloadIcon from '@mui/icons-material/Download';







const ImagePreview = () => {

	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className='app'>
			<div className="heading"></div>
			<div className='SectionDiv'>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<h1 className='text-title'>
						UPLOAD<span style={{color:"#fff" , fontSize:"20px"}}>IMAGES.</span>
					</h1>
					<label htmlFor="file" className="label">
						< FileUploadIcon/> 
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
		
	);
};

export default ImagePreview;