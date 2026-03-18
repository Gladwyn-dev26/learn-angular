import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-component-tree',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './component-tree.component.html',
  styleUrl: './component-tree.component.scss'
})
export class ComponentTreeComponent {
  treeExample = `
AppComponent
 ├── HeaderComponent
 ├── SidebarComponent
 └── RouterOutlet
      ├── LearnAngularComponent
      │    ├── ComponentPage
      │    ├── DirectivePage
      │    └── PipePage
      └── ArchitectureComponent
           ├── BootstrappingComponent
           └── ComponentTreeComponent
`;

  flowExample = `
Parent Component
      ↓ (@Input)
Child Component

Child Component
      ↑ (@Output)
Parent Component
`;

}
