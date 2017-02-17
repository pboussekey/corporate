import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
    constructor(private router: Router) {
    }
    
    isActive(url : string): boolean {
        return this.router.url === url;
    }
    
    reload(){
        location.href = location.href
    }
}
