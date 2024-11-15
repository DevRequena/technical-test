import { useState } from 'react';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Alert, TextField, Typography } from '@mui/material';
import useAuthStore from '../auth/authStore';
import Logo from '../components/Logo/logo';
import GeneralButton from '../components/Buttons/GeneralButton';



export default function AuthLoginForm() {
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('La dirección de email debe ser válida').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = async () => {
    try {
      await LoginSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const formErrors = {};
      validationErrors.inner.forEach((error) => {
        formErrors[error.path] = error.message;
      });
      setErrors(formErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = await validateForm();
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      await login(formData.email, formData.password);
      setFormData({ email: '', password: '' });
    } catch (error) {
      setLoginError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box display="flex" maxHeight="100vh" bgcolor="#f8f9fa">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width='60vw'
      >
        <img
          src="/assets/WaveLogin.png"
          alt="Wave Login"
          style={{ height: '100vh', width: '100%', backgroundColor: '#F8F8F8'  }}
        />
        <Logo
          height={'330px'}
          width={'330px'}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </Box>


      <Box
        flex="0 0 30%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{marginLeft: '-100px', backgroundColor: "#F8F8F8"}}
      >
        <Box width="60vw" maxWidth="400px" p={4}>
          <Typography mb={2} color="#4D4F5C" letterSpacing={'0px'} fontWeight={600} fontFamily='Gibson-SemiBold' fontSize={'18px'} >
            BIENVENIDO
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {loginError && <Alert severity="error">{loginError}</Alert>}

              <TextField
                fullWidth
                variant='standard'
                label="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                sx={{
                  boxShadow: '2px 3px 4px #00000029',
                  '& .MuiInput-underline:before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: 'none',
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A4AFB7',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#A4AFB7',
                  },
                }}
              />

              <TextField
                fullWidth
                variant='standard'
                label="CONTRASEÑA"
                name="password"
                type='password'
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                sx={{
                  boxShadow: '2px 3px 4px #00000029',
                  '& .MuiInput-underline:before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: 'none',
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A4AFB7', // Color claro para el label
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#A4AFB7', // Color claro cuando está enfocado
                  },
                }}
              />
            </Stack>

            <Stack alignItems="flex-end" sx={{ my: 2, marginTop: 5 }}>
              <Link to="/auth/resetPassword" component={RouterLink} variant="body2" color="inherit" underline="none">
                <Typography color="#A4AFB7" letterSpacing={'0px'} fontSize={'14px'} >
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Link>
            </Stack>

            <Stack alignItems="center" justifyContent="center" sx={{ marginTop: 3, width: '100%' }}>
              <GeneralButton isSubmitting={isSubmitting} label={'INICIAR SESION'} sx={{fontWeight: 'bold', fontSize: '16px', width: '200px', height: '65px'}} />
            </Stack>

            <Box textAlign="center" mt={4}>
              <Typography variant="body2" fontSize={'14px'} color="#A4AFB7" fontFamily='OpenSans-Bold'>
                AÚN NO TENGO CUENTA{' '}
                <Link to="/auth/register" component={RouterLink} color="primary" underline="none" fontFamily='OpenSans-Bold'>
                  <span style={{ color: '#015F91', fontSize: '14px', }}>REGISTRARSE</span>
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
