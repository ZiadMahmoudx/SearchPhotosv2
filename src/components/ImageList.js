import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-2">
      {renderImages}
    </div>
  );
};

export default ImageList;
