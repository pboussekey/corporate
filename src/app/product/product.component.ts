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
    height : number = 800;
    timeout : any;
    productIndex : number = 0;
    circles : Circle[];
    circles_large : Circle[] = [
        { opacity: 0.9, radius: 80, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.8, radius: 145, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.7, radius: 210, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.6, radius: 275, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.5, radius: 350, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  }
    ];
    circles_small : Circle[] = [
        { opacity: 0.9, radius: 50, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.8, radius: 100, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.7, radius: 150, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.6, radius: 200, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  },
        { opacity: 0.5, radius: 240, shadow : "-5px 5px 40px 0px rgba(0,0,0,0.06)"  }
    ];
    onResize(){
        var width = document.querySelector('[app-root]').clientWidth;
        this.circles = width >= 1023 ? this.circles_large : this.circles_small;
        this.height = width >= 1023 ? 800 : 600;
        this.center =  [width / 2, this.height / 2];
    }
    changeProductNumber(index : number){
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        this.productIndex =  index >= 0 ? index : (this.productIndex + 1) % 4;
        this.timeout = setTimeout(this.changeProductNumber.bind(this), 1000000);
    }
    ngOnInit(){
        this.onResize();
        this.timeout = setTimeout(this.changeProductNumber.bind(this), 1000000);
    }
}
