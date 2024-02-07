import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm> = this.formService.initLoginForm();

  get controls() {
    return this.loginForm.controls;
  }

  constructor(private formService: FormService) {}

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }
}
