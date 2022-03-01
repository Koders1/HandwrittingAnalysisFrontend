import React, { useState } from "react";
import "./App.css";
import { DropZoneField } from "./components/uploadComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [progress, setProgress] = useState("getUpload");
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const content = () => {
    switch (progress) {
      case "getUpload":
        return (
          <div>
            <h1>Analayse Your HandWritting</h1>
            <DropZoneField
              results={results}
              setResults={setResults}
              progress={progress}
              setProgress={setProgress}
              setErrorMessage={setErrorMessage}
            />
          </div>
        );
      case "uploading":
        return (
          <div>
            <h2 class="sr-only">Analysing...</h2>
            <h3 class="sr-only">Please Wait</h3>
            <div className="text-center mt-5">
              <div
                className="spinner-border spinner-grow-mg text-info"
                style={{ height: "150px", width: "150px" }}
                role="status"
              ></div>
            </div>
          </div>
        );
      case "uploaded":
        return (
          <div>
            {!!results.length && (
              <>
                <h1>The Prediction Results</h1>
                {results.map((aResult, index) => (
                  <p key={index}>
                    {aResult.characteristic_name} | {aResult.comment} |{" "}
                    {aResult.value}
                  </p>
                ))}
              </>
            )}
            <button
              className="btn btn-outline-info btn-lg"
              onClick={() => {
                setProgress("getUpload");
              }}
            >
              Upload a new Image
            </button>
          </div>
        );
      case "uploadError":
        return (
          <>
            <div>
              <h1>Try Again</h1>
              Error : {errorMessage}
            </div>
            <DropZoneField
              results={results}
              setResults={setResults}
              progress={progress}
              setProgress={setProgress}
              setErrorMessage={setErrorMessage}
            />
          </>
        );
    }
  };

  return (
    <div class="container">
      <div className="App">{content()}</div>
    </div>
  );
};

export default App;
