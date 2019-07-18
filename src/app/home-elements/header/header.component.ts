import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {ExchangeService} from '../../services/exchange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthorized = false;
  userName;
  userRole;
  constructor(private token: TokenStorageService,
              private exchangeService: ExchangeService) {
    this.exchangeService.status.subscribe(status => {
      if (status) {
        this.getUserInfo();
      }
    });
  }

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    if (this.token.getToken()) {
      this.isAuthorized = true;
      this.userName = this.token.getUserName();
    }
  }
  logOut() {
    this.token.signOut();
    this.isAuthorized = false;
    this.userName = null;
    this.userRole = null;
    this.exchangeService.loginEvent();
  }
}
