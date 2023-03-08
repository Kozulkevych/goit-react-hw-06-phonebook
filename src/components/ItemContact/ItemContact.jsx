import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch} from 'react-redux';
import { ContactItem, Text, ButtonDelete } from './ItemContact.styled';
import { GrClose } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';


export const ItemContact = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Text>
        <FaUser size="16" />
        &nbsp;
        {name}: {number}
      </Text>
      <ButtonDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        <GrClose size="18" />
        {/* Delete */}
      </ButtonDelete>
    </ContactItem>
  );
};
ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};


