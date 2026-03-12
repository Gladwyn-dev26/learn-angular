
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnAngularRoutingModule } from './learn-angular-routing.module';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LearnAngularRoutingModule,
    LearnAngularComponent
  ]
})
export class LearnAngularModule { }
