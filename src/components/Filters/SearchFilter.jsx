import React, { useState } from 'react';

const SearchFilter = ({ searchFilter, setSearchFilter }) => {
  return (
    <>
      <h2>SearchFilter</h2>
      <input
        type="text"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Search.."
      />
    </>
  );
};

export default SearchFilter;
