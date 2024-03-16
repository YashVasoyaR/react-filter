import React, { Fragment } from 'react';
import CheckBoxFilter from './CheckBoxFilter';

const FilterByCheckBox = ({
  data,
  filterByCities,
  setFilterByCities,
  filterByCategory,
  setFilterByCategory,
  setFilterByIsActive,
  filterByIsActive,
  filterByType,
  setFilterByType
}) => {
  return (
    <div className='filter-wrapper'>
      <CheckBoxFilter
        data={data}
        title={'City'}
        property={['address', 'city']}
        checkBoxFilter={filterByCities}
        setCheckBoxFilter={setFilterByCities}
      />
      <CheckBoxFilter
        data={data}
        title={'Category'}
        property={['category']}
        checkBoxFilter={filterByCategory}
        setCheckBoxFilter={setFilterByCategory}
      />
      <CheckBoxFilter
        data={data}
        title={'Type'}
        property={['type']}
        checkBoxFilter={filterByType}
        setCheckBoxFilter={setFilterByType}
      />
      <CheckBoxFilter
        data={data}
        title={'Active'}
        property={['active']}
        checkBoxFilter={filterByIsActive}
        setCheckBoxFilter={setFilterByIsActive}
      />
    </div>
  );
};

export default FilterByCheckBox;
