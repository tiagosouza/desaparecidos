import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent {
  isBack: boolean = false;
  title:string[] = ["DESAPARECIDOS","Voltar"]
  index:number = 0;

  constructor(private _router: Router, private _location: Location) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes('/detalhes/')) {
          this.isBack = true;
          this.index=1
        } else {
          this.isBack = false;
          this.index=0
        }
      }
    });
  }

  back() {
    this._location.back();
  }
}
