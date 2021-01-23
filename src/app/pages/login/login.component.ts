import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserTypeEnum} from '../../types/user-type.enum';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  UserType = UserTypeEnum;

  constructor(private router: Router, private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }

  login(role: UserTypeEnum): void {
    this.authService.login(role);
    this.router.navigate(['/']);
  }
}
