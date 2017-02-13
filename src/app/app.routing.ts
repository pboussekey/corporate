import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';

const APP_ROUTES : Routes = [
    { path : '', component : HomeComponent },
    { path : 'product', component : ProductComponent },
    { path : 'pricing', component : PricingComponent },
    { path : 'about', component : AboutComponent },
    { path : 'contact-us', component : FormComponent }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


