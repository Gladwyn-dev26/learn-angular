import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [MaterialModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.scss'
})
export class LifecycleHooksComponent {


hooksExample = `
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<p>User Component</p>'
})

export class UserComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('Component Initialized');
  }

  ngOnDestroy() {
    console.log('Component Destroyed');
  }

}
`;

hooksList = `
ngOnChanges()   -> runs when input changes
ngOnInit()      -> runs after component initialization
ngDoCheck()     -> custom change detection
ngAfterContentInit()
ngAfterContentChecked()
ngAfterViewInit()
ngAfterViewChecked()
ngOnDestroy()   -> cleanup before component destroy
`;

}
