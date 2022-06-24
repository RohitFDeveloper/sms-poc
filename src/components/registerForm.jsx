import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import UploadImg from './uploadImg';
// import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {
  Stack, TextField, IconButton, InputAdornment,
  Radio, RadioGroup, FormControlLabel, FormLabel,
  FormControl, Typography, Button
} from '@mui/material';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from './iconify'
import StudentService from '../services/StudentService';

export default function RegisterForm() {
  const navigate = useNavigate();
  var studentExist = false;
  const [showPassword, setShowPassword] = useState(false);
  const [userImg, setuserImg] = useState(null);
  // const [value, setValue] = useState(null);

  const RegisterSchema = Yup.object({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    dob: Yup.date().required('Dob is required'),
    gender: Yup.string().required('Dob is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      // console.log(values);
      alert('Student registered successfully!!')
      navigate('/student/login', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, handleChange, values, handleBlur } = formik;

  const postData = (e) => {
    e.preventDefault();
    let student = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      email: values.email,
      password: values.password
    };
    checkStudentExit()
    if (studentExist === false) {
      StudentService.createStudent(student).then(res => {
        // console.log(res)
        alert("Student is registered successfully!!")
        navigate('/student/login', { replace: true });
      });
    } else {
      alert("Student is already registered!!")
      navigate('/student/login', { replace: true });
    }
  }
  function checkStudentExit() {
    // StudentService.checkStudent(studentEmail).then(res => {
    //   studentExist: false;
    // })
    studentExist = false;
  }
  function uploadHandler(img) {
    setuserImg({ userImg: img });
  }
  return (
    <FormikProvider value={formik}>
      <Typography mb={2} variant="h5" component="div" align='center' style={{ color: "#1976d2" }}>
        Registration Form
      </Typography>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <TextField
              fullWidth
              label="First name"
              name='firstName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              label="Last name"
              name='lastName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} 
                  sx={{ width: 180 }}
                  error={Boolean(touched.dob && errors.dob)}
                  helperText={touched.dob && errors.dob}
                  />}
                />
              </LocalizationProvider> */}
              <FormControl sx={{ width: 180 }}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  name='gender'
                  onChange={handleChange}
                  value={values.gender}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="transgender" control={<Radio />} label="Transgender" />
                </RadioGroup>
              </FormControl>

            </div>
            <Stack direction="column" spacing={2}>
              <UploadImg onUploadImage={uploadHandler} />
            </Stack>
          </Stack>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            name='email'
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            name='password'
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button fullWidth size="large" type="submit" variant="contained"
            onClick={postData}>Register</Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
