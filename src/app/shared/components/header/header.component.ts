import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 constructor(private menuService: MenuService) {}

  selectMenu(menu: string) {
    this.menuService.setMenu(menu);
  }
}
