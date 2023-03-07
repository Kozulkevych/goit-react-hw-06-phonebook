import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ContactForm, LabelForm, InputForm, Error } from './FormContact.styled';
import { Button } from '../Button/Button';
import { MdPersonAdd } from 'react-icons/md';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

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

export default function FormContact({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
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

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};