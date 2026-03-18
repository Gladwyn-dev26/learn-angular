import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule, MaterialModule,RouterOutlet],
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent {


}
