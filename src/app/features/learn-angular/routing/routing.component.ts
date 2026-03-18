import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-routing',
  imports: [MaterialModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {


routerLinkExample = `<a routerLink="/home">Home</a>`;

routerOutletExample = `<router-outlet></router-outlet>`;

routesExample = `
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
`;
}
