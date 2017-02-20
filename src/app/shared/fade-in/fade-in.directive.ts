import { Directive, HostBinding, ElementRef, AfterViewInit, Input, Renderer  } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Directive({
    selector: '[app-fade-in]',
    inputs : ['delay', 'ratio'],
})
export class FadeInDirective implements AfterViewInit {
    private scroll;
    @Input() public delay : number;
    @Input() public ratio : number;
    
    onScroll(first : boolean){
        const el = this._el.nativeElement;
        const rec = el.getBoundingClientRect();
        if (!this.show && rec.top <  window.innerHeight * this.ratio){
            this.scroll.unsubscribe();
            setTimeout(function(){this.show = true;}.bind(this), first ? this.delay : 0);
        }
       
    }    
    
    ngAfterViewInit(){
        if(this.ratio === undefined){
            this.ratio = 0.9;
        }
        this.onScroll(true);
    }
    
    constructor(private _el:ElementRef, public renderer: Renderer) {
        this.scroll = Observable.fromEvent(window, 'scroll').debounceTime(100).subscribe((event) => {
            this.onScroll(false);
        });
    }   
  
    @HostBinding('class.show') get isShown() {
        return this.show;
    }
    
    private show = false;

}
