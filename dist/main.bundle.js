webpackJsonp([0,3],{

/***/ 331:
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
        var pageSize = window.innerWidth > 1024 ? 10 : (window.innerWidth > 768 ? 6 : 4);
        var partners = JSON.parse(JSON.stringify(this.partners));
        this.pages = [];
        while (partners.length) {
            this.pages.push(partners.splice(0, pageSize));
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: '[app-home]',
            template: __webpack_require__(673),
            styles: [__webpack_require__(666)],
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

/***/ 384:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 384;


/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(505);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/main.js.map

/***/ }),

/***/ 504:
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
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: '[app-root]',
            template: __webpack_require__(672),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_planetarium_planetarium_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_test_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_carousel_carousel_component__ = __webpack_require__(507);
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
                __WEBPACK_IMPORTED_MODULE_10__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_carousel_carousel_component__["b" /* CarouselPage */]
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

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });


var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.routing.js.map

/***/ }),

/***/ 507:
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
    CarouselPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({ selector: '[carousel-page]' }), 
        __metadata('design:paramtypes', [])
    ], CarouselPage);
    return CarouselPage;
}());
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.currentPage = 0;
        this.time = 5000;
    }
    CarouselComponent.prototype.changePage = function (page) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.currentPage = page;
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.time);
    };
    CarouselComponent.prototype.autoChangePage = function () {
        this.currentPage = (this.currentPage + 1) % this.pages.length;
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.time);
    };
    CarouselComponent.prototype.ngAfterContentInit = function () {
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.time);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ContentChildren */])(CarouselPage), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* QueryList */]) === 'function' && _a) || Object)
    ], CarouselComponent.prototype, "pages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], CarouselComponent.prototype, "currentPage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], CarouselComponent.prototype, "time", void 0);
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: '[app-carousel]',
            inputs: ['nbPages', 'currentPage', 'time'],
            template: __webpack_require__(674),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/carousel.component.js.map

/***/ }),

/***/ 508:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: '[app-footer]',
            template: __webpack_require__(675),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/footer.component.js.map

/***/ }),

/***/ 509:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: '[app-header]',
            template: __webpack_require__(676),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/header.component.js.map

/***/ }),

