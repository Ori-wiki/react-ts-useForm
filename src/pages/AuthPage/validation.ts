const REQUIRED_FIELD = 'Обязательно для заполнения';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские буквы';
    }

    return true;
  },
};
export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль слишком короткий';
    }

    return true;
  },
};
export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 2) {
      return 'Имя слишком короткое';
    }
    if (value.length > 32) {
      return 'Имя слишком длинное';
    }
    return true;
  },
};
