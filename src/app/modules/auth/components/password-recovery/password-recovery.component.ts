import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswdRecoveryForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent {
  passwdRecoveryForm: FormGroup<PasswdRecoveryForm> =
    this.formService.initPasswdRecoveryForm();

  constructor(private formService: FormService) {}

  getErrorMessage(email: FormControl<string>) {
    return this.formService.getErrorMessage(email);
  }
}
