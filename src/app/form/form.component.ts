import { Component, trigger, style, transition, animate, state } from '@angular/core';
import { Http, Headers }from "@angular/http"
import 'rxjs/Rx';


export class Contact {   
    firstName : string; 
    lastName : string; 
    institution : string;
    email : string;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less'],
    host: {
        class:'content'
    },
    animations : [
      trigger("form", [
          state("normal", style({ opacity : 1 })),
          transition("* => void", animate(500, style({ opacity : 0 })))
      ])
    ]
})
export class FormComponent  {
    process : boolean;
    constructor(private http :Http){}
    onSubmit(contact : Contact){
        const body = JSON.stringify(contact);
        this.process = true;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        this.http.post('mail.php', contact, {  headers : headers }).subscribe(
            data => {
                console.log(data.json());           
            }
        );
    }
    
    
}
