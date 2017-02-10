import { Directive, HostBinding, ElementRef, AfterViewInit, Input, Renderer  } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Directive({
    selector: '[app-fade-in]',
    inputs : ['delay'],
})
export class FadeInDirective implements AfterViewInit {
    private scroll;
    @Input() public delay : number;
    
    onScroll(){
        const el = this._el.nativeElement;
        const rec = el.getBoundingClientRect();
        if (rec.top <  window.innerHeight * 0.75){
            this.scroll.unsubscribe();
            setTimeout(function(){this.show = true;}.bind(this), this.delay);
        }
    }    
    
    ngAfterViewInit(){
        this.onScroll();
    }
    
    constructor(private _el:ElementRef, public renderer: Renderer) {
        this.scroll = Observable.fromEvent(window, 'scroll').debounceTime(100).subscribe((event) => {
            this.onScroll();
        });
    }
   
  
    @HostBinding('class.hide') get isHide() {
        return !this.show;
    }
    @HostBinding('class.show') get isShown() {
        return this.show;
    }
    
    private show = false;

}
