webpackJsonp([0,3],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-about]',
            template: __webpack_require__(690),
            styles: [__webpack_require__(676)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/about.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.partners = [
            "assets/images/gnamlogo.jpeg",
            "assets/images/haas.png",
            "assets/images/HEC.jpg",
            "assets/images/LSE.jpg",
            "assets/images/HKUST.jpg",
            "assets/images/Yale_som.png",
            "assets/images/INSEAD Logo.png",
            "assets/images/Oxford.gif",
            "assets/images/NUS.jpg",
            "assets/images/IE.png",
            "assets/images/IMD.png",
            "assets/images/EGADE.jpeg",
            "assets/images/IIM Bangalore - logo.jpeg",
            "assets/images/ESMT.png",
            "assets/images/FGV.png",
            "assets/images/ICS.png",
            "assets/images/UBC_Sauder.jpg",
            "assets/images/GSB.png",
            "assets/images/INCAE.jpg",
            "assets/images/UCD.jpg",
            "assets/images/SNU.gif",
            "assets/images/Renmin.png",
            "assets/images/AIM.jpg",
            "assets/images/Pontificia.jpg",
            "assets/images/Koc.jpg",
            "assets/images/fudan logo.png",
            "assets/images/Lagos BS.png",
            "assets/images/UGBS.jpg",
            "assets/images/Technion_logo.jpg",
            "assets/images/Indonesia logo.png",
        ];
        this.circles = [
            { opacity: 0.8, radius: 120, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.7, radius: 180, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.6, radius: 240, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.4, radius: 310, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.3, radius: 400, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" }
        ];
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.getPartners();
    };
    HomeComponent.prototype.onResize = function () {
        this.getPartners();
    };
    HomeComponent.prototype.getPartners = function () {
        var width = document.querySelector('[app-root]').clientWidth;
        var pageSize = width > 1024 ? 10 : (width > 768 ? 6 : 4);
        var partners = JSON.parse(JSON.stringify(this.partners));
        this.pages = [];
        while (partners.length) {
            this.pages.push(partners.splice(0, pageSize));
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-home]',
            template: __webpack_require__(693),
            styles: [__webpack_require__(679)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/home.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-pricing]',
            template: __webpack_require__(694),
            styles: [__webpack_require__(680)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], PricingComponent);
    return PricingComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/pricing.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
        this.center = [0, 375];
        this.height = 800;
        this.productIndex = 0;
        this.circles_large = [
            { opacity: 0.9, radius: 80, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.8, radius: 145, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.7, radius: 210, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.6, radius: 275, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.5, radius: 350, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" }
        ];
        this.circles_small = [
            { opacity: 0.9, radius: 50, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.8, radius: 100, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.7, radius: 150, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.6, radius: 200, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.5, radius: 240, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" }
        ];
    }
    ProductComponent.prototype.onResize = function () {
        var width = document.querySelector('[app-root]').clientWidth;
        this.circles = width >= 1023 ? this.circles_large : this.circles_small;
        this.height = width >= 1023 ? 800 : 600;
        this.center = [width / 2, this.height / 2];
    };
    ProductComponent.prototype.changeProductNumber = function (index) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.productIndex = index >= 0 ? index : (this.productIndex + 1) % 4;
        this.timeout = setTimeout(this.changeProductNumber.bind(this), 10000);
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.onResize();
        this.timeout = setTimeout(this.changeProductNumber.bind(this), 10000);
    };
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-product]',
            template: __webpack_require__(695),
            styles: [__webpack_require__(681)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/product.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(511);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-root]',
            template: __webpack_require__(691),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_planetarium_planetarium_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_carousel_carousel_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_dropdown_dropdown_directive__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pricing_pricing_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_h2_h2_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_wave_wave_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_devices_devices_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_product_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_fade_in_fade_in_directive__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_form_component__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_planetarium_planetarium_component__["a" /* PlanetariumComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_carousel_carousel_component__["b" /* CarouselPage */],
                __WEBPACK_IMPORTED_MODULE_11__shared_dropdown_dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_12__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_h2_h2_component__["a" /* H2Component */],
                __WEBPACK_IMPORTED_MODULE_14__shared_wave_wave_component__["a" /* WaveComponent */],
                __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_devices_devices_component__["b" /* WindowComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_fade_in_fade_in_directive__["a" /* FadeInDirective */],
                __WEBPACK_IMPORTED_MODULE_19__form_form_component__["a" /* FormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pricing_pricing_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });





var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_2__pricing_pricing_component__["a" /* PricingComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.routing.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__(692),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/form.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CarouselPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselPage = (function () {
    function CarouselPage() {
    }
    Object.defineProperty(CarouselPage.prototype, "isHide", {
        get: function () {
            return this.shown === false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('class.shown'), 
        __metadata('design:type', Boolean)
    ], CarouselPage.prototype, "shown", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('class.hide'), 
        __metadata('design:type', Object)
    ], CarouselPage.prototype, "isHide", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('class.previous'), 
        __metadata('design:type', Boolean)
    ], CarouselPage.prototype, "previous", void 0);
    CarouselPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({
            selector: '[carousel-page]'
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselPage);
    return CarouselPage;
}());
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.currentPage = 0;
    }
    CarouselComponent.prototype.refreshPageShown = function (nextPage) {
        this.pages.forEach(function (page, index) {
            page.shown = nextPage === index;
            page.previous = this.currentPage === index;
        }.bind(this));
    };
    CarouselComponent.prototype.changePage = function (page) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.refreshPageShown(page);
        this.currentPage = page;
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.time);
    };
    CarouselComponent.prototype.autoChangePage = function () {
        var nextPage = (this.currentPage + 1) % this.pages.length;
        this.refreshPageShown(nextPage);
        this.currentPage = nextPage;
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.time);
    };
    CarouselComponent.prototype.ngAfterContentInit = function () {
        this.time = this.time || 5000;
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.time);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ContentChildren */])(CarouselPage), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* QueryList */]) === 'function' && _a) || Object)
    ], CarouselComponent.prototype, "pages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], CarouselComponent.prototype, "time", void 0);
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-carousel]',
            inputs: ['nbPages', 'currentPage', 'time'],
            template: __webpack_require__(696),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/carousel.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowComponent = (function () {
    function WindowComponent() {
        this.delay = this.delay === null ? 0 : this.delay;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], WindowComponent.prototype, "delay", void 0);
    WindowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-window]',
            template: __webpack_require__(698),
            styles: [__webpack_require__(684)],
            inputs: ['delay'],
        }), 
        __metadata('design:paramtypes', [])
    ], WindowComponent);
    return WindowComponent;
}());
var DevicesComponent = (function () {
    function DevicesComponent() {
    }
    DevicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-devices]',
            template: __webpack_require__(697),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], DevicesComponent);
    return DevicesComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/devices.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('class.open'), 
        __metadata('design:type', Object)
    ], DropdownDirective.prototype, "opened", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "close", null);
    DropdownDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({
            selector: '[app-dropdown]',
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownDirective);
    return DropdownDirective;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/dropdown.directive.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeInDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FadeInDirective = (function () {
    function FadeInDirective(_el, renderer) {
        var _this = this;
        this._el = _el;
        this.renderer = renderer;
        this.show = false;
        this.scroll = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'scroll').debounceTime(100).subscribe(function (event) {
            _this.onScroll();
        });
    }
    FadeInDirective.prototype.onScroll = function () {
        var el = this._el.nativeElement;
        var rec = el.getBoundingClientRect();
        if (!this.show && rec.top < window.innerHeight * this.ratio) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function () { this.show = true; }.bind(this), this.delay);
        }
        else if (this.show && rec.top > window.innerHeight * this.ratio) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function () { this.show = false; }.bind(this), this.delay);
        }
    };
    FadeInDirective.prototype.ngAfterViewInit = function () {
        if (this.ratio === undefined) {
            this.ratio = 0.8;
        }
        this.onScroll();
    };
    Object.defineProperty(FadeInDirective.prototype, "isShown", {
        get: function () {
            return this.show;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], FadeInDirective.prototype, "delay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], FadeInDirective.prototype, "ratio", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('class.show'), 
        __metadata('design:type', Object)
    ], FadeInDirective.prototype, "isShown", null);
    FadeInDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({
            selector: '[app-fade-in]',
            inputs: ['delay', 'ratio'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Renderer */]) === 'function' && _b) || Object])
    ], FadeInDirective);
    return FadeInDirective;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/fade-in.directive.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-footer]',
            template: __webpack_require__(699),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/footer.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var H2Component = (function () {
    function H2Component() {
    }
    H2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-h2]',
            template: __webpack_require__(700),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], H2Component);
    return H2Component;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/h2.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-header]',
            template: __webpack_require__(701),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/header.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Circle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetariumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Circle = (function () {
    function Circle() {
    }
    return Circle;
}());
var PlanetariumComponent = (function () {
    function PlanetariumComponent() {
        this.particles = [];
    }
    PlanetariumComponent.prototype.top = function () {
        return [Math.floor(this.size[0] * Math.random()), -100];
    };
    PlanetariumComponent.prototype.right = function () {
        return [-100, Math.floor(this.size[1] * Math.random())];
    };
    PlanetariumComponent.prototype.bottom = function () {
        return [Math.floor(2000 * Math.random()), this.size[1] + 100];
    };
    PlanetariumComponent.prototype.left = function () {
        return [this.size[0] + 100, Math.floor(this.size[1] * Math.random())];
    };
    PlanetariumComponent.prototype.orbit = function () {
        var radius = this.radius[Math.floor(Math.random() * this.radius.length)];
        return [radius, 0];
    };
    PlanetariumComponent.prototype.distance = function (a, b) {
        return Math.round(Math.sqrt(Math.pow(b[0] - b[1], 2) + Math.pow(a[0] - a[1], 2)));
    };
    PlanetariumComponent.prototype.destroyParticle = function (particle) {
        this.particles.splice(this.particles.indexOf(particle), 1);
        this.particles.push(this.generateParticle(0));
    };
    PlanetariumComponent.prototype.onResize = function () {
        if (this.autoResize) {
            this.size[0] = document.querySelector('[app-root]').clientWidth;
        }
    };
    PlanetariumComponent.prototype.generateParticle = function (delay) {
        delay = delay || 0;
        var keys = Object.keys(this.positions);
        var source = keys.filter(function (p) { return p !== "orbit"; })[Math.floor(Math.random() * (keys.length - 1))];
        var destination = keys.filter(function (p) { return p !== source; })[Math.floor(Math.random() * (keys.length - 1))];
        var rotation = Math.floor((Math.random() - 0.5) * 40);
        var size = Math.floor(Math.random() * 6 + 10);
        size -= size % 2;
        var borderWidth = Math.min(16 - size, size / 2, Math.floor(Math.random() * 6 + 1));
        var particle = {
            orbit: destination === "orbit",
            source: this.positions[source](),
            destination: this.positions[destination](),
            color: Math.random() > 0.5 ? "blue" : "gray",
            opacity: Math.random() * 0.75 + 0.2,
            width: size,
            borderWidth: [borderWidth, 0, 0],
            duration: Math.floor(Math.random() * 5000 + 20000),
            rotation: 0,
            delay: delay
        };
        setTimeout(function () {
            particle.source[0] = particle.destination[0];
            particle.source[1] = particle.destination[1];
            particle.rotation = rotation;
        }, particle.delay);
        if (!particle.orbit) {
            setTimeout(function () {
                this.destroyParticle(particle);
            }.bind(this), particle.delay + particle.duration - 500);
        }
        else {
            setTimeout(function () {
                particle.rotation = particle.rotation + (particle.rotation < 0 ? -1 : 1) * 720;
                particle.duration *= 2;
                particle.width *= 1.5;
                particle.borderWidth[1] = particle.width * 0.5 * Math.random();
                particle.borderWidth[2] = (particle.width - particle.borderWidth[1] * 2) * (0.3 * Math.random() + 0.2);
                particle.borderWidth[0] = 1;
                setTimeout(function () {
                    this.destroyParticle(particle);
                }.bind(this), particle.duration - 500);
            }.bind(this), particle.delay + particle.duration);
        }
        return particle;
    };
    PlanetariumComponent.prototype.ngAfterViewInit = function () {
        this.autoResize = !this.size[0];
        this.size[0] |= document.querySelector('[app-root]').clientWidth;
        this.radius = this.circles.map(function (circle) { return circle.radius; });
        this.positions = {
            top: this.top.bind(this),
            right: this.right.bind(this),
            bottom: this.bottom.bind(this),
            left: this.left.bind(this),
            orbit: this.orbit.bind(this)
        };
        for (var i = 0; i < this.nbParticles; i++) {
            this.particles.push(this.generateParticle(Math.random() * 4000 + 1000));
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Array)
    ], PlanetariumComponent.prototype, "circles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], PlanetariumComponent.prototype, "nbParticles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Array)
    ], PlanetariumComponent.prototype, "center", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Array)
    ], PlanetariumComponent.prototype, "size", void 0);
    PlanetariumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            inputs: ['circles', 'center', 'size', 'nbParticles'],
            selector: '[app-planetarium]',
            template: __webpack_require__(702),
            styles: [__webpack_require__(688)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])("particle", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("normal", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ width: 0, height: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])(500)]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("* => void", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: 0 })))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PlanetariumComponent);
    return PlanetariumComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/planetarium.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaveComponent = (function () {
    function WaveComponent() {
    }
    WaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-wave]',
            template: __webpack_require__(703),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], WaveComponent);
    return WaveComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/wave.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/environment.prod.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/var/www/html/corpowebsite/src/src/polyfills.js.map

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@media (max-width: 1023px) {\n  :host {\n    padding: 0 1rem;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1500ms;\n          animation-delay: 1500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n#first-paragraph {\n  margin-top: 22rem;\n}\n#first-paragraph p {\n  margin: 3rem 0;\n}\n@media (max-width: 1023px) {\n  #first-paragraph {\n    margin-top: 14rem;\n  }\n}\n@media (max-width: 479px) {\n  #first-paragraph {\n    margin-top: 8rem;\n  }\n}\n#adress {\n  font-size: 1.6rem;\n}\n#adress .twic-logo {\n  margin-top: 4rem;\n}\n#adress .by {\n  margin: 2rem 0;\n  font-weight: 300;\n  line-height: 3.2rem;\n}\n#adress div:not(.by) {\n  line-height: 2.6rem;\n}\n#adress .studnet-logo {\n  margin-bottom: 0.5rem;\n}\n#adress .monaco-logo {\n  margin: 3rem 0 0;\n}\n#adress .monaco-sentence {\n  margin-bottom: 12rem;\n  font-weight: 300;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n#monaco-background {\n  position: absolute;\n  bottom: 32rem;\n  left: 0;\n  right: 0;\n  height: 60rem;\n  background-image: url(\"assets/images/monaco-ville.jpg\");\n  background-position: 50% 0%;\n  background-size: cover;\n  width: 100%;\n  z-index: -2;\n}\n@media (max-width: 1023px) {\n  #monaco-background {\n    bottom: 22rem;\n  }\n}\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n}\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes circle {\n  0% {\n    opacity: 0;\n    margin-right: -40rem;\n    margin-top: -40rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n  }\n}\n@keyframes circle {\n  0% {\n    opacity: 0;\n    margin-right: -40rem;\n    margin-top: -40rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n  }\n}\n:host /deep/ [app-planetarium] > #animation-layout {\n  background-image: -webkit-radial-gradient(circle farthest-side at 100% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 350px, rgba(255, 255, 255, 0.2) 450px, rgba(255, 255, 255, 0.4) 95%, #ffffff 100%);\n  background-image: radial-gradient(circle farthest-side at 100% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 350px, rgba(255, 255, 255, 0.2) 450px, rgba(255, 255, 255, 0.4) 95%, #ffffff 100%);\n}\n[app-planetarium] {\n  top: -4rem;\n  right: 0;\n  left: 0;\n  height: 85rem;\n}\n[app-planetarium] /deep/ .circle {\n  margin-right: -40rem;\n  margin-top: -40rem;\n  -webkit-animation: circle 2s 500ms forwards;\n          animation: circle 2s 500ms forwards;\n}\np {\n  text-align: center;\n  display: block;\n  width: 100%;\n  max-width: 80rem;\n  margin-bottom: 5rem;\n  color: #3C3F48;\n}\n@media (max-width: 1023px) {\n  p {\n    margin-top: 0rem;\n    margin-bottom: 3.3rem;\n  }\n}\n.citation-block {\n  margin-top: 15rem;\n  margin-bottom: 15rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  .citation-block {\n    display: block;\n    margin-top: 8.5rem;\n    margin-bottom: 6.5rem;\n  }\n}\n.citation-block .portrait {\n  background-image: url(\"assets/images/maxresdefault.jpg\");\n  background-position: 80% 50%;\n  background-size: cover;\n  height: 55rem;\n  width: 55rem;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  z-index: 1;\n}\n@media (max-width: 1023px) {\n  .citation-block .portrait {\n    height: 24rem;\n    width: 40%;\n    position: absolute;\n    left: 30%;\n    background-position: 70% 50%;\n  }\n}\n.citation-block .citation {\n  margin-top: 6rem;\n  position: relative;\n  background: -webkit-linear-gradient(246.63deg, #EEEEEE 0%, #FFFFFF 60%);\n  background: linear-gradient(203.37deg, #EEEEEE 0%, #FFFFFF 60%);\n  padding: 8rem 2rem 2rem 6rem;\n  border-radius: 4px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3C3F48;\n}\n@media (max-width: 1023px) {\n  .citation-block .citation {\n    padding: 24rem 2rem 0;\n  }\n}\n.citation-block .citation p {\n  font-size: 1.8rem;\n  line-height: 3.4rem;\n  font-weight: 300;\n  text-align: left;\n  position: relative;\n  margin: 2rem 0 1rem;\n}\n@media (max-width: 1023px) {\n  .citation-block .citation p {\n    text-align: center;\n  }\n}\n.citation-block .citation-content {\n  font-size: 4.6rem;\n  font-weight: 300;\n  line-height: 6rem;\n  text-align: left;\n  letter-spacing: 0.5rem;\n}\n@media (max-width: 1023px) {\n  .citation-block .citation-content {\n    text-align: center;\n  }\n}\n@media (max-width: 479px) {\n  .citation-block .citation-content {\n    font-size: 2.6rem;\n    line-height: 3rem;\n  }\n}\n.poets {\n  display: inline-block;\n  height: 3.5rem;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\n.quote {\n  font-family: Merriweather;\n  font-size: 80px;\n  font-weight: 900;\n  line-height: 101px;\n  opacity: 0.5;\n  position: absolute;\n  left: 3rem;\n  top: -3rem;\n}\n@media (max-width: 1023px) {\n  .quote {\n    left: calc(70% + 4rem);\n  }\n}\n@media (max-width: 479px) {\n  .quote {\n    left: calc(70% + 1rem);\n  }\n}\n:host /deep/ .schools {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n:host /deep/ .schools .school {\n  width: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin: 4rem auto;\n}\n@media (max-width: 1023px) {\n  :host /deep/ .schools .school {\n    width: 33%;\n  }\n}\n@media (max-width: 768px) {\n  :host /deep/ .schools .school {\n    width: 50%;\n  }\n}\n:host /deep/ .schools .school img {\n  height: 6rem;\n  margin: 0 auto;\n  max-width: 100%;\n  opacity: 0.55;\n}\n@media (max-width: 479px) {\n  :host /deep/ .schools .school img {\n    height: 4rem;\n  }\n}\n:host /deep/ .carousel-pagination {\n  margin: 7.5rem auto 13rem auto !important;\n}\n@media (max-width: 1023px) {\n  :host /deep/ .carousel-pagination {\n    margin: 7.5rem auto !important;\n  }\n}\n@media (max-width: 479px) {\n  :host /deep/ .carousel-pagination {\n    margin: 0rem auto !important 7.5rem;\n  }\n}\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1500ms;\n          animation-delay: 1500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n#choose-you-plan {\n  padding-top: 13rem;\n}\n@media (max-width: 479px) {\n  #choose-you-plan {\n    margin: 0;\n  }\n}\n.table-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 1rem auto;\n}\n.table .column {\n  width: 30rem;\n  height: 34rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-shadow: 0 1px 12px 0 rgba(222, 222, 222, 0.5);\n  color: #3C3F48;\n  border-radius: 0 2px 2px 0;\n}\n@media (max-width: 1023px) {\n  .table .column {\n    width: 50%;\n  }\n  .table .column .lines {\n    padding: 0 0.5rem;\n  }\n}\n@media (max-width: 479px) {\n  .table .column {\n    height: auto;\n  }\n}\n.table .column .title {\n  font-size: 1.8rem;\n  line-height: 2.6rem;\n  margin: 3rem 0;\n  font-weight: bold;\n}\n.table .column.white {\n  border: 1px solid #DEDEDE;\n}\n.table .column.white:first-of-type {\n  border-right: none;\n  border-radius: 2px 0 0 2px;\n}\n.table .column.gray {\n  margin-top: 1.5rem;\n  height: 32rem;\n  background: #3C3F48;\n  color: #FFF;\n}\n.table .column.gray .title {\n  margin: 1.5rem 0 3rem;\n}\n.table .column.gray .price {\n  background: #313339;\n}\n.table .column.gray .price .title {\n  height: 10rem;\n  margin: 0;\n  line-height: 10rem;\n}\n@media (max-width: 1023px) {\n  .table .column.gray {\n    box-shadow: inset 0px 8px 5px 0px rgba(217, 217, 217, 0.15);\n    width: 100%;\n    margin-top: 0;\n  }\n  .table .column.gray .title {\n    margin: 2.25rem 0;\n  }\n}\n.table .column .price {\n  height: 10rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #F6F8F8;\n}\n.table .column .price .euro {\n  width: 1.5rem;\n  height: 2.6rem;\n  font-size: 2.6rem;\n  font-weight: bold;\n  line-height: 2.6rem;\n  margin-top: 3rem;\n}\n.table .column .price .number {\n  font-size: 5rem;\n  font-weight: bold;\n  line-height: 10rem;\n  text-align: center;\n}\n.table .column .price .k {\n  width: 1.5rem;\n  height: 2.6rem;\n  font-size: 2.6rem;\n  line-height: 2.6rem;\n  margin-top: 4.4rem;\n  font-weight: 300;\n}\n.table .column .price .title {\n  margin: auto 0;\n}\n.table .column .lines {\n  margin: auto 0;\n}\n.table .column .lines .line {\n  font-size: 1.6rem;\n  font-weight: 300;\n  text-align: center;\n  line-height: 4rem;\n}\n#our-pricing {\n  margin-bottom: 7rem;\n  font-weight: 300;\n  font-size: 1.6rem;\n}\n@media (max-width: 479px) {\n  #our-pricing {\n    margin-bottom: 4rem;\n  }\n}\n#try-our-product {\n  height: 13rem;\n  border-radius: 4px;\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 2.4rem;\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 4rem;\n  margin-bottom: 8rem;\n  width: 100%;\n  background-image: url(\"assets/images/try-our-product.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (max-width: 1023px) {\n  #try-our-product {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center;\n    padding: 4rem 2rem;\n    height: 21rem;\n    line-height: 2.6rem;\n  }\n}\n@media (max-width: 479px) {\n  #try-our-product {\n    margin-bottom: 0;\n    height: 23rem;\n  }\n}\n#try-our-product p {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: auto 0;\n  color: #FFF;\n}\n#try-our-product button {\n  margin: auto 0;\n  font-size: 1.4rem;\n  padding: 0 5rem;\n}\n#features {\n  margin-bottom: 6rem;\n}\n#features /deep/ h2 {\n  margin: 0 !important;\n}\n#features li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  list-style: none;\n  padding: 0 2.6rem;\n}\n@media (max-width: 479px) {\n  #features li {\n    padding: 0;\n  }\n}\n#features li ul {\n  width: calc(33% - 4rem);\n  margin: 0 2rem;\n  padding: 0;\n  text-align: left;\n  font-size: 1.6rem;\n  font-weight: bold;\n  line-height: 2.4rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 1023px) {\n  #features li ul {\n    text-align: center;\n    width: calc(50% - 4rem);\n  }\n}\n@media (max-width: 479px) {\n  #features li ul {\n    width: calc(50% - 1rem);\n    margin: 0 0.5rem 4rem;\n  }\n}\n#features li .icon {\n  margin-right: 1rem;\n  border-radius: 50%;\n  background: #3C3F48;\n  color: #FFF;\n  font-size: 0.8rem;\n  height: 1.6rem;\n  line-height: 1.6rem;\n  width: 1.6rem;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n}\n@media (max-width: 1023px) {\n  #features li .icon {\n    display: block;\n    margin: 0 auto 1rem;\n  }\n}\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 2rem;\n    margin-top: 2rem;\n    height: 12rem;\n    width: 12rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 16rem;\n    width: 16rem;\n  }\n}\n@keyframes circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 2rem;\n    margin-top: 2rem;\n    height: 12rem;\n    width: 12rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 16rem;\n    width: 16rem;\n  }\n}\n@-webkit-keyframes small-circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 1.5rem;\n    margin-top: 1.5rem;\n    height: 7rem;\n    width: 7rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 10rem;\n    width: 10rem;\n  }\n}\n@keyframes small-circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 1.5rem;\n    margin-top: 1.5rem;\n    height: 7rem;\n    width: 7rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 10rem;\n    width: 10rem;\n  }\n}\n@-webkit-keyframes circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3.5rem;\n    margin-top: 3.5rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 29rem;\n    width: 29rem;\n  }\n}\n@keyframes circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3.5rem;\n    margin-top: 3.5rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 29rem;\n    width: 29rem;\n  }\n}\n@-webkit-keyframes small-circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3rem;\n    margin-top: 3rem;\n    height: 14rem;\n    width: 14rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 20rem;\n    width: 20rem;\n  }\n}\n@keyframes small-circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3rem;\n    margin-top: 3rem;\n    height: 14rem;\n    width: 14rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 20rem;\n    width: 20rem;\n  }\n}\n@-webkit-keyframes circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 32rem;\n    width: 32rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 42rem;\n    width: 42rem;\n  }\n}\n@keyframes circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 32rem;\n    width: 32rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 42rem;\n    width: 42rem;\n  }\n}\n@-webkit-keyframes small-circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 4rem;\n    margin-top: 4rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 30rem;\n    width: 30rem;\n  }\n}\n@keyframes small-circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 4rem;\n    margin-top: 4rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 30rem;\n    width: 30rem;\n  }\n}\n@-webkit-keyframes circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 7rem;\n    margin-top: 7rem;\n    height: 41rem;\n    width: 41rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 55rem;\n    width: 55rem;\n  }\n}\n@keyframes circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 7rem;\n    margin-top: 7rem;\n    height: 41rem;\n    width: 41rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 55rem;\n    width: 55rem;\n  }\n}\n@-webkit-keyframes small-circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 30rem;\n    width: 30rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 40rem;\n    width: 40rem;\n  }\n}\n@keyframes small-circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 30rem;\n    width: 30rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 40rem;\n    width: 40rem;\n  }\n}\n@-webkit-keyframes circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 9rem;\n    margin-top: 9rem;\n    height: 52rem;\n    width: 52rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 70rem;\n    width: 70rem;\n  }\n}\n@keyframes circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 9rem;\n    margin-top: 9rem;\n    height: 52rem;\n    width: 52rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 70rem;\n    width: 70rem;\n  }\n}\n@-webkit-keyframes small-circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 6rem;\n    margin-top: 6rem;\n    height: 36rem;\n    width: 36rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 48rem;\n    width: 48rem;\n  }\n}\n@keyframes small-circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 6rem;\n    margin-top: 6rem;\n    height: 36rem;\n    width: 36rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 48rem;\n    width: 48rem;\n  }\n}\n@-webkit-keyframes planetarium-block {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes planetarium-block {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1500ms;\n          animation-delay: 1500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n.columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  .columns {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .columns [app-devices] {\n    width: 100%;\n    max-width: 48rem;\n    margin: 3rem auto 0;\n  }\n}\n.columns .column {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n@media (min-width: 1024px) {\n  .columns .column:first-of-type {\n    padding-right: 4rem;\n  }\n}\n.columns .column:last-of-type {\n  position: relative;\n}\n#all-in-one {\n  margin-top: 17rem;\n}\n@media (max-width: 1023px) {\n  #all-in-one {\n    margin-top: 8rem;\n  }\n  #all-in-one p {\n    height: 15rem;\n  }\n}\n@media (max-width: 479px) {\n  #all-in-one {\n    margin-top: 0rem;\n  }\n  #all-in-one p {\n    height: 18rem;\n  }\n}\n#all-in-one [app-h2] {\n  text-align: left;\n}\n#all-in-one [app-h2] /deep/ h2 {\n  margin: 0 ;\n}\n@media (max-width: 1023px) {\n  #all-in-one [app-h2] /deep/ h2 {\n    margin: 0 auto;\n  }\n}\n.product {\n  position: absolute;\n  top: 7rem;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: 0 1px 12px 0 rgba(222, 222, 222, 0.5);\n  border: 1px solid #DEDEDE;\n  border-radius: 4px;\n  background-repeat: no-repeat;\n}\n.product#product-1 {\n  background: url(\"assets/images/product.png\");\n}\n.product#product-2 {\n  background: url(\"assets/images/product.png\");\n}\n.product#product-3 {\n  background: url(\"assets/images/product.png\");\n}\n.product#product-4 {\n  background: url(\"assets/images/product.png\");\n}\n@media (max-width: 1023px) {\n  .product {\n    position: initial;\n    width: 100%;\n    max-width: 60rem;\n    margin: 0 auto;\n    height: 40rem;\n    background-position: 100% 100%;\n  }\n}\n.column-block {\n  padding: 2rem;\n  cursor: pointer;\n}\n@media (max-width: 1023px) {\n  .column-block {\n    text-align: center;\n  }\n}\n.column-block.gray {\n  background: #F6F8F8;\n}\n.column-block b {\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n}\n.column-block b .icon {\n  display: inline-block;\n  margin-right: 1rem;\n}\n@media (max-width: 1023px) {\n  .column-block b .icon {\n    display: block;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n}\n.column-block p {\n  font-size: 1.4rem;\n  line-height: 2.6rem;\n}\n#planetarium {\n  height: 75rem;\n  width: 100%;\n  max-width: 110rem;\n  margin-top: 8rem;\n}\n@media (min-width: 1024px) {\n  #planetarium [app-h2] {\n    margin: 17rem 0 7rem;\n  }\n}\n@media (max-width: 1023px) {\n  #planetarium {\n    height: 60rem;\n    margin-top: 0;\n  }\n  #planetarium [app-h2] {\n    margin: 2rem 0 4rem;\n  }\n}\n#planetarium /deep/ [app-planetarium] .circle {\n  opacity: 0;\n}\n#planetarium /deep/ [app-planetarium] #circle-0 {\n  -webkit-animation: circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n          animation: circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n}\n@media (max-width: 1023px) {\n  #planetarium /deep/ [app-planetarium] #circle-0 {\n    -webkit-animation: small-circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n            animation: small-circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n  }\n}\n#planetarium /deep/ [app-planetarium] #circle-1 {\n  -webkit-animation: circle-1 2.1s cubic-bezier(0.6, 0.4, 0.6, 1.35);\n          animation: circle-1 2.1s cubic-bezier(0.6, 0.4, 0.6, 1.35);\n}\n@media (max-width: 1023px) {\n  #planetarium /deep/ [app-planetarium] #circle-1 {\n    -webkit-animation: small-circle-1 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n            animation: small-circle-1 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n  }\n}\n#planetarium /deep/ [app-planetarium] #circle-2 {\n  -webkit-animation: circle-2 2.2s cubic-bezier(0.6, 0.4, 0.6, 1.4);\n          animation: circle-2 2.2s cubic-bezier(0.6, 0.4, 0.6, 1.4);\n}\n@media (max-width: 1023px) {\n  #planetarium /deep/ [app-planetarium] #circle-2 {\n    -webkit-animation: small-circle-2 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n            animation: small-circle-2 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n  }\n}\n#planetarium /deep/ [app-planetarium] #circle-3 {\n  -webkit-animation: circle-3 2.3s cubic-bezier(0.6, 0.4, 0.6, 1.45);\n          animation: circle-3 2.3s cubic-bezier(0.6, 0.4, 0.6, 1.45);\n}\n@media (max-width: 1023px) {\n  #planetarium /deep/ [app-planetarium] #circle-3 {\n    -webkit-animation: small-circle-3 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n            animation: small-circle-3 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n  }\n}\n#planetarium /deep/ [app-planetarium] #circle-4 {\n  -webkit-animation: circle-4 2.4s cubic-bezier(0.6, 0.4, 0.6, 1.5);\n          animation: circle-4 2.4s cubic-bezier(0.6, 0.4, 0.6, 1.5);\n}\n@media (max-width: 1023px) {\n  #planetarium /deep/ [app-planetarium] #circle-4 {\n    -webkit-animation: small-circle-4 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n            animation: small-circle-4 2s cubic-bezier(0.6, 0.4, 0.6, 1.3);\n  }\n}\n#planetarium .planetarium-blocks {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  #planetarium .planetarium-blocks {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n#planetarium .planetarium-block {\n  width: 100%;\n  max-width: 40rem;\n  min-height: 20rem;\n  padding: 2rem;\n  opacity: 0;\n  -webkit-animation: planetarium-block 2s forwards;\n          animation: planetarium-block 2s forwards;\n  background: -webkit-linear-gradient(top, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);\n  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);\n  box-shadow: 0 1px 12px 0 rgba(222, 222, 222, 0.5);\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  margin: auto;\n}\n@media (min-width: 1024px) {\n  #planetarium .planetarium-block#share-collaborate {\n    margin-right: 4rem;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n  }\n  #planetarium .planetarium-block#network {\n    margin-left: 4rem;\n    -webkit-animation-delay: 2.5s;\n            animation-delay: 2.5s;\n  }\n}\n@media (max-width: 1023px) {\n  #planetarium .planetarium-block {\n    text-align: center;\n  }\n  #planetarium .planetarium-block#share-collaborate {\n    margin-bottom: 2rem;\n  }\n}\n#planetarium .planetarium-block b {\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n}\n#planetarium .planetarium-block p {\n  font-size: 1.5rem;\n  line-height: 2.6rem;\n}\n@media (max-width: 1023px) {\n  #everywhere {\n    margin-top: 0;\n  }\n}\n@media (max-width: 479px) {\n  #everywhere {\n    margin: 4rem 0 2rem;\n  }\n}\n#ready {\n  margin-bottom: 12rem;\n}\n#ready [app-h2] {\n  margin: 12rem 0 2rem;\n}\n@media (max-width: 1023px) {\n  #ready [app-h2] {\n    margin-top: 2rem;\n  }\n}\n#ready p {\n  font-size: 1.6rem;\n  margin-bottom: 4rem;\n}\n#ready .button {\n  font-size: 1.4rem;\n}\n#ready .button:first-of-type {\n  margin-right: 4rem;\n}\n@media (max-width: 1023px) {\n  #ready {\n    margin-bottom: 8rem;\n  }\n}\nbutton {\n  padding: 0 4rem;\n}\n@media (max-width: 1023px) {\n  button#create-account {\n    margin-bottom: 2rem;\n  }\n}\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes fade-in {\n  0% {\n    left: 100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    left: 100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes fade-out {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes fade-out {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n:host /deep/ .carousel {\n  width: 100%;\n  overflow: hidden;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n:host /deep/ .carousel .carousel-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n:host /deep/ .carousel .carousel-content {\n  position: relative;\n}\n:host /deep/ .carousel [carousel-page] {\n  width: 100%;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n:host /deep/ .carousel [carousel-page].shown {\n  left: 0;\n  position: relative;\n  -webkit-animation: fade-in 2000ms ease-in-out;\n          animation: fade-in 2000ms ease-in-out;\n}\n:host /deep/ .carousel [carousel-page].previous {\n  -webkit-animation: fade-out 2000ms ease-in-out;\n          animation: fade-out 2000ms ease-in-out;\n}\n:host /deep/ .carousel [carousel-page].hide {\n  left: 100%;\n  position: absolute;\n}\n.carousel-pagination {\n  margin: 4rem auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.carousel-pagination .pagination-point {\n  width: 0.9rem;\n  height: 0.9rem;\n  border-radius: 50%;\n  background: #D7D7E2;\n  margin-right: 3rem;\n  cursor: pointer;\n}\n.carousel-pagination .pagination-point:last-of-type {\n  margin-right: 0;\n}\n.carousel-pagination .pagination-point.selected {\n  background: #0DAFAC;\n}\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes computer-in {\n  0% {\n    bottom: -2rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@keyframes computer-in {\n  0% {\n    bottom: -2rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes browser-in {\n  0% {\n    bottom: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 5.5rem;\n    opacity: 1;\n  }\n}\n@keyframes browser-in {\n  0% {\n    bottom: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 5.5rem;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes tablet-in {\n  0% {\n    top: 4rem;\n    opacity: 0;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  80% {\n    top: -0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  90% {\n    top: 0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  100% {\n    top: 0rem;\n    opacity: 1;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n}\n@keyframes tablet-in {\n  0% {\n    top: 4rem;\n    opacity: 0;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  80% {\n    top: -0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  90% {\n    top: 0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  100% {\n    top: 0rem;\n    opacity: 1;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n}\n@-webkit-keyframes mobile-in {\n  0% {\n    bottom: 8rem;\n    opacity: 0;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n  80% {\n    bottom: 12.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  90% {\n    bottom: 11.9rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    bottom: 12rem;\n    opacity: 1;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n}\n@keyframes mobile-in {\n  0% {\n    bottom: 8rem;\n    opacity: 0;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n  80% {\n    bottom: 12.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  90% {\n    bottom: 11.9rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    bottom: 12rem;\n    opacity: 1;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n}\n:host {\n  position: relative;\n  height: 45.5rem;\n  width: 56rem;\n}\n@media (max-width: 1023px) {\n  :host {\n    width: 46rem;\n    height: 35rem;\n  }\n}\n@media (max-width: 479px) {\n  :host {\n    width: 30rem;\n    height: 22rem;\n  }\n}\n.computer {\n  position: absolute;\n  width: 56rem;\n  left: calc(50% - 28rem);\n  bottom: 0;\n  z-index: 0;\n  opacity: 0;\n  -webkit-animation: computer-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: computer-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .computer {\n    width: 46rem;\n    left: calc(50% - 23rem);\n  }\n}\n@media (max-width: 479px) {\n  .computer {\n    width: 30rem;\n    left: calc(50% - 15rem);\n  }\n}\n.window-computer {\n  position: absolute;\n  z-index: 2;\n  width: 16rem;\n  height: 14rem;\n  bottom: 9rem;\n  right: calc(50% - 8rem);\n}\n@media (max-width: 1023px) {\n  .window-computer {\n    width: 14rem;\n    height: 10rem;\n    bottom: 8rem;\n    right: calc(50% - 7rem);\n  }\n}\n@media (max-width: 479px) {\n  .window-computer {\n    width: 10rem;\n    height: 6rem;\n    bottom: 5.5rem;\n    right: calc(50% - 5rem);\n  }\n  .window-computer /deep/ .button {\n    display: none;\n  }\n}\n.browser {\n  position: absolute;\n  width: 35rem;\n  z-index: 1;\n  left: calc(50% - 17.5rem);\n  bottom: 5.5rem;\n  opacity: 0;\n  -webkit-animation: browser-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: browser-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .browser {\n    width: 26rem;\n    left: calc(50% - 13rem);\n  }\n}\n@media (max-width: 479px) {\n  .browser {\n    width: 16rem;\n    top: 7.5rem;\n    left: calc(50% - 8rem);\n  }\n}\n.tablet {\n  position: absolute;\n  z-index: 3;\n  width: 27rem;\n  z-index: 2;\n  right: calc(25% - 12.5rem);\n  top: 0;\n  opacity: 0;\n  -webkit-animation: tablet-in 300ms 1s cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: tablet-in 300ms 1s cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .tablet {\n    width: 20rem;\n    right: 5rem;\n    top: 2.5rem;\n  }\n}\n@media (max-width: 479px) {\n  .tablet {\n    width: 12rem;\n    right: 2rem;\n  }\n}\n.window-tablet {\n  position: absolute;\n  z-index: 4;\n  width: 16rem;\n  height: 14rem;\n  top: 11.5rem;\n  right: calc(25% - 7rem);\n  -webkit-transform: rotate(4deg);\n          transform: rotate(4deg);\n}\n@media (max-width: 1023px) {\n  .window-tablet {\n    top: 9rem;\n    height: 10rem;\n    width: 12rem;\n    right: 9rem;\n  }\n}\n@media (max-width: 479px) {\n  .window-tablet {\n    top: 3.5rem;\n    height: 10rem;\n    width: 8rem;\n    right: 4rem;\n  }\n}\n.mobile-phone {\n  position: absolute;\n  z-index: 3;\n  width: 15rem;\n  z-index: 2;\n  left: calc(30% - 10.5rem);\n  bottom: 10rem;\n  -webkit-transform: rotate(-4deg);\n          transform: rotate(-4deg);\n  opacity: 0;\n  -webkit-animation: mobile-in 300ms 500ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: mobile-in 300ms 500ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .mobile-phone {\n    width: 12rem;\n    left: 6.5rem;\n    top: 4rem;\n  }\n}\n@media (max-width: 479px) {\n  .mobile-phone {\n    width: 7rem;\n    left: 3.5rem;\n    top: 1rem;\n  }\n}\n.window-mobile {\n  position: absolute;\n  z-index: 4;\n  width: 10rem;\n  height: 13rem;\n  top: 12.5rem;\n  left: calc(30% - 8rem);\n  -webkit-transform: rotate(-4deg);\n          transform: rotate(-4deg);\n}\n@media (max-width: 1023px) {\n  .window-mobile {\n    top: 10rem;\n    height: 10rem;\n    width: 8rem;\n    left: 8.5rem;\n  }\n}\n@media (max-width: 479px) {\n  .window-mobile {\n    top: 4rem;\n    height: 7rem;\n    width: 4rem;\n    left: 5rem;\n  }\n  .window-mobile /deep/ .button {\n    display: none;\n  }\n}\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes window-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    padding: 2rem 1rem;\n  }\n}\n@keyframes window-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    padding: 2rem 1rem;\n  }\n}\n@-webkit-keyframes circle-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 2.5rem;\n    height: 2.5rem;\n    top: -1.25rem;\n    left: calc(50% - 1.25rem);\n    opacity: 1;\n  }\n}\n@keyframes circle-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 2.5rem;\n    height: 2.5rem;\n    top: -1.25rem;\n    left: calc(50% - 1.25rem);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes circle-in-mobile {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: -0.75rem;\n    left: calc(50% - 0.75rem);\n    opacity: 1;\n  }\n}\n@keyframes circle-in-mobile {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: -0.75rem;\n    left: calc(50% - 0.75rem);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 50%;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@keyframes gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 50%;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@-webkit-keyframes small-gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: calc(100% - 8.2rem);\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@keyframes small-gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: calc(100% - 8.2rem);\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@-webkit-keyframes button-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-right: 2.1rem;\n  }\n  100% {\n    width: 4.2rem;\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n@keyframes button-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-right: 2.1rem;\n  }\n  100% {\n    width: 4.2rem;\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n@-webkit-keyframes darkgray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: 50%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@keyframes darkgray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: 50%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.window-content {\n  width: 0;\n  height: 0;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 4px 0 #CECECE;\n  border-radius: 2px;\n  position: relative;\n  margin: auto;\n  -webkit-animation: window-in 500ms 1500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: window-in 500ms 1500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.circle {\n  background-color: #CBCBCB;\n  border-radius: 50%;\n  height: 2.5rem;\n  width: 2.5rem;\n  left: calc(50% - 1.25rem);\n  top: -1.25rem;\n  position: absolute;\n  -webkit-animation: circle-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: circle-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  opacity: 0;\n}\n@media (max-width: 1023px) {\n  .circle {\n    height: 1.5rem;\n    width: 1.5rem;\n    left: calc(50% - 0.75rem);\n    top: -0.75rem;\n    -webkit-animation: circle-in-mobile 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n            animation: circle-in-mobile 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  }\n}\n.gray-line {\n  border-radius: 100px;\n  height: 0.8rem;\n  width: 100%;\n  background-color: #E8E8E8;\n  margin-bottom: 1rem;\n  -webkit-animation: gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  opacity: 0;\n}\n@media (max-width: 1023px) {\n  .gray-line {\n    height: 0.4rem;\n    margin-bottom: 0.5rem;\n  }\n}\n.gray-line.first {\n  margin-bottom: 2rem;\n}\n@media (max-width: 1023px) {\n  .gray-line.first {\n    margin-bottom: 1rem;\n  }\n}\n.gray-line.small {\n  margin-right: 4rem;\n  height: 0.4rem;\n  width: calc(100% - 8.2rem);\n  position: absolute;\n  bottom: 0.5rem;\n  left: 1rem;\n  float: left;\n  -webkit-animation: small-gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: small-gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.darkgray-line {\n  border-radius: 100px;\n  height: 0.4rem;\n  width: 50%;\n  background-color: #BABABA;\n  margin-bottom: 0.5rem;\n  -webkit-animation: darkgray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: darkgray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  opacity: 0;\n}\n.button {\n  background-color: #0DAFAC;\n  width: 4.2rem;\n  height: 1.2rem;\n  border-radius: 2px;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  float: right;\n  opacity: 0;\n  -webkit-animation: button-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: button-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n@media (max-width: 1023px) {\n  .button {\n    bottom: 0.5rem;\n  }\n}\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n:host {\n  width: 100%;\n  background-color: #3B3E48;\n  color: #FFF;\n  padding: 6rem 8rem;\n  font-size: 1.4rem;\n  font-weight: 300;\n  line-height: 3rem;\n}\n@media (max-width: 1100px) {\n  :host {\n    padding: 5rem 1rem;\n  }\n}\n:host .footer-content {\n  width: 100%;\n  max-width: 110rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n}\n:host .footer-content .dropdown-toggle {\n  height: 5rem;\n  line-height: 5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 1rem;\n  border: solid 1px #FFF;\n  border-radius: 2px;\n  padding: 0 1rem;\n  font-size: 1.6rem;\n}\n:host .footer-content .dropdown-toggle .text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n:host .footer-content .dropdown-toggle .chevron:before {\n  height: 0.5rem;\n  width: 0.5rem;\n  border-width: 0.3rem 0.3rem 0 0;\n  margin: 1.75rem 1rem 0 0;\n}\n:host .footer-content .dropdown-content {\n  position: absolute;\n  bottom: 0rem;\n  right: 0;\n  left: 0;\n  z-index: 5;\n}\n:host .footer-content .dropdown-content > div:last-of-type {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1rem 0;\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: 300;\n  height: 22.5rem;\n}\n:host .footer-content .dropdown-content > div:last-of-type img {\n  margin: -6.1rem auto 1rem;\n}\n:host .footer-content .dropdown-content > div:last-of-type p {\n  margin: 0;\n  height: 4rem;\n  line-height: 4rem;\n}\n@media (max-width: 1023px) {\n  :host .footer-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.footer-column {\n  padding: 0 1rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.footer-column:first-of-type {\n  border-right: solid 1px #585D6E;\n  width: 46rem;\n  margin-right: 2rem;\n}\n@media (max-width: 1100px) {\n  .footer-column:first-of-type {\n    width: 26rem;\n    padding-right: 4rem;\n  }\n}\n@media (max-width: 1023px) {\n  .footer-column:first-of-type {\n    text-align: center;\n    border-width: 0;\n    padding: 0;\n    width: 100%;\n  }\n}\n.footer-column .footer-title {\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.footer-column ul {\n  margin: 0;\n  padding: 0;\n}\n.footer-column ul li {\n  list-style: none;\n  cursor: pointer;\n  font-weight: 300;\n  line-height: 4rem;\n}\n.footer-logo {\n  height: 2rem;\n  filter: contrast(0) brightness(100);\n  -webkit-filter: contrast(0) brightness(100);\n}\n.social-media {\n  font-size: 1.6rem;\n  cursor: pointer;\n  float: left;\n  filter: contrast(0) brightness(100);\n  -webkit-filter: contrast(0) brightness(100);\n  margin-right: 2rem;\n}\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes h2-line {\n  0% {\n    width: 6rem;\n  }\n  100% {\n    width: 9rem;\n  }\n}\n@keyframes h2-line {\n  0% {\n    width: 6rem;\n  }\n  100% {\n    width: 9rem;\n  }\n}\n@-webkit-keyframes h2-text {\n  0% {\n    padding-left: 0rem;\n  }\n  100% {\n    padding-left: 3rem;\n  }\n}\n@keyframes h2-text {\n  0% {\n    padding-left: 0rem;\n  }\n  100% {\n    padding-left: 3rem;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 5rem 0;\n}\n.blue-line {\n  border-radius: 2px;\n  background-color: #c4f4f4;\n  position: absolute;\n  top: 1.4rem;\n  left: 0;\n  width: 9rem;\n  height: 0.8rem;\n  -webkit-animation: h2-line 2s ease-in;\n          animation: h2-line 2s ease-in;\n  z-index: -1;\n}\nh2 {\n  line-height: 3.4rem;\n  font-size: 2.4rem;\n  font-weight: bold;\n  padding-left: 3rem;\n  -webkit-animation: h2-text 2s;\n          animation: h2-text 2s;\n  margin: 0 auto;\n  position: relative;\n}\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 110rem;\n  margin: 3rem auto 0 auto;\n  padding: 0 1rem;\n}\n:host .header-logo {\n  margin-right: auto;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n@media (max-width: 1024px) {\n  :host .header-logo {\n    margin: 0 auto;\n  }\n}\n:host .header-menu {\n  margin: 0;\n}\n:host .header-menu .menu-icon {\n  position: absolute;\n  top: 0;\n  left: 2.5rem;\n  cursor: pointer;\n}\n:host .header-menu .dropdown-toggle {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n:host .header-menu .dropdown-content {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n}\n:host .header-menu .dropdown-content .menu-icon {\n  top: 3rem;\n}\n:host .header-menu .dropdown-content > div:first-of-type {\n  padding: 1rem 0;\n  height: 8.5rem;\n}\n:host .header-menu .dropdown-content .menu-logo {\n  height: 3rem;\n  margin-top: 2rem;\n}\n:host .header-menu .dropdown-content .bar {\n  background: #FFF;\n}\n:host .header-menu .bar {\n  height: 0.2rem;\n  width: 4rem;\n  background: #000;\n}\n:host .header-menu .bar:not(:last-of-type) {\n  margin-bottom: 1rem;\n}\n:host .header-menu li {\n  font-size: 1.4rem;\n  line-height: 1.9rem;\n  font-weight: 600;\n  text-align: center;\n  color: #3C3F48;\n  list-style: none;\n  display: inline-block;\n  margin-right: 2.5rem;\n  cursor: pointer;\n}\n:host .header-menu li.current {\n  color: #0DAFAC;\n}\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n:host {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n}\n#animation-layout {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.circle {\n  border-radius: 50%;\n  border: solid 1px #e2e2e2;\n  box-shadow: -5px 5px 30px 0px rgba(0, 0, 0, 0.1);\n  position: absolute;\n  opacity: 1;\n  z-index: -3;\n}\n.particle {\n  border-radius: 50%;\n  border-style: solid;\n  border-color: #0DAFAC;\n  width: 0;\n  right: 0;\n  top: 0;\n  height: 0;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: -2;\n  overflow: visible;\n  box-sizing: content-box;\n}\n.particle > .particle {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n  border-color: white;\n  box-sizing: border-box;\n}\n.particle .white {\n  border-color: #0DAFAC;\n  background: #FFF;\n}\n.particle.gray {\n  border-color: #5d5e63;\n}\n.particle.gray .white {\n  border-color: #5d5e63;\n  background: #FFF;\n}\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes wave-in {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    top: 37rem;\n    opacity: 1;\n  }\n}\n@keyframes wave-in {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    top: 37rem;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes wave-in-mobile {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    top: 37rem;\n    opacity: 1;\n  }\n}\n@keyframes wave-in-mobile {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    top: 37rem;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes background-in {\n  0% {\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    height: 50rem;\n    opacity: 1;\n  }\n}\n@keyframes background-in {\n  0% {\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    height: 50rem;\n    opacity: 1;\n  }\n}\n:host {\n  z-index: -3;\n  top: -8rem;\n  right: 0;\n  left: 0;\n  position: absolute;\n  height: 50rem;\n}\n.waves {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.wave {\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  position: absolute;\n  height: 13rem;\n}\n.background {\n  height: 30rem;\n  width: 100%;\n  position: absolute;\n  fill: #faffff;\n  opacity: 0;\n  -webkit-animation: background-in 1000ms 450ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: background-in 1000ms 450ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-1 {\n  fill: #eafbfb;\n  -webkit-animation: wave-in 1250ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1250ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-2 {\n  fill: #e0f8f8;\n  -webkit-animation: wave-in 1150ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1150ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-3 {\n  fill: #d1f2f2;\n  -webkit-animation: wave-in 1050ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1050ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-1-mobile {\n  fill: #eafbfb;\n  -webkit-animation: wave-in-mobile 1250ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in-mobile 1250ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-2-mobile {\n  fill: #e0f8f8;\n  -webkit-animation: wave-in-mobile 1150ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in-mobile 1150ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-3-mobile {\n  fill: #d1f2f2;\n  -webkit-animation: wave-in-mobile 1050ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in-mobile 1050ms 600ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div id=\"monaco-background\"></div>\n<div class=\"block\" id=\"first-block\">\n    <h1>The world is a campus.</h1>\n    <p>\n        <b>Technology</b> is revolutionizing the way we <b>learn</b> and <b>engage</b> with others.\n    </p>\n    \n</div>\n<div class=\"block\" id=\"first-paragraph\" app-fade-in [delay]=\"2000\">\n    <p>\n        In a more than ever connected world, we believe that innovation drives value creation through platforms, people and technology. <br/>\n        We believe at <b>Twic</b> thant &laquo;the world is a campus&raquo;.\n    </p>\n    <p>\n        <b>Monaco</b> is where our very internationally diverse team happens to be. While home to over <b>140 nationalities</b>, the \n        <b>Principality of Monaco</b> has for many years been working towards and promoting a better world, placing the \n        <b>United Nations Millenium Development Goals</b> at the heart of it's foreign policy.\n</div>\n<div class=\"block\" id=\"adress\" app-fade-in >\n    <img class=\"twic-logo\"  src=\"assets/images/Logo.svg\"/>\n    <div class=\"by\">by</div>\n    <img class=\"studnet-logo\"  src=\"assets/images/studnet.png\"/>\n    <div>THE STUDNET SAM</div>\n    <div>Gildo Pastor Center</div>\n    <div>7, rue du Gabian, 98000 Monaco</div>\n    <div>contact@thestudnet.com</div>\n    <img class=\"monaco-logo\"  src=\"assets/images/monaco.png\"/>\n    <div class=\"monaco-sentence\">Playing a special role ine the world.</div>\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<header app-header></header>\n<router-outlet></router-outlet>\n<footer app-footer></footer>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<p>\n  form works!\n</p>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div app-planetarium \n     [circles]=\"circles\" \n     [center]=\"[0, 50]\" [nbParticles]=\"15\" \n     [size]=\"[0,800]\"\n     ></div>\n<h1>The Social Learning Environment<span class=\"blue\"><b>*</b></span> for <span class=\"no-break\">B-Schools.</span></h1>\n<div class=\"block\" app-fade-in>\n    <p>\n        <span class=\"blue\"><b>*</b></span><b>Engagement</b> online is at <u>the heart of our product design</u>.<br class='desktop'/> \n        This is why we have developped a technology combining a state-of-the-art <br class='desktop'/>\n        Learning Management System with 21st-Century social networking tools.\n    </p>\n    <button class=\"button\" [routerLink]=\"['/product']\">See Our Product<span class=\"chevron right\"></span></button>\n</div>\n<div class=\"block citation-block\" app-fade-in>\n    <div class=\"portrait\"></div>\n    <div class=\"citation\">\n        <div class=\"quote\">“</div>\n        <div class=\"citation-content\">THE POWER OF NETWORKED EDUCATION</div>\n        <p>\n            <b>Edward Snyder</b>, Dean of Yale School of Management\n        </p>\n        <p class=\"poets-paragraph\">\n            ‘Dean of the year 2015’ by <img class=\"poets\" src=\"assets/images/Poets-Quants-logo.jpg\" />\n        </p>\n\n    </div>\n</div>\n<div class=\"block small-text\" app-fade-in>\n    THEY TRUST US\n</div>\n<div app-carousel app-fade-in  (window:resize)=\"onResize($event)\" [ratio]=\"0.8\" [time]=\"10000\" >\n    <div carousel-page *ngFor=\"let page of pages\">\n         <div class=\"schools\">\n            <div class=\"school\" *ngFor=\"let school of page\">\n                <img src=\"{{ school }}\"/>                    \n            </div>\n        </div>\n    </div>\n</div>\n       "

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div class=\"block\" id=\"first-block\">\n    <h1>Transparent pricing.</h1>\n    <p>\n        Whatever the plan, <b>Twic</b> is a no-brainer.<br/>\n        An all inclusive transparent flat-fee.\n    </p>\n    \n</div>\n<div app-h2 id=\"choose-you-plan\" app-fade-in [delay]='2000'>Choose your plan</div>\n<div class=\"block table-block\" app-fade-in [delay]='2000'>\n    <div class=\"table\">\n        <div class=\"white column\">\n            <div class=\"title\">Course</div>\n            <div class=\"price\">\n                <div class=\"euro\">&euro;</div>\n                <div class=\"number\">5</div>\n                <div class=\"k\">K</div>\n            </div>\n            <div class=\"lines\">\n                <div class=\"line\">\n                    <b>1</b> course\n                </div>\n                <div class=\"line\">\n                    <b>All</b> students enrolled\n                </div>\n                <div class=\"line\">\n                    <b>Full</b> course duration\n                </div>\n            </div>\n        </div>\n        <div class=\"white column\">\n            <div class=\"title\">Program</div>\n            <div class=\"price\">\n                <div class=\"euro\">&euro;</div>\n                <div class=\"number\">50</div>\n                <div class=\"k\">K</div>\n            </div>\n            <div class=\"lines\">\n                <div class=\"line\">\n                    <b>Unlimited</b> courses\n                </div>\n                <div class=\"line\">\n                    <b>All</b> students enrolled\n                </div>\n                <div class=\"line\">\n                    <b>Full</b> program duration\n                </div>\n            </div>\n                \n        </div>\n        <div class=\"gray column\">\n            <div class=\"title\">Institution</div>\n            <div class=\"price\">\n                <div class=\"title\">Contact us</div>\n            </div>\n            <div class=\"lines\">\n                <div class=\"line\">\n                    <b>Unlimited</b> courses and programs\n                </div>\n                <div class=\"line\">\n                    <b>Total</b> enrollment\n                </div>\n                <div class=\"line\">\n                    <b>3</b> years\n                </div>\n            </div>\n                \n        </div>\n    </div>\n</div>\n<div class=\"block\" id=\"our-pricing\" app-fade-in>\n    <p>\n        Any question about <b>our pricing</b>? Feel free to <b><u>contact us</u></b>, we're more than happy to help.\n    </p>\n</div>\n\n<div class='block' id='try-our-product' app-fade-in>\n    <p>\n        <b>You can try our product.</b><br/>\n        Start your 30-day free trial for one course today!\n    </p>\n    <button class='button'>\n        Start 30-day free trial\n    </button>\n</div>\n\n<div class='block' id='features' app-fade-in>\n    <div app-h2>\n        All features\n    </div>\n    <li>\n        <ul><span class=\"icon icon-checkmark\"></span>State-of-the-art Learning Management system</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Collaborative learning and social networking tools</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Videoconferencing system</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Data collection and graphic analytics</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>24/7 support (chat and hot line)</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Custom integration and branding</ul>\n    </li>\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div class=\"block\" id=\"first-block\">\n    <h1>Higher Education in the 21st-Century.</h1>\n    <p>\n       The power of <b>networked education</b>, everywhere and anytime, on a single<br/>\n        Social Learning Environment.\n    </p>\n    \n</div>\n<div class=\"desktop columns\" id=\"all-in-one\">\n    <div class=\"column\" app-fade-in [delay]=\"2000\">\n        <div app-h2>All-in-one platform</div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 0 }\" (click)=\"changeProductNumber(0)\">\n            <b>Learning Management System</b>\n            <p>\n                We are committed to being on the cutting edge of\n                innovation in higher education. Our state-of-the-art\n                L.M.S enables to distribute online, blended courses over the internet as well as \n                to augment on-campus teaching in a brick and mortar environment.</p>\n        </div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 1 }\" (click)=\"changeProductNumber(1)\">\n            <b>Social networking tools</b>\n            <p>\n                Our disruptive technology allows to create a connected, engaged and \n                collaborative learning experience for students and faculty across the world.\n            </p>\n        </div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 2 }\" (click)=\"changeProductNumber(2)\">\n            <b>Videoconferencing system</b>\n            <p>\n               Our all-in-one platform make it easy to launch one-on- one, group calls or live classes without \n               needing to open another app or share invite links.\n            </p>\n        </div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 3 }\" (click)=\"changeProductNumber(3)\">\n            <b>Data collection</b>\n            <p>\n               We use the latest forward-looking algorithms in human-technology \n               tracking to measure Assurance of Learning and online engagement.\n            </p>\n        </div>\n    </div>\n    <div class=\"column\" app-fade-in [delay]=\"2000\">\n        <div class=\"product\" id=\"product-1\" *ngIf=\"productIndex === 0\" ></div>\n        <div class=\"product\" id=\"product-2\" *ngIf=\"productIndex === 1\" ></div>\n        <div class=\"product\" id=\"product-3\" *ngIf=\"productIndex === 2\" ></div>\n        <div class=\"product\" id=\"product-4\" *ngIf=\"productIndex === 3\" ></div>\n    </div>\n</div>\n\n<div class=\"columns mobile\" id=\"all-in-one\" app-fade-in>\n    <div class=\"column\">\n        <div app-h2>All-in-one platform</div>\n        \n        <div app-carousel [time]=\"10000\" >\n            \n            <div  carousel-page class=\"column-block\">\n                <b>Learning Management System</b>\n                <p>\n                    We are committed to being on the cutting edge of\n                    innovation in higher education. Our state-of-the-art\n                    L.M.S enables to distribute online, blended courses over the internet as well as \n                    to augment on-campus teaching in a brick and mortar environment.</p>\n                <div id=\"product\"></div>\n            </div>\n            \n            <div  carousel-page class=\"column-block\">\n                <b>Social networking tools</b>\n                <p>\n                    Our disruptive technology allows to create a connected, engaged and \n                    collaborative learning experience for students and faculty across the world.\n                </p>\n                <div id=\"product\"></div>\n            </div>\n            <div  carousel-page class=\"column-block\">\n                <b>Videoconferencing system</b>\n                <p>\n                   Our all-in-one platform make it easy to launch one-on- one, group calls or live classes without \n                   needing to open another app or share invite links.\n                </p>\n                <div id=\"product\"></div>\n            </div>\n            <div  carousel-page class=\"column-block\">\n                <b>Data collection</b>\n                <p>\n                   We use the latest forward-looking algorithms in human-technology \n                   tracking to measure Assurance of Learning and online engagement.\n                </p>\n                <div id=\"product\"></div>\n            </div>\n        </div>\n       \n    </div>\n</div>\n\n<div id=\"planetarium\"  (window:resize)=\"onResize($event)\" app-fade-in [ratio]=\"0.6\">\n    <div app-planetarium \n         \n        [circles]=\"circles\" \n        [nbParticles]=\"15\" \n        [size]=\"[0,height]\"\n        [center]=\"center\">\n        \n    </div>\n    <div app-h2>Networked education</div>\n    <div class=\"planetarium-blocks\">\n        <div class=\"planetarium-block\" id=\"share-collaborate\">\n            <b>Share & Collaborate</b>\n            <p>\n                Our collaborative learning environment based on community of practice, group projects, \n                peer evaluation and class discussions enables the proven best \n                practices for student and faculty engagement.\n            </p>\n        </div>\n        <div class=\"planetarium-block\" id=\"network\">\n            <b>Network</b>\n            <p>\n                Whether B-schools have a single, multi-campus, joint degree or alliance model strategy, \n                we believe that networking-based education allows for resources to be \n                distributed more efficiently.\n            </p>\n        </div>\n    </div>\n</div>\n<div class=\"columns\">\n    <div class=\"column\" app-fade-in>\n        <div app-h2 id=\"everywhere\" >Everywhere. Anytime.</div>\n        <div  class=\"column-block\">\n            <b><span class=\"icon icon-loop2\"></span> Responsiveness & Sync</b>\n            <p>\n              Whether Twic is used on a mobile, tablet or desktop, and whatever content \n              is created, all connected devices will stay in synchronization.\n            </p>\n        </div>\n        <div  class=\"column-block\">\n            <b><span class=\"icon icon-bullhorn\"></span>Notifications</b>\n            <p>\n                Students and faculty can have customized notifications pop up on their devices to keep them up- to-date.\n            </p>\n        </div>\n    </div>\n    <div class=\"column\" app-fade-in [ratio]=\"0.6\">\n        <div app-devices>\n\n        </div>\n    </div>\n</div>\n<div class=\"block\" id=\"ready\" app-fade-in>\n    <div app-h2>Ready to get started</div>\n    <p>Create your account in seconds and start free trial 30 days.</p>\n    <div class=\"buttons\">\n        <button class=\"button\" id=\"create-account\">\n            Create Account\n        </button>\n        <button class=\"button white\" [routerLink]=\"['/pricing']\">\n            Our pricing plan\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <div  class=\"carousel-content\" >\n        <ng-content></ng-content>\n        \n    </div> \n</div>\n<div class=\"carousel-pagination\"  *ngIf=\"pages.length > 1\">\n    <div class=\"pagination-point\" \n         *ngFor=\"let page of pages;let i = index; \" \n         (click)=\"changePage(i)\"\n         [ngClass]=\"{ selected : i === currentPage }\"\n         ></div>\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "\n<img class=\"computer\" src=\"../../assets/images/Macbook.svg\"/>\n<img class=\"browser\" src=\"../../assets/images/Browser.svg\"/>\n<div app-window class=\"window-computer\" [delay]=\"1500\"></div>\n<img class=\"mobile-phone\" src=\"../../assets/images/Iphone.svg\"/>\n<div app-window class=\"window-mobile\" [delay]=\"1750\"></div>\n<img class=\"tablet\" src=\"../../assets/images/iPad.svg\"/>\n<div app-window class=\"window-tablet\" [delay]=\"2000\"></div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"window-content\"  [ngStyle]=\"{ 'animation-delay' : delay + 'ms' }\">\n    \n    <div class=\"circle\" [ngStyle]=\"{ 'animation-delay' : (1000 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line first\" [ngStyle]=\"{ 'animation-delay' : (1100 + delay) + 'ms' }\"></div>\n    <div class=\"darkgray-line\" [ngStyle]=\"{ 'animation-delay' : (1200 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line\" [ngStyle]=\"{ 'animation-delay' : (1300 + delay) + 'ms' }\"></div>\n    <div class=\"darkgray-line\" [ngStyle]=\"{ 'animation-delay' : (1400 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line\" [ngStyle]=\"{ 'animation-delay' : (1500 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line small\" [ngStyle]=\"{ 'animation-delay' : (1600 + delay) + 'ms' }\"></div>\n    <div class=\"button\" [ngStyle]=\"{ 'animation-delay' : (1700 + delay) + 'ms' }\"></div>\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-content\">\n    <div class=\"footer-column\">\n        <img class=\"footer-logo\" src=\"assets/images/Logo-white.png\"/>\n        <p>\n            Copyright © 2017, Twic by THE STUDNET.\n        </p>\n    </div>\n    <div class=\"footer-menu mobile dropdown\" app-dropdown>\n        <div class=\"dropdown-content\">\n            <div [routerLink]=\"['/product']\">See our Product</div>\n            <div [routerLink]=\"['/pricing']\">Pricing</div>\n            <div>Support</div>\n            <div [routerLink]=\"['/about']\">About</div>\n            <div>Download App IOS</div>\n            <div>Download App Android</div>\n            <div>Status</div>\n            <div>\n                <img class=\"footer-logo\" src=\"assets/images/Logo-white.png\"/>\n                <p>\n                    Copyright © 2017, Twic by THE STUDNET.\n                </p>\n            </div>\n        </div>\n        <div class=\"dropdown-toggle\">\n            <div class=\"text\">See our Product</div> <div class=\"chevron bottom\"></div>\n        </div>\n        \n    </div>\n    <div class=\"footer-column desktop\">\n        <div class=\"footer-title\">Using Twic</div>\n        <ul>\n            <li [routerLink]=\"['/product']\">Product</li>\n            <li [routerLink]=\"['/pricing']\">Pricing</li>\n            <li>Support</li>\n        </ul>\n    </div>\n    <div class=\"footer-column desktop\">\n        <div class=\"footer-title\">Twic</div> \n        <ul>\n            <li [routerLink]=\"['/about']\">About</li>\n            <li>Download App IOS</li>\n            <li>Download App Android</li>\n            <li>Status</li>\n        </ul>\n    </div>\n   \n    <div class=\"footer-column desktop\">\n        <div class=\"footer-title\">Contact us</div>\n        <span class=\"icon icon-facebook social-media\"></span>\n        <span class=\"icon icon-twitter social-media\"></span>\n        <span class=\"icon icon-linkedin2 social-media\"></span>\n    </div>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<h2>\n    <div class=\"blue-line\"></div>\n    <ng-content></ng-content>\n</h2>\n\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header-menu mobile dropdown\" app-dropdown>\n    <div class=\"dropdown-toggle menu-icon\">\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n    </div>\n    <div class=\"dropdown-content\">\n        <div>\n             <div class=\"menu-icon\">\n                <div class=\"bar\"></div>\n                <div class=\"bar\"></div>\n                <div class=\"bar\"></div>\n            </div>\n            <img class=\"menu-logo\" src=\"assets/images/Logo-white.png\"/>\n        </div>\n        <div [routerLink]=\"['/product']\">Product</div>\n        <div [routerLink]=\"['/pricing']\">Pricing</div>\n        <div>Support</div>\n        <div [routerLink]=\"['/about']\">About</div>\n    </div>\n</div>\n<div class=\"header-menu-content\" *ngIf=\"menuOpen\">\n    \n</div>\n<img class=\"header-logo\"  [routerLink]=\"['']\" src=\"assets/images/Logo.svg\"/>\n<ul class=\"header-menu desktop\">\n    <li  [routerLink]=\"['/product']\" routerLinkActive=\"current\">Product</li>\n    <li  [routerLink]=\"['/pricing']\" routerLinkActive=\"current\">Pricing</li>\n    <li>Support</li>\n    <li  [routerLink]=\"['/about']\" routerLinkActive=\"current\">About</li>\n</ul>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div id=\"animation-layout\" [ngStyle]=\"{ width : size[0], height : size[1] }\" (window:resize)=\"onResize($event)\">\n    <div class=\"circle\" \n         *ngFor=\"let circle of circles; let i = index\" \n         [ngStyle]=\"{ \n            top : -circle.radius + center[1], \n            right : -circle.radius  + center[0],   \n            'box-shadow' : circle.shadow,\n            'opacity' :  circle.opacity ,\n            width : circle.radius * 2, \n            height : circle.radius * 2\n        }\" id=\"circle-{{ i }}\" >\n        \n             \n    </div>\n    <div class=\"particle\" \n          [@particle]=\"normal\"\n         *ngFor=\"let particle of particles\" \n         [ngClass]=\"{ gray : particle.color === 'gray' }\"\n         [ngStyle]=\"\n            { \n                opacity : particle.opacity,\n                width : particle.width,\n                height : particle.width,\n                top : -particle.width * 0.5 - particle.borderWidth[0] + center[1],\n                right : -particle.width * 0.5 - particle.borderWidth[0] + center[0],\n                'border-width' : particle.borderWidth[0],\n                transform : 'rotate(' + particle.rotation + 'deg) translate('+(-particle.source[0])+'px,'+particle.source[1]+'px)',\n                'transition' : \n                'opacity 0.5s linear, transform  ' + particle.duration + 'ms cubic-bezier(0.6, 0.4, 0.6, 0.9), \n                width 300ms cubic-bezier(0, 1.5, 1, 1.5), \n                height 300ms cubic-bezier(0, 1.5, 1, 1.5),  \n                top 300ms cubic-bezier(0, 1.5, 1, 1.5),  \n                right 300ms cubic-bezier(0, 1.5, 1, 1.5), \n                border-width 300ms cubic-bezier(0, 1.5, 1, 1.5)'\n            }\"\n        >\n        <div class=\"particle\" \n         *ngIf=\"particle.borderWidth[1]\" \n         [ngStyle]=\"{ \n            'border-width' : particle.borderWidth[1]\n         }\">\n            <div class=\"particle white\" \n                *ngIf=\"particle.borderWidth[2]\" \n                [ngStyle]=\"{ \n                   'border-width' : particle.borderWidth[2]\n                }\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"waves\" app-fade-in>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-1 wave desktop\" >\n        <polygon points=\"0,0 100,100 90,100 50,80 0,100\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-2 wave desktop\" >\n        <polygon points=\"0,0 100,100 90,100 50,80 0,60\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-3 wave desktop\" >\n        <polygon points=\"0,0 50,50 0,25\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"background desktop\">\n        <polygon  points=\"0,0 100,0 100,100 0,76\"/>\n    </svg>\n    \n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-1-mobile wave mobile\" >\n        <polygon points=\"0,0 90,72 0,95\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-2-mobile wave mobile\" >\n        <polygon points=\"0,0 100,0 100,80 0,65\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-3-mobile wave mobile\" >\n        <polygon points=\"0,0 90,34 0,18\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"background mobile\">\n        <polygon  points=\"0,0 100,0 100,85 90,84 0,76\"/>\n    </svg>\n</div>\n    "

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[731]);
//# sourceMappingURL=main.bundle.map