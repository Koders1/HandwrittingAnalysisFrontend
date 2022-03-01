import React from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { GrCloudUpload } from 'react-icons/gr';
import { analyseImage } from '../apis/analyseImage';
import '../App.css';

export const DropZoneField = ({ results, setResults }) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
	const handleClick = async () => {
		if (acceptedFiles.length === 0) {
			alert('No image has been selected');
			return;
		}
		const result = await analyseImage(acceptedFiles[0]);
		setResults(result);
	};
	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));
	return (
		<section className='container'>
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<div className='drag-area'>
					<GrCloudUpload style={{ height: '100', width: '50' }} />
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
				{/* to check file upload successfully */}
				<aside>
					<ul>{files}</ul>
				</aside>
			</div>
			{/* to handle upload */}
			<button /*onClick={props.onImage(files)} */>Upload HandWritting Sample</button>
			<br />
			<br />
			<button onClick={handleClick}>Get Results</button>
		</section>
	);
};
