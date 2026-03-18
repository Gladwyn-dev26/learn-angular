import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private selectedMenu = new BehaviorSubject<string>('Learn Angular');

  selectedMenu$ = this.selectedMenu.asObservable();

  setMenu(menu: string) {
    this.selectedMenu.next(menu);
  }

}