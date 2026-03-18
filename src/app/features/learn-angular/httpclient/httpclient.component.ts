import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-httpclient',
  imports: [MaterialModule],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.scss'
})
export class HttpclientComponent {
serviceExample = `
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://api.example.com/users');
  }

}
`;

componentExample = `
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  template: '<p>Check console for users</p>'
})

export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
    });
  }

}
`;
}
