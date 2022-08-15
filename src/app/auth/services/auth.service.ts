import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login() {
    return this.http.get<Auth>(`${this.BASE_URL}/users/1`);
  }
}
