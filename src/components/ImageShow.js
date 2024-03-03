import React from 'react';

const ImageShow = ({ image }) => {
  return (
    <div className="w-full max-w-md mx-auto max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> {image.alt_description} </div>
        <p className="text-gray-700 text-base">{image.description} </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Taken By: {image.user.name}
        </span>
      </div>
    </div>
  );
};

export default ImageShow;
