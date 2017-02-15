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
    @HostBinding('class.from-right') fromRight : boolean;
    @HostBinding('class.to-left') toLeft : boolean;
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
    
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    
    refreshPageShown(nextPage : number, auto : boolean = false){
        this.pages.forEach(function (page: CarouselPage, index : number){
            page.shown = nextPage === index;
            page.previous = this.currentPage === index;
            page.toLeft = auto || index < nextPage;
            page.fromRight = auto || index > this.currentPage;
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
    
    swipe(action: string = this.SWIPE_ACTION.RIGHT) {
        
        var nextPage;
        
        if (action === this.SWIPE_ACTION.RIGHT) {
            nextPage = (this.currentPage - 1) % this.pages.length;
        }

        if (action === this.SWIPE_ACTION.LEFT) {
            nextPage = (this.currentPage + 1) % this.pages.length;
        }

        this.changePage(nextPage);
    }
    
    autoChangePage(){
        var nextPage = (this.currentPage + 1) % this.pages.length;
        this.refreshPageShown(nextPage, true);
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
