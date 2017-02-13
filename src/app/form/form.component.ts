import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response }from "@angular/http"
import 'rxjs/Rx';


export class Contact {    
    institution : string;
    email : string;
    password : string;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less'],
    host: {
        class:'content'
    }
})
export class FormComponent  {
    
    constructor(private http :Http){}
    onSubmit(contact : Contact){
        const body = JSON.stringify(contact);
        const headers = new Headers({'Content-type' : 'application/json'});
        this.http.get('assets/mail.php?institution=' + contact.institution + "&email=" + contact.email + "&password=" + contact.password).subscribe(
            data => {
                console.log(data.json());           
            }
        );
    }
    
    
}
