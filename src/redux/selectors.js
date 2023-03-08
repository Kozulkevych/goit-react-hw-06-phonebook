export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;


// import { createSelector } from '@reduxjs/toolkit';
// export const getFilteredContacts = createSelector(
//   [getContacts, state => state.filter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
