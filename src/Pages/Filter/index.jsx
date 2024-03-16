import React from 'react';
import FilterTable from '../../components/FilterTable';
// import jsonData from './filter.json';
import jsonData from "./filter2.json";

const Filter = () => {
  return (
    <>
      <FilterTable data={jsonData} />
    </>
  );
};

export default Filter;
