import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationInfo} from './models/registration-info';
import {JwtInfo} from './models/jwt-info';
import {Observable} from 'rxjs';
import {LoginInfo} from './models/login-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private registrationUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) { }

  signUp(registrationInfo: RegistrationInfo): Observable<string> {
    return this.http.post<string>(this.registrationUrl, registrationInfo, httpOptions);
  }
  login(loginInfo: LoginInfo): Observable<JwtInfo> {
    console.log(loginInfo);
    return this.http.post<JwtInfo>(this.loginUrl, loginInfo, httpOptions);
  }
}
