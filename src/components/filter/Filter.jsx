import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { getFilter } from '../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const changeFilter = evt => {
  dispatch(setFilter(evt.currentTarget.value));
  
  };
  return (
    <div className={css.filter}>
      <input
        placeholder="type name for search"
        type="text"
        value={filter}
        name="filter"
        onChange={changeFilter}
      />
    </div>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
export default Filter;
