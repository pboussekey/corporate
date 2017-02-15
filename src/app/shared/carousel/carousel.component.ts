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
    public lastChange : number;
    
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    
    refreshPageShown(from : number,to : number, auto : boolean = false){
       
            this.pages.forEach(function (page: CarouselPage, index : number){
                page.shown = to === index;
                page.previous = from === index;
                page.toLeft = auto || index <= to;
                page.fromRight = auto || index > from;
            }.bind(this));
       
    }
    
    getTime(page : number){
        return this.time[page < this.time.length ? page : this.time.length - 1];
    }
    
    changePage(page : number) { 
        var now = new Date().getTime() + 1000;
        var delay = Math.max(0, (now - (this.lastChange || now)));
        if(delay > 1000){
            delay = 0;
        }
        this.lastChange = now;
        var previousPage = this.currentPage;
        this.currentPage = page;
        setTimeout(function(){
            if(this.timeout){
                clearTimeout(this.timeout);
            }
            this.refreshPageShown(previousPage, page);
            this.timeout = setTimeout(function(){
                this.autoChangePage();
            }.bind(this), this.getTime(this.currentPage));
        }.bind(this), delay );
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
        this.lastChange = new Date().getTime() + 1000;
        var nextPage = (this.currentPage + 1) % this.pages.length;
        this.refreshPageShown(this.currentPage, nextPage, true);
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
