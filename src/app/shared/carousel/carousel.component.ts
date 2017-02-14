import { 
    Component, 
    Input, 
    ContentChildren, 
    QueryList, 
    AfterContentInit, 
    HostBinding,
    Directive
} from '@angular/core';

@Directive(
{
    selector: '[carousel-page]'
})
export class CarouselPage {    
    @HostBinding('class.shown') shown : boolean;
    @HostBinding('class.hide') get isHide(){
        return this.shown === false;
    };
    @HostBinding('class.previous') previous : boolean;
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
    currentPage : number = 0; 
    @Input() public time : any;
    public timeout : any;
    
    refreshPageShown(nextPage : number){
        this.pages.forEach(function (page: CarouselPage, index : number){
            page.shown = nextPage === index;
            page.previous = this.currentPage === index;
        }.bind(this));
    }
    
    getTime(page : number){
        return this.time[page < this.time.length ? page : this.time.length - 1];
    }
    
    changePage(page : number) {
        if(this.timeout){
            clearTimeout(this.timeout);
        }
        this.refreshPageShown(page);
        this.currentPage = page;
        this.timeout = setTimeout(function(){
            this.autoChangePage();
        }.bind(this), this.getTime(this.currentPage));
    }
    
    autoChangePage(){
        var nextPage = (this.currentPage + 1) % this.pages.length;
        this.refreshPageShown(nextPage);
        this.currentPage = nextPage;
        this.timeout = setTimeout(function(){
            this.autoChangePage();
        }.bind(this), this.getTime(this.currentPage));
       
    }
    
    ngAfterContentInit(){
        this.time = Array.isArray(this.time) ? this.time : (Number.isInteger(this.time) ? [this.time] : [5000]);
        this.timeout = setTimeout(function(){
            this.autoChangePage();
        }.bind(this), this.getTime(0));
    }
   
}
