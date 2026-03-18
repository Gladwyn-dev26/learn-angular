import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule,RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent  implements OnInit {

  selectedMenu: any;

  menu = [
    {
      name: 'Learn Angular',
      items: [
        { name: 'Angular 19 New', link: '/learn-angular/angular' },
        { name: 'Components', link: '/learn-angular/component' },
        { name: 'Directives', link: '/learn-angular/directive' },
        { name: 'Pipes', link: '/learn-angular/pipe' },
        { name: 'Reactive Form', link: '/learn-angular/reactive-form' },
        { name: 'Dependency Injection', link: '/learn-angular/di' }
      ]
    },
    {
      name: 'Architecture',
      items: [
        { name: 'Angular Architecture', link: '/architecture/angular-architecture' },
        { name: 'Bootstrapping', link: '/architecture/bootstrapping' },
        { name: 'Component Tree', link: '/architecture/component-tree' }
      ]
    }
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.selectedMenu$.subscribe(menuName => {
      this.selectedMenu = this.menu.find(m => m.name === menuName);
    });
  }
}
