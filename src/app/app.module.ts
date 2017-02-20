import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlanetariumComponent } from './shared/planetarium/planetarium.component';
import { CarouselComponent, CarouselPage } from './shared/carousel/carousel.component';
import {DropdownDirective } from './shared/dropdown/dropdown.directive';
import { PricingComponent } from './pricing/pricing.component';
import { H2Component } from './shared/h2/h2.component';
import { WaveComponent } from './shared/wave/wave.component';
import { AboutComponent } from './about/about.component';
import { DevicesComponent, WindowComponent } from './shared/devices/devices.component';
import { ProductComponent } from './product/product.component';
import { FadeInDirective } from './shared/fade-in/fade-in.directive';
import { FormComponent } from './form/form.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from "hammerjs"

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
        touchAction: "auto",
        recognizers: [
            [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }]
        ]
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlanetariumComponent,
    CarouselComponent,
    CarouselPage,
    DropdownDirective,
    PricingComponent,
    H2Component,
    WaveComponent,
    AboutComponent,
    DevicesComponent,
    ProductComponent,
    WindowComponent,
    FadeInDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [{ 
        provide: HAMMER_GESTURE_CONFIG, 
        useClass: MyHammerConfig 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
