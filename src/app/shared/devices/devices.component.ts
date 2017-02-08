import { Component,Input } from '@angular/core';

@Component(
{
    selector: '[app-window]',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.less'],
    inputs : ['delay'],
})
export class WindowComponent {  
    @Input() public delay : number;  
    constructor(){
        this.delay = this.delay === null ? 0 : this.delay;
    }
   
}


@Component({
  selector: '[app-devices]',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less']
})
export class DevicesComponent{
}
