import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import {Location} from '@angular/common';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent extends Angulartics2 {
    constructor(location : Location, router: Router) {
        super(location, router);
    }

}