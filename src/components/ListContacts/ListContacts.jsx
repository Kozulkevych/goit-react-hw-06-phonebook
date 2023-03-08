import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors'; 
import { ItemContact } from '../ItemContact/ItemContact';
import { ContactsList, Text} from './ListContacts.styled';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ListContacts = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filteredContacts = getFilteredContacts(contacts, filter);
  const list = contacts.length;
  return (
    <ContactsList>
      {list !== 0 ?
      filteredContacts.map(({ id, name, number }) => (
        <ItemContact key={id} id={id} name={name} number={number} />
      )) :
      <Text>There’s nothing here yet...</Text>  
      }
    </ContactsList>
  );
};

export default ListContacts;
