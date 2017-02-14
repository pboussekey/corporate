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
        console.log(body);
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        this.http.post('mail.php', contact, {  headers : headers }).subscribe(
            data => {
                console.log(data.json());           
            }
        );
    }
    
    
}
