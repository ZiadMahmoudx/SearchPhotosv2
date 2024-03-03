import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/NavBar';
import ImageList from './components/ImageList';
import getImages from './api';

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const res = await getImages(term);
    setImages(res);
    console.log(res);
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSubmitForm={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
