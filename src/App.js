import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Axios from "axios";
import { DropZoneField } from "./components/uploadComponent";

import "./App.css";

const App = () => {
  const [progress, setProgress] = useState("getUpload");
  const [errorMessage, setErrorMessage] = useState("");

  /* Handle upload sending the data to backend */
  const onImage = async (files) => {
    setProgress("uploading");

    try {
      setProgress("uploaded");
    } catch (error) {
      console.log("error in upload", error);
      setErrorMessage(error.message);
      setProgress("uploadError");
    }
  };

  const content = () => {
    switch (progress) {
      case "getUpload":
        return <DropZoneField /* onImage={onImage} */ />;
      case "uploading":
        return <h2>Uploading....</h2>;
      case "uploaded":
        return <img alt="uploaded" />;
      case "uploadError":
        return (
          <>
            <div>Error message = {errorMessage}</div>
            <DropZoneField /*onImage={onImage} */ />
          </>
        );
    }
  };

  return (
    <div className="App">
      <h1>Analayse Your HandWritting</h1>
      {content()}
    </div>
  );
};

export default App;
