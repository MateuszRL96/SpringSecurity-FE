/* eslint-disable prettier/prettier */
import { FormControl } from '@angular/forms';

export interface AddCategoryForm {
  name: FormControl<string>;
}

export interface PasswdRecoveryForm {
  email: FormControl<string>;
}

export interface PasswordsForm {
  password: FormControl<string>;
  repeatedPassword: FormControl<string>;
}

export interface LoginForm {
  login: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterForm extends LoginForm {
  email: FormControl<string>;
  repeatedPassword: FormControl<string>;
}
