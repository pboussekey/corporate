import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent implements OnInit {
    constructor(private router: Router,private angulartics2 : Angulartics2) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.angulartics2.eventTrack.next({ action: 'pageview', properties: { category: 'navigation', label : evt.url }});
            document.body.scrollTop = 0;
        });
    }
}