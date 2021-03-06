import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(public userService: UserService) { }

  loginHendler(): void {
    this.userService.login();
  }

  logoutHendler(): void {
    this.userService.logout();
  }
}
