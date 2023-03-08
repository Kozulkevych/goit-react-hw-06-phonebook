import FormContact from './FormContact/FormContact';
import FilterContacts from './FilterContacts/FilterContacts';
import ListContacts from './ListContacts/ListContacts';
import { TitlePrimary, TitleSecondary} from './App.styled';
import Box from './Box/Box';

export const App =()=> {
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      as="main"
    >
      <Box
        m={7}
        p={6}
        border="none"
        borderRadius="normal"
        boxShadow="shadows"
        position="relative"
        as="section"
      >
        <TitlePrimary>PHONEBOOK</TitlePrimary>
        <Box p={4} border="normal" borderRadius="normal">
          <FormContact />
        </Box>
        <TitleSecondary>Contacts</TitleSecondary>
        <FilterContacts />
        <ListContacts /> 
      </Box>
    </Box>
  );
};
