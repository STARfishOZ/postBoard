import {User} from '../types/user.model';
import {UserTypeEnum} from '../types/user-type.enum';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthorizationService {

  private user: User;

  constructor() { }

  isAuthorized(): boolean {
    return !!this.user;
  }

  login(userType: UserTypeEnum): void {
    this.user = { type: userType };
  }
}
