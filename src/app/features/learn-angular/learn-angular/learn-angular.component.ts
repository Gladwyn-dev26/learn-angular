import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-learn-angular',
  imports: [RouterOutlet,MaterialModule],
  standalone: true,
  templateUrl: './learn-angular.component.html',
  styleUrls: ['./learn-angular.component.scss']
})
export class LearnAngularComponent {

}
