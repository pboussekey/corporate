import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

const APP_ROUTES : Routes = [
    { path : '', component : HomeComponent },
    { path : 'pricing', component : PricingComponent },
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


