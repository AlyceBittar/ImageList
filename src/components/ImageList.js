import React from "react";

// Functional component to display a list of images
const ImageList = (props) => {
    // Map through the images array passed as props and create an <img> element for each image
    const images = props.images.map((image)=> {
        return <img key={image.id} src={image.webformatURL} alt="img" />
    });
    
    // Render the list of images
    return(
        <div>
            {images}
        </div>
    );
}

export default ImageList;
