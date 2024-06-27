import React, { useEffect, useState } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const GalleryComponent = ({ data }) => {
  console.log("✌️data-data --->", data);
 

  return (
    <>
      <SlideshowLightbox className="row gallery-row row-cols-lg-4 row-cols-md-2 row-cols-sm-1  mx-auto image-box">
        {data?.map((url, index) => (
          <img
            src={url.src}
            className={` ${
              data?.length >= 3
                ? "deskdop-gallery-images"
                : "mobile-gallery-images"
            }`}
            style={{
              cursor: "pointer",
            }}
          />
        ))}
      </SlideshowLightbox>

    
    </>
  );
};

export default GalleryComponent;
