import { Component, OnInit } from '@angular/core';
import { Circle } from 'app/shared/planetarium/planetarium.component';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  host: {
      class:'content'
  }
})
export class ProductComponent implements OnInit{
    center : number[] = [0,375];
    circles : Circle[] = [
        { opacity: 1, radius: 80, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.9, radius: 145, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.8, radius: 210, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.7, radius: 275, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.6, radius: 350, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  }
    ];
    onResize(){
        this.center[0] =  document.querySelector('[app-root]').clientWidth / 2 ;
    }
    ngOnInit(){
       this.onResize();
    }
 
}
