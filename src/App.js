import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import Axios from 'axios';
import {UploadComponent} from "./components/uploadComponent"

import './App.css';



const App = () => {
    const [progress, setProgress] = useState('getUpload');
    const [url, setImageURL] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState('');

    

    /* const onImage = async (failedImages, successImages) => {
        
        
        setProgress('uploading');

        try {
            console.log('successImages', successImages);
            const parts = successImages[0].split(';');
            const mime = parts[0].split(':')[1];
            const name = parts[1].split('=')[1];
            const data = parts[2];
            const res = await Axios.post(givenurl, { mime, name, image: data });

            setImageURL(res.data.imageURL);
            setProgress('uploaded');
        } catch (error) {
            console.log('error in upload', error);
            setErrorMessage(error.message);
            setProgress('uploadError');
        }
    }; */

    const content = () => {
        switch (progress) {
            case 'getUpload':
                return <UploadComponent  /* onImage={onImage} */  />;
            case 'uploading':
                return <h2>Uploading....</h2>;
            case 'uploaded':
                return <img src={url} alt="uploaded" />;
            case 'uploadError':
                return (
                    <>
                        <div>Error message = {errorMessage}</div>
                        <UploadComponent /* onImage={onImage} */ />
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
