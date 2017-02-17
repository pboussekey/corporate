import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    constructor(private router: Router) {
    }
    isActive(url : string): boolean {
        return this.router.url === url;
    }
    reload(){
        location.href = location.href
    }
}
