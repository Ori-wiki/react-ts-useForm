import React from 'react';
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginValidation, passwordValidation } from './validation';

type FormValues = {
  Login: string;
  Password: string;
};

const AuthForm = () => {
  // const { handleSubmit, control } = useForm<Inputs>();
  const { handleSubmit, control } = useForm<FormValues>({ mode: 'onChange' });
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  console.log('erros', errors);

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
          name="Login"
          rules={loginValidation}
          render={({ field }) => (
            <>
              <TextField
                label="Логин"
                size="small"
                margin="normal"
                className=""
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.Login?.message}
                helperText={errors.Login?.message ? errors.Login?.message : ' '}
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
              margin="normal"
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
    </div>
  );
};

export default AuthForm;
