import React from 'react';
import ImageUploader from 'react-images-upload';
export const  UploadComponent = props => (
    <form>
        <label>
            Upload Your Handwritting Sample

        </label>
        <ImageUploader
            key="image-uploader"
            withIcon={true}
            singleImage={true}
            withPreview={true}
            label="Maximum size file: 5MB"
            buttonText="Choose an image"
            onChange={props.onImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
        ></ImageUploader>
    </form>
);
