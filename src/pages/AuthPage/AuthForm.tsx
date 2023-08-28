import React from 'react';
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { emailValidation, passwordValidation } from './validation';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

type FormValues = {
  Email: string;
  Password: string;
};

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<FormValues>({ mode: 'onChange' });
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="w-1/2 h-screen bg-white p-5 flex flex-col justify-center items-center">
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom={true} className="text-zinc-700">
        Чтобы получить доступ
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
        <Controller
          control={control}
          name="Email"
          rules={emailValidation}
          render={({ field }) => (
            <>
              <TextField
                label="Email"
                type="email"
                size="small"
                margin="normal"
                className=""
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.Email?.message}
                helperText={errors.Email?.message ? errors.Email?.message : ' '}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="Password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              type="password"
              size="small"
              className=""
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.Password?.message}
              helperText={errors.Password?.message ? errors.Password?.message : ' '}
            />
          )}
        />
        <Button type="submit" variant="contained" fullWidth={true} sx={{ marginTop: 2 }}>
          Войти
        </Button>
      </form>
      <Link to="/auth/register">Register</Link>
    </div>
  );
};

export default AuthForm;
