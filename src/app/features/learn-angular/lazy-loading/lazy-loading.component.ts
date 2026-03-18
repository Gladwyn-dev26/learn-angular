import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-lazy-loading',
  imports: [MaterialModule],
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.scss'
})
export class LazyLoadingComponent {
routeExample = `
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  }
];
`;

featureRoutesExample = `
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];
`;

}
