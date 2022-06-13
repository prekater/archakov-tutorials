import React from 'react';

import { useForm } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    console.log('values=', value);
    reset();
  };

  const onClear = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ mr: 2 }}>
          <TextField
            label="Имя"
            variant="standard"
            name="firstName"
            {...register('firstName', {
              required: 'Имя - обязательное поле',
            })}
            helperText={errors.firstName && errors.firstName.message}
            error={!!errors.firstName}
          />
        </Box>

        <TextField
          label="Фамилия"
          variant="standard"
          name="lastName"
          {...register('lastName', {
            required: 'Фамилия - обязательное поле',
          })}
          helperText={errors.lastName && errors.lastName.message}
          error={!!errors.lastName}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ mr: 2 }}>
          <TextField
            label="E-mail"
            variant="standard"
            name="email"
            {...register('email', {
              required: 'E-mail - обязательное поле',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                message: 'неверный формат',
              },
            })}
            helperText={errors.email && errors.email.message}
            error={!!errors.email}
          />
        </Box>

        <TextField
          label="Пароль"
          variant="standard"
          name="password"
          {...register('password', {
            required: 'Пароль - обязательное поле',
          })}
          helperText={errors.password && errors.password.message}
          error={!!errors.password}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField name="about" label="Обо мне" fullWidth variant="standard" />
      </Box>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" type="submit">
          Зарегистрироваться
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={onClear}
        >
          Очистить форму
        </Button>
      </Box>
    </form>
  );
}

export default App;