/***/ 510:
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
            this.size[0] = window.innerWidth;
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
        this.size[0] |= window.innerWidth;
        console.log(this.circles);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            inputs: ['circles', 'center', 'size', 'nbParticles'],
            selector: '[app-planetarium]',
            template: __webpack_require__(677),
            styles: [__webpack_require__(670)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])("particle", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("normal", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ width: 0, height: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])(500)]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("* => void", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: 0 })))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])("circle", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])("normal", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ width: 0, height: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])(2000)])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PlanetariumComponent);
    return PlanetariumComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/planetarium.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__(678),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/test.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/environment.prod.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/var/www/html/corpowebsite/src/src/polyfills.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ":host /deep/ [app-planetarium] > #animation-layout {\n  background-image: -webkit-radial-gradient(circle farthest-side at 100% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 350px, rgba(255, 255, 255, 0.2) 450px, rgba(255, 255, 255, 0.4) 95%, #ffffff 100%);\n  background-image: radial-gradient(circle farthest-side at 100% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 350px, rgba(255, 255, 255, 0.2) 450px, rgba(255, 255, 255, 0.4) 95%, #ffffff 100%);\n}\n[app-planetarium] {\n  height: 85rem;\n}\n.citation-block {\n  margin-top: 15rem;\n  margin-bottom: 15rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  .citation-block {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 8.5rem;\n  }\n}\n.citation-block .portrait {\n  background-image: url(\"assets/images/maxresdefault.jpg\");\n  background-position: 80% 50%;\n  background-size: cover;\n  height: 55rem;\n  width: 55rem;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  z-index: 1;\n}\n@media (max-width: 1023px) {\n  .citation-block .portrait {\n    height: 24rem;\n    width: 40%;\n    background-position: 70% 50%;\n  }\n}\n.citation-block .citation {\n  margin-top: 6rem;\n  position: relative;\n  background: -webkit-linear-gradient(246.63deg, #EEEEEE 0%, #FFFFFF 60%);\n  background: linear-gradient(203.37deg, #EEEEEE 0%, #FFFFFF 60%);\n  padding: 8rem 2rem 2rem 6rem;\n  border-radius: 4px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3C3F48;\n}\n@media (max-width: 1023px) {\n  .citation-block .citation {\n    margin-top: -22rem;\n    padding: 24rem 2rem 2rem 2rem;\n    margin-bottom: 16rem;\n  }\n}\n.citation-block .citation p {\n  font-size: 1.8rem;\n  line-height: 3.4rem;\n  font-weight: 300;\n  text-align: left;\n  position: relative;\n  margin: 2rem 0 1rem;\n}\n@media (max-width: 1023px) {\n  .citation-block .citation p:first-of-type {\n    text-align: center;\n  }\n}\n.citation-block .citation-content {\n  font-size: 4.6rem;\n  font-weight: 300;\n  line-height: 6rem;\n  text-align: left;\n  letter-spacing: 0.5rem;\n}\n@media (max-width: 1023px) {\n  .citation-block .citation-content {\n    text-align: center;\n  }\n}\n.poets {\n  display: inline-block;\n  height: 3.5rem;\n  position: absolute;\n}\n.quote {\n  font-family: Merriweather;\n  font-size: 80px;\n  font-weight: 900;\n  line-height: 101px;\n  opacity: 0.5;\n  position: absolute;\n  left: 3rem;\n  top: -3rem;\n}\n@media (max-width: 1023px) {\n  .quote {\n    left: calc(70% + 4rem);\n  }\n}\n:host /deep/ .schools {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n:host /deep/ .schools .school {\n  width: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin: 4rem auto;\n}\n@media (max-width: 1023px) {\n  :host /deep/ .schools .school {\n    width: 33%;\n  }\n}\n@media (max-width: 768px) {\n  :host /deep/ .schools .school {\n    width: 50%;\n  }\n}\n:host /deep/ .schools .school img {\n  height: 6rem;\n  margin: 0 auto;\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%);\n  opacity: 0.55;\n}\n:host /deep/ .carousel-pagination {\n  margin: 7.5rem auto 13rem !important;\n}\n@media (max-width: 1023px) {\n  :host /deep/ .carousel-pagination {\n    margin: 7.5rem auto 7rem !important;\n  }\n}\n[app-planetarium] {\n  top: 0rem;\n  right: 0;\n  left: 0;\n  height: 85rem;\n}\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n:host /deep/ .carousel {\n  width: 100%;\n  overflow: hidden;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n:host /deep/ .carousel .carousel-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition: margin-left 500ms ease-in;\n  transition: margin-left 500ms ease-in;\n}\n:host /deep/ .carousel [carousel-page] {\n  width: 100%;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n}\n.carousel-pagination {\n  margin: 4rem auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.carousel-pagination .pagination-point {\n  width: 0.9rem;\n  height: 0.9rem;\n  border-radius: 50%;\n  background: #D7D7E2;\n  margin-right: 3rem;\n  cursor: pointer;\n}\n.carousel-pagination .pagination-point:last-of-type {\n  margin-right: 0;\n}\n.carousel-pagination .pagination-point.selected {\n  background: #0DAFAC;\n}\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  background-color: #3B3E48;\n  color: #FFF;\n  padding: 5rem 8rem;\n  font-size: 1.4rem;\n  font-weight: 300;\n  line-height: 3rem;\n}\n@media (max-width: 1100px) {\n  :host {\n    padding: 5rem 1rem;\n  }\n}\n:host .footer-content {\n  width: 100%;\n  max-width: 110rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n}\n.footer-column {\n  padding: 0 1rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.footer-column:first-of-type {\n  border-right: solid 1px #585D6E;\n  width: 46rem;\n  margin-right: 2rem;\n}\n@media (max-width: 1100px) {\n  .footer-column:first-of-type {\n    width: 26rem;\n    padding-right: 4rem;\n  }\n}\n.footer-column .footer-title {\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.footer-column ul {\n  margin: 0;\n  padding: 0;\n}\n.footer-column ul li {\n  list-style: none;\n  cursor: pointer;\n  font-weight: 300;\n  line-height: 4rem;\n}\n.footer-logo {\n  filter: contrast(0) brightness(100);\n  -webkit-filter: contrast(0) brightness(100);\n}\n.social-media {\n  font-size: 1.6rem;\n  cursor: pointer;\n  float: left;\n  filter: contrast(0) brightness(100);\n  -webkit-filter: contrast(0) brightness(100);\n  margin-right: 2rem;\n}\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 110rem;\n  margin: 3rem auto 0 auto;\n  padding: 0 1rem;\n}\n:host .header-logo {\n  margin-right: auto;\n  margin-left: 1rem;\n}\n:host .header-menu {\n  margin: 0;\n}\n:host .header-menu li {\n  font-size: 1.4rem;\n  line-height: 1.9rem;\n  font-weight: 600;\n  text-align: center;\n  color: #3C3F48;\n  list-style: none;\n  display: inline-block;\n  margin-right: 2.5rem;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  z-index: -1;\n}\n#animation-layout {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.circle {\n  border-radius: 50%;\n  border: solid 1px #e2e2e2;\n  box-shadow: -5px 5px 30px 0px rgba(0, 0, 0, 0.1);\n  position: absolute;\n  opacity: 1;\n  z-index: -3;\n  -webkit-transition: top 2s, right 2s;\n  transition: top 2s, right 2s;\n}\n.particle {\n  border-radius: 50%;\n  border-style: solid;\n  border-color: #0DAFAC;\n  width: 0;\n  right: 0;\n  top: 0;\n  height: 0;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: -2;\n  overflow: visible;\n  box-sizing: content-box;\n}\n.particle > .particle {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n  border-color: white;\n  box-sizing: border-box;\n}\n.particle .white {\n  border-color: #0DAFAC;\n  background: #FFF;\n}\n.particle.gray {\n  border-color: #5d5e63;\n}\n.particle.gray .white {\n  border-color: #5d5e63;\n  background: #FFF;\n}\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<header app-header></header>\n<router-outlet></router-outlet>\n<footer app-footer></footer>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div app-planetarium \n     [circles]=\"circles\" \n     [center]=\"[0, 50]\" [nbParticles]=\"15\" \n     [size]=\"[0,800]\"\n     ></div>\n<h1>The Social Learning Environment<span class=\"blue\"><b>*</b></span> for <span class=\"no-break\">B-Schools.</span></h1>\n<div class=\"block\">\n    <p>\n        <span class=\"blue\"><b>*</b></span><b>Engagement</b> online is at <u>the heart of our product design</u>.<br class='desktop'/> \n        This is why we have developped a technology combining a state-of-the-art <br class='desktop'/>\n        Learning Management System with 21st-Century social networking tools.\n    </p>\n    <button class=\"button\">See Our Product<span class=\"arrow\">></span></button>\n</div>\n<div class=\"block citation-block\">\n    <div class=\"portrait\"></div>\n    <div class=\"citation\">\n        <div class=\"quote\">“</div>\n        <div class=\"citation-content\">THE POWER OF NETWORKED EDUCATION</div>\n        <p>\n            <b>Edward Snyder</b>, Dean of Yale School of Management\n        </p>\n        <p>\n            ‘Dean of the year 2015’ by <img class=\"poets\" src=\"assets/images/Poets-Quants-logo.jpg\" />\n        </p>\n\n    </div>\n</div>\n<div class=\"block small-text\">\n    THEY TRUST US\n</div>\n<div app-carousel  (window:resize)=\"onResize($event)\" >\n    <div carousel-page *ngFor=\"let page of pages\" class=\"schools\">\n        <div class=\"school\" *ngFor=\"let school of page\">\n            <img src=\"{{ school }}\"/>                    \n        </div>\n    </div>\n</div>\n\n<div class=\"slider\">\n    <div class=\"slider-point selected\"></div>\n    <div class=\"slider-point\"></div>\n    <div class=\"slider-point\"></div>\n</div>\n       "

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <div  class=\"carousel-content\" \n        [ngStyle]=\"{ 'margin-left' : (-currentPage * 100) + '%' }\">\n        <ng-content></ng-content>\n        \n    </div> \n</div>\n<div class=\"carousel-pagination\"  *ngIf=\"pages.length > 1\">\n    <div class=\"pagination-point\" \n         *ngFor=\"let page of pages;let i = index; \" \n         (click)=\"changePage(i)\"\n         [ngClass]=\"{ selected : i === currentPage }\"\n         ></div>\n</div>"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-content\">\n    <div class=\"footer-column\">\n        <img class=\"footer-logo\" src=\"assets/images/Logo.svg\"/>\n        <p>\n            Marketers/advertisers usually focus their efforts on the people responsible for making the purchase. <br/>\n            Copyright © 2017, Shipped from Monaco, FRA.\n        </p>\n    </div>\n    <div class=\"footer-column\">\n        <div class=\"footer-title\">Using Twic</div>\n        <ul>\n            <li>Product</li>\n            <li>Pricing</li>\n            <li>Support</li>\n            <li>Guides</li>\n        </ul>\n    </div>\n    <div class=\"footer-column\">\n        <div class=\"footer-title\">Twic</div> \n        <ul>\n            <li>About</li>\n            <li>Partners</li>\n            <li>Blog</li>\n        </ul>\n    </div>\n    <div class=\"footer-column\">\n        <div class=\"footer-title\">Legal</div>\n        <ul>\n            <li>Privacy</li>\n            <li>Security</li>\n            <li>Terms of service</li>\n        </ul>\n    </div>\n    <div class=\"footer-column\">\n        <div class=\"footer-title\">Handy links</div>\n        <ul>\n            <li>Download App</li>\n            <li>Status</li>\n            <li>FERPA and WCAG</li>\n        </ul>\n    </div>\n    <div class=\"footer-column\">\n        <div class=\"footer-title\">Contact us</div>\n        <span class=\"icon icon-facebook social-media\"></span>\n        <span class=\"icon icon-twitter social-media\"></span>\n        <span class=\"icon icon-linkedin2 social-media\"></span>\n    </div>\n</div>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "\n\n<img class=\"header-logo\" src=\"assets/images/Logo.svg\"/>\n<ul class=\"header-menu\">\n    <li>Product</li>\n    <li>Pricing</li>\n    <li>Support</li>\n    <li>About</li>\n</ul>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div id=\"animation-layout\" [ngStyle]=\"{ width : size[0], height : size[1] }\" (window:resize)=\"onResize($event)\">\n    <div class=\"circle\" \n         *ngFor=\"let circle of circles\" \n         [ngStyle]=\"{ \n            top : -circle.radius + center[1], \n            right : -circle.radius  + center[0],   \n            'box-shadow' : circle.shadow,\n            'opacity' :  circle.opacity ,\n            width : circle.radius * 2, \n            height : circle.radius * 2\n        }\" \n         [@circle]=\"normal\" >\n        \n             \n    </div>\n    <div class=\"particle\" \n          [@particle]=\"normal\"\n         *ngFor=\"let particle of particles\" \n         [ngClass]=\"{ gray : particle.color === 'gray' }\"\n         [ngStyle]=\"\n            { \n                opacity : particle.opacity,\n                width : particle.width,\n                height : particle.width,\n                top : -particle.width * 0.5 - particle.borderWidth[0] + center[1],\n                right : -particle.width * 0.5 - particle.borderWidth[0] + center[0],\n                'border-width' : particle.borderWidth[0],\n                transform : 'rotate(' + particle.rotation + 'deg) translate('+(-particle.source[0])+'px,'+particle.source[1]+'px)',\n                'transition' : \n                'opacity 0.5s linear, transform  ' + particle.duration + 'ms cubic-bezier(0.6, 0.4, 0.6, 0.9), \n                width 300ms cubic-bezier(0, 1.5, 1, 1.5), \n                height 300ms cubic-bezier(0, 1.5, 1, 1.5),  \n                top 300ms cubic-bezier(0, 1.5, 1, 1.5),  \n                right 300ms cubic-bezier(0, 1.5, 1, 1.5), \n                border-width 300ms cubic-bezier(0, 1.5, 1, 1.5)'\n            }\"\n        >\n        <div class=\"particle\" \n         *ngIf=\"particle.borderWidth[1]\" \n         [ngStyle]=\"{ \n            'border-width' : particle.borderWidth[1]\n         }\">\n            <div class=\"particle white\" \n                *ngIf=\"particle.borderWidth[2]\" \n                [ngStyle]=\"{ \n                   'border-width' : particle.borderWidth[2]\n                }\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ })

},[697]);
//# sourceMappingURL=main.bundle.map