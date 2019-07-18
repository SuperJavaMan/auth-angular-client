import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {RegistrationInfo} from '../models/registration-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationInfo: RegistrationInfo;
  isRegFailed = false;
  isRegSuccesful = false;
  warningMessage;
  form: FormGroup;
  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[a-zA-Z0-9]+')]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z0-9]+')]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{1,15}@[a-zA-Z0-9]{1,15}\\.[a-zA-Z]{2,5}$')]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[a-zA-Z0-9]+')])
    });
  }

  ngOnInit() {
  }
  register(data) {
    this.registrationInfo = new RegistrationInfo(data.username, data.password, data.name, data.email);
    this.authService.signUp(this.registrationInfo)
                    .subscribe((message: string) => { this.warningMessage = message;
                                                            this.isRegSuccesful = true; },
                                error => { this.warningMessage = error.error.message;
                                                  this.isRegFailed = true; });
  }
}
