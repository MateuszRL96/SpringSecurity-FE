/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap, take } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { AuthService } from '../services/auth.service';
import { selectAuthUser } from '../../auth/store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn().pipe(
      take(1),
      switchMap((resp) => {
        const isLoggedIn = resp.message;
        if (isLoggedIn) {
          return this.store.select(selectAuthUser).pipe(
            map((user) => {
              if (user && user.role === 'ADMIN') {
                return true;
              }

              return false;
            }),
          );
        }

        return of(false);
      }),
      catchError((err) => {
        return of(false);
      }),
    );
  }
}
