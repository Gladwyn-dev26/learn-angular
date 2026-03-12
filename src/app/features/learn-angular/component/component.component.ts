import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  standalone: true,
  template: `<h1>TEST WORKING</h1>`,
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  constructor() {
    console.log('ComponentComponent initialized');
  }
}