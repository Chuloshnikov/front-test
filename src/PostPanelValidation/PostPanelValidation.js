import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name should contain at least 2 characters')
    .max(60, 'Name should not exceed 60 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address')
    .matches(
      /^[\w-.+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must be a valid email address'
    ),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+380([0-9]{9})$/, 'Phone number must be in the format +380XXXXXXXXX'),
  position_id: Yup.number()
    .required('Position ID is required')
    .positive('Position ID must be a positive number')
    .integer('Position ID must be an integer')
    .min(1, 'Position ID must be at least 1'),
  photo: Yup.mixed()
    .required('Photo is required')
    .test(
      'fileFormat',
      'Photo must be in JPEG/JPG format',
      (value) => value && value.type === 'image/jpeg'
    )
    .test(
      'fileSize',
      'Photo size must not be greater than 5 Mb',
      (value) => value && value.size <= 5242880
    )
    .test(
      'imageSize',
      'Minimum size of photo 70x70px',
      (value) => {
        if (!value) {
          return true;
        }

        const img = new Image();
        img.src = window.URL.createObjectURL(value);
        return new Promise((resolve, reject) => {
          img.onload = () => {
            const { width, height } = img;
            resolve(width >= 70 && height >= 70);
          };
          img.onerror = reject;
        });
      }
    )
});