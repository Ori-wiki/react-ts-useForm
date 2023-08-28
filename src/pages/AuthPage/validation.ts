const REQUIRED_FIELD = 'Обязательно для заполнения';

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские буквы';
    }
    if (value.length < 2) {
      return 'Логин должен быть длинее 2 символов';
    }

    return true;
  },
};
export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские буквы';
    }
    if (value.length < 2) {
      return 'Логин должен быть длинее 2 символов';
    }

    return true;
  },
};
export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль должен быть длинее 6-ти символов';
    }

    return true;
  },
};
