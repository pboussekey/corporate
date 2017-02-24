import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {  Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent implements OnInit {
    constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}