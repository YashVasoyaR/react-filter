import React, { Fragment, useState } from 'react';
import SearchFilter from '../Filters/SearchFilter';
import FilterByCheckBox from '../Filters/FilterByCheckBox';

const FilterTable = ({ data }) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [filterByCities, setFilterByCities] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState([]);
  const [filterByIsActive, setFilterByIsActive] = useState([]);
  const [filterByType, setFilterByType] = useState([]);

  const getAllKeys = data?.reduce((acc, item) => {
    Object.keys(item).forEach((element) => {
      if (!acc.includes(element)) {
        acc.push(element);
      }
    });
    return acc;
  }, []);

  const filterTable = data?.filter(
    (list) =>
      Object.values(list).some((item) => String(item).toLowerCase().includes(searchFilter?.toLowerCase()) ) &&
      (filterByCities.length === 0 || filterByCities.includes(list.address) || filterByCities.includes(list.city)) &&
      (filterByCategory.length === 0 || filterByCategory.includes(list.category)) &&
      (filterByIsActive.length === 0 || filterByIsActive.includes(list.active)) &&
      (filterByType.length === 0 || filterByType.includes(list.type))
  );

  return (
    <>
      <h1>FilterTable</h1>
      <FilterByCheckBox
        data={data}
        getAllKeys={getAllKeys}
        filterByCities={filterByCities}
        setFilterByCities={setFilterByCities}
        filterByCategory={filterByCategory}
        setFilterByCategory={setFilterByCategory}
        filterByIsActive={filterByIsActive}
        setFilterByIsActive={setFilterByIsActive}
        filterByType={filterByType}
        setFilterByType={setFilterByType}
      />
      <SearchFilter
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            {getAllKeys?.map((item, index) => (
              <th key={`${item}_${index}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterTable?.map((list) => (
            <tr key={list.id}>
              {getAllKeys.map((keys) => (
                <td key={keys}>{list[keys] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FilterTable;
