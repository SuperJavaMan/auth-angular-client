import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private isLogged = false;
  status: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public loginEvent() {
    this.isLogged = !this.isLogged;
    this.status.emit(this.isLogged);
  }
}
