import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-service',
  imports: [MaterialModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {


serviceExample = `
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return ['John', 'David', 'Sara'];
  }

}
`;

componentExample = `
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  template: '<p>Check console</p>'
})
export class UsersComponent {

  constructor(private userService: UserService) {
    const users = this.userService.getUsers();
    console.log(users);
  }

}
`
}
