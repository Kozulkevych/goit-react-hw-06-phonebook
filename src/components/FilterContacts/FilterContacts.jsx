import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { LabelFilter, InputFilter } from './FilterContacts.styled';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        onChange={changeFilter}
      ></InputFilter>
    </LabelFilter>
  );
};

export default FilterContacts;
