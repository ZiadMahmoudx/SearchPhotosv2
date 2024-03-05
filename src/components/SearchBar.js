import React, { useState } from 'react';

const SearchBar = ({ onSubmitForm }) => {
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(term);
    setTerm('');
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="max-w-md mx-auto mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 rounded-lg overflow-hidden"
      >
        <input
          value={term}
          onChange={handleChange}
          type="text"
          className="w-full py-2 px-4 bg-white text-gray-700 leading-tight focus:outline-none"
          placeholder="Search"
        />
        <button
          type="submit"
          className="bg-sky-800 hover:bg-blue-900 text-white font-bold py-2 px-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
