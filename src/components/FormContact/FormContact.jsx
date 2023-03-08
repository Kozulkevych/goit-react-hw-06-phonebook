// import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ContactForm, LabelForm, InputForm, Error } from './FormContact.styled';
import { Button } from '../Button/Button';
import { MdPersonAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const phoneRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is required'),
  number: Yup.string()
    .matches(phoneRegEx, 'Phone number is required')
    .min(7, 'Too Short!'),
});

const INITIAL_VALUES = {
  name: '',
  number: '',
};

export default function FormContact() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts.`);
    }
    if (contacts.find(option => option.number === number)) {
      return alert('This number is already in contacts.');
    }
    dispatch(addContact(name, number));
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="on">
        <LabelForm htmlFor="name">
          Name
          <InputForm type="text" name="name"></InputForm>
          <Error name="name" component="div" />
        </LabelForm>
        <LabelForm htmlFor="number">
          Number
          <InputForm type="tel" name="number"></InputForm>
          <Error name="number" component="div" />
        </LabelForm>
        <Button type="submit" icon={MdPersonAdd}>
          Add contact
        </Button>
      </ContactForm>
    </Formik>
  );
}
