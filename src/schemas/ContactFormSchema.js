import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  user_email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  user_name: yup.string().required('Required'),
  message_title: yup.string('Required'),
  message: yup.string().required('Required'),
});
