import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-ang-architecture',
  imports: [MaterialModule],
  templateUrl: './ang-architecture.component.html',
  styleUrl: './ang-architecture.component.scss'
})
export class AngArchitectureComponent {
structureExample = `
src
 └── app
      ├── core
      │    └── services
      ├── shared
      │    └── components
      ├── features
      │    ├── users
      │    ├── dashboard
      │    └── admin
      ├── app.routes.ts
      └── app.component.ts
`;

flowExample = `
User Action (click / input)
        ↓
Component
        ↓
Service
        ↓
HTTP Client
        ↓
Backend API
        ↓
Response
        ↓
Component updates UI
`;
}
