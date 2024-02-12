import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { PasswordsForm } from 'src/app/modules/core/models/forms.model';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-password-recovery-form',
  templateUrl: './password-recovery-form.component.html',
  styleUrls: ['./password-recovery-form.component.scss'],
})
export class PasswordRecoveryFormComponent implements OnInit {
  passwordsForm: FormGroup<PasswordsForm> =
    this.formService.initPasswordsForm();

  uid = '';
  errorMessage: null | string = null;

  get controls(): PasswordsForm {
    return this.passwordsForm.controls;
  }

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notifierService: NotifierService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        this.uid = param.get('uid') as string;
      },
    });
  }

  getErrorMessage(control: FormControl<string>): string {
    return this.formService.getErrorMessage(control);
  }
  onPasswdChange() {
    const { password } = this.passwordsForm.getRawValue();

    this.authService.changePassword({ password, uid: this.uid }).subscribe({
      next: () => {
        this.router.navigate(['/logowanie']);
        this.notifierService.notify(
          'success',
          'Poprawnie zmieniono hasło, możesz się zalogować.',
        );
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
