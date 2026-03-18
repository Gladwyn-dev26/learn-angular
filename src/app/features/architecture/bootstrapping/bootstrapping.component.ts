import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-bootstrapping',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './bootstrapping.component.html',
  styleUrl: './bootstrapping.component.scss'
})
export class BootstrappingComponent {


  bootstrapExample = `
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
`;

  flowExample = `
Browser loads index.html
        ↓
main.ts executes
        ↓
Angular bootstraps AppComponent
        ↓
Root component created
        ↓
Application UI appears
`;

}
