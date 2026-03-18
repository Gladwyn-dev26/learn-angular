import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-di',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './di.component.html',
  styleUrl: './di.component.scss'
})
export class DiComponent {

}
