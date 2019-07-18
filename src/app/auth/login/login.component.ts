import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {TokenStorageService} from '../token-storage.service';
import {LoginInfo} from '../models/login-info';
import {JwtInfo} from '../models/jwt-info';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ExchangeService} from '../../services/exchange.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  username: string;
  authorities: string[] = [];
  warningMessage;
  form: FormGroup;
  private loginInfo: LoginInfo;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private exchangeService: ExchangeService) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)])
    });
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUserName();
      this.authorities = this.tokenStorage.getAutorities();
      this.isLoggedIn = true;
      this.router.navigate(['/notesHome']);
    }
  }
  login(data) {
    this.loginInfo = new LoginInfo(data.username, data.password);
    console.log(data.username, data.password);
    this.authService.login(this.loginInfo).subscribe(
      (jwtResponse: JwtInfo) => {
        this.tokenStorage.saveToken(jwtResponse.accessToken);
        this.tokenStorage.saveUserName(jwtResponse.username);
        this.tokenStorage.saveAutorities(jwtResponse.authorities);

        this.username = this.tokenStorage.getUserName();
        this.authorities = this.tokenStorage.getAutorities();
        this.isLoggedIn = true;

        this.exchangeService.loginEvent();
        this.router.navigate(['/notesHome']);
      }, error => {
        this.warningMessage = error.error.message;
        this.isLoginFailed = true;
      }
      );
  }
  reloadPage() {
    window.location.reload();
  }
  goNotesHome() {
    this.router.navigate(['notesHome']);
  }
}
