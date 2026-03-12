import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  constructor() { console.log('ComponentComponent initialized'); }

}
