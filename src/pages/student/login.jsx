import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  Stack, TextField, IconButton, InputAdornment,
  Typography, Card, Box, CardContent, Button
} from '@mui/material';
import Iconify from '../../components/iconify';
import { Link } from "react-router-dom";
import StudentService from '../../services/StudentService';

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log(values);
      alert('Student login successfully!!')
    },
  });
  const { errors, touched, handleSubmit, handleChange, values, handleBlur } = formik;
  const centerBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)"
  }
  const loginStudent = (e) => {
    e.preventDefault();
    let studentCred = {
      email: values.email,
      password: values.password
    };

    StudentService.loginStudent(studentCred).then(res => {
      // console.log(res.data)
      if (res.data !== "No user is found") {
        alert('Student login successfully!!')
        navigate('/student/dashboard', { replace: true });
      } else {
        alert('Student is not registered!!')
        navigate('/student/register', { replace: true });
      }
    })
  }
  return (
    <div style={{ position: "relative" }}>
      <Box sx={{ minWidth: 400, maxWidth: 400 }} style={centerBox}>
        <Card variant="outlined">
          <CardContent>
            <FormikProvider value={formik}>
              <Typography mb={2} variant="h5" component="div" align='center' style={{ color: "#1976d2" }}>
                Login Form
              </Typography>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
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
                    onClick={loginStudent}>Login</Button>
                  <Link to="/">Home</Link>
                </Stack>
              </Form>
            </FormikProvider>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
