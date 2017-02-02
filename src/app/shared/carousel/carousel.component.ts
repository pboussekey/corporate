import { Component, Input, ContentChildren, QueryList, Directive, AfterContentInit } from '@angular/core';

@Directive({selector: '[carousel-page]'})
export class CarouselPage {
}

@Component({
  moduleId : module.id,
  selector: '[app-carousel]',
  inputs : ['nbPages', 'currentPage', 'time'],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements AfterContentInit{
    @ContentChildren(CarouselPage) pages :  QueryList<CarouselPage>;
    @Input() public currentPage : number = 0; 
    @Input() public time : number = 5000;
    public timeout : any;
   
    changePage(page : number){
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        this.currentPage = page;
        this.timeout = setTimeout(function(){
            this.autoChangePage();
        }.bind(this), this.time);
    }
    
    autoChangePage(){
        this.currentPage = (this.currentPage + 1) % this.pages.length;
        this.timeout = setTimeout(function(){
            this.autoChangePage();
        }.bind(this), this.time);
    }
    
    ngAfterContentInit(){
        this.timeout = setTimeout(function(){
            this.autoChangePage();
        }.bind(this), this.time);
    }
   
}
