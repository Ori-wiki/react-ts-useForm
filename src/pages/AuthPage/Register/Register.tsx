import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form';

import './Register.css';
import {
  loginValidation,
  nameValidation,
  passwordValidation,
} from '../validation';

interface ISignInForm {
  login: string;
  password: string;
  name: string;
}

const Register = () => {
  const { handleSubmit, control } = useForm<ISignInForm>({
    mode: 'onChange',
  });
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
  };

  return (
    <div className='auth-form'>
      <Typography component='div' variant='h4'>
        Зарегистрируйтесь
      </Typography>
      <Typography
        component='div'
        variant='subtitle1'
        gutterBottom={true}
        className='auth-form__subtitle'
      >
        Чтобы получить доступ
      </Typography>
      <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='Имя'
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
          control={control}
          name='name'
          rules={nameValidation}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='Логин'
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
          control={control}
          name='login'
          rules={loginValidation}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='Пароль'
              type='password'
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
          control={control}
          name='password'
          rules={passwordValidation}
        />
        <Button
          variant='contained'
          type='submit'
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Register;
