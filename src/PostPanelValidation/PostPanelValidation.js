
import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters').max(60, 'Name must be no longer 60'),
    email: yup.string().required('Email is required').email('Invalid email'),
    phone: yup.string().required('Phone number is required').matches(/^\+380\d{9}$/, 'Invalid phone number'),
    position_id: yup.number().required('Position is required'),
    photo: yup.mixed().required('Photo is required').test('fileSize', 'File size too large', (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    }).test('fileType', 'Invalid file type', (value) => {
      return value && value.type.startsWith('image/');
    })
  });