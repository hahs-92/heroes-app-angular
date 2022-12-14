import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //return this.authService.auth.id ? true : false;
    return this.authService.checkAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  //este gurdian solo previene que se cargue el modulo
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    //return this.authService.auth.id ? true : false;
    return this.authService.checkAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
}
