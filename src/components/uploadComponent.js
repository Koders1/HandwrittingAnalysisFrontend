import React from "react";
import { useDropzone } from "react-dropzone";
import { GrCloudUpload } from "react-icons/gr";
import { analyseImage } from "../apis/analyseImage";
import "../App.css";

export const DropZoneField = ({
  results,
  setResults,
  progress,
  setProgress,
  setErrorMessage,
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
  });
  const handleClick = async () => {
    setProgress("uploading");
    if (acceptedFiles.length === 0) {
      setProgress("uploadError");
      setErrorMessage("No image has been selected");
      return;
    }
    try {
      const result = await analyseImage(acceptedFiles[0]);
      setResults(result);
      setProgress("uploaded");
    } catch (err) {
      setErrorMessage("Image not Uploaded");
      setProgress("uploadError");
    }
  };
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="drag-area">
          <GrCloudUpload style={{ height: "100", width: "50" }} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        {/* to check file upload successfully */}
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
      {/* to handle upload */}
      <br />
      <br />
      <button className="btn btn-outline-info btn-lg" onClick={handleClick}>
        Get Results
      </button>
    </section>
  );
};
