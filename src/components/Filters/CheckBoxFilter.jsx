import React, { Fragment, memo } from 'react';

const CheckBoxFilter = ({
  data,
  title,
  property,
  checkBoxFilter,
  setCheckBoxFilter,
}) => {
  const showFilterBox = [ ...new Set(data?.map((list) => list[property[0]] || list[property[1]])), ].filter(Boolean);

  const handleCheckBox = (e) => {
    const value = e.target.value;
    if (checkBoxFilter.includes(value)) {
      setCheckBoxFilter(checkBoxFilter.filter((item) => item !== value));
    } else {
      setCheckBoxFilter([...checkBoxFilter, value]);
    }
  };

  return (
    <div className='checkbox-wrapper'>
      <h2>{showFilterBox.length > 0 && title}</h2>
      {showFilterBox?.map((item) => (
        <Fragment key={item}>
          <input
            type="checkbox"
            name={item}
            value={item}
            checked={checkBoxFilter[item]}
            onChange={(e) => handleCheckBox(e)}
          />
          <label htmlFor={item}>{item}</label>
        </Fragment>
      ))}
      {showFilterBox.length > 0 && <hr />}
    </div>
  );
};

export default memo(CheckBoxFilter);
