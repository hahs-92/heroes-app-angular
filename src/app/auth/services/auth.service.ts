import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL: string = environment.baseUrl;

  private _auth: Auth | undefined;

  get auth() {
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) {}

  login() {
    return this.http.get<Auth>(`${this.BASE_URL}/users/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }

  logout() {
    this._auth = undefined;
  }

  checkAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      //return of(false); //crear observable
      return of(false); //crear observable
    }

    //return of(true);
    return this.http.get<Auth>(`${this.BASE_URL}/users/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }
}
