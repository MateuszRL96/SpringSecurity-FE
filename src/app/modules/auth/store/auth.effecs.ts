/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((user) => AuthActions.loginSuccess({ user: { ...user } })),
          catchError((err) => {
            console.log(err);
            return of(AuthActions.loginFailure({ error: 'Wystąpił błąd.' }));
          }),
        );
      }),
    ),
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) => {
        return this.authService.register(action.registerData).pipe(
          map(() => {
            this.router.navigate(['/logowanie']);
            console.log('to nie tu');
            this.notifierService.notify(
              'success',
              'Poprawnie utworzono konto użytkownika!. Aktywuj konto przez mail',
            );
            return AuthActions.registerSuccess();
          }),
          catchError((err) => {
            return of(AuthActions.loginFailure({ error: err }));
          }),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notifierService: NotifierService,
  ) {}
}
