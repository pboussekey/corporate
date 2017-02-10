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
    timeout : any;
    onScroll(){
        const el = this._el.nativeElement;
        const rec = el.getBoundingClientRect();
        if (!this.show && rec.top <  window.innerHeight * this.ratio){
            if (this.timeout){
                clearTimeout(this.timeout);
            }
           this.timeout = setTimeout(function(){this.show = true;}.bind(this), this.delay);
        }
        else if(this.show && rec.top >  window.innerHeight * this.ratio){
            if (this.timeout){
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function(){ this.show = false; }.bind(this), this.delay);
        }
    }    
    
    ngAfterViewInit(){
        if(this.ratio === undefined){
            this.ratio = 0.8;
        }
        this.onScroll();
    }
    
    constructor(private _el:ElementRef, public renderer: Renderer) {
        this.scroll = Observable.fromEvent(window, 'scroll').debounceTime(100).subscribe((event) => {
            this.onScroll();
        });
    }   
  
    @HostBinding('class.show') get isShown() {
        return this.show;
    }
    
    private show = false;

}
