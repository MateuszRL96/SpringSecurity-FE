import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { PasswdRecoveryForm } from 'src/app/modules/core/models/forms.model';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent {
  passwdRecoveryForm: FormGroup<PasswdRecoveryForm> =
    this.formService.initPasswdRecoveryForm();

  errorMessage: null | string = null;

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private notifierService: NotifierService,
  ) {}

  getErrorMessage(email: FormControl<string>) {
    return this.formService.getErrorMessage(email);
  }

  onPasswdRecovery() {
    this.authService
      .resetPassword(this.passwdRecoveryForm.getRawValue())
      .subscribe({
        next: () => {
          this.notifierService.notify(
            'success',
            'Jeśli podano prawidłowego e-maila to została wysłana na niego wiadomość.',
          );
        },
        error: (err) => {
          this.errorMessage = err;
          console.log('blad tutaj');
        },
      });
  }
}
