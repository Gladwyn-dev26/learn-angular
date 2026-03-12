import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe',
  imports: [MaterialModule,CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  username = 'gladwyn';
  today = new Date();
  price = 1200;
  name = 'angular developer';
}
