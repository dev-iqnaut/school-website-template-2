import React, { useState } from "react";
import images from "./galleryData"; // Importing images from the external file

const galleryPage = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  // Function to close the fullscreen image
  const handleClose = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || "Gallery Image"}
            className="w-full h-auto rounded-md cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </div>

      {/* Fullscreen overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative">
            {/* Fullscreen image */}
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[90vh] rounded-md"
              style={{ transform: "scale(1)", transition: "none" }} // Ensure the image displays at full size
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-2xl"
              onClick={handleClose}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default galleryPage;
