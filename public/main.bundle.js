webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-new/add-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table,td,tr{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.bt,.rw{\r\n    border: solid white 1px;\r\n}\r\nbutton{\r\n    padding: 10px;\r\n    font-size: 16px;\r\n}\r\n.rw{\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-new/add-new.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head></head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <td>Category</td>\n          <td><select name=\"cat\">\n              <option *ngFor=\"let cat of categories\">{{cat.category}}</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td>Entity</td>\n          <td><input type=\"text\" id=\"ent\"></td>\n        </tr>\n        <tr>\n          <td>Information</td>\n          <td><input type=\"text\" id=\"info\"></td>\n        </tr>\n        <tr>\n          <td>Keywords</td>\n          <td><input type=\"text\" id=\"key\"></td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"add($event)\">Add</button></td>\n          <td class=\"rw\"><button type=\"reset\">Clear</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"cancle($event)\">Cancle</button></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/add-new/add-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewComponent = /** @class */ (function () {
    function AddNewComponent(router) {
        this.router = router;
        this.categories = [
            {
                category: 'Admission'
            },
            {
                category: 'College'
            },
            {
                category: 'Department'
            },
            {
                category: 'Library'
            },
            {
                category: 'Event'
            }
        ];
    }
    AddNewComponent.prototype.ngOnInit = function () {
    };
    AddNewComponent.prototype.add = function (event) {
        var uname = (document.getElementById('ent').value);
        var pass = (document.getElementById('info').value);
        console.log(uname + pass);
    };
    AddNewComponent.prototype.cancle = function (event) {
        this.router.navigate(['dashboard']);
    };
    AddNewComponent.prototype.clear = function (event) {
        console.log("Clear");
    };
    AddNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-new',
            template: __webpack_require__("../../../../../src/app/add-new/add-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-new/add-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AddNewComponent);
    return AddNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admission/admission.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}\r\n\r\ntable,th{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\ntable{\r\n    margin-top: 50px; \r\n}\r\n\r\ninput{\r\n    height: 25px;\r\n    border-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.bt{\r\n    border: solid white 1px;\r\n}\r\n\r\nbutton{\r\n    padding: 10px;\r\n}\r\n\r\n.rw{\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admission/admission.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  </head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <th>Keywords</th>\n          <th>Information</th>\n          <th>Entities</th>\n        </tr>\n        <tr *ngFor=\"let quess of ques\">\n          <td><input type=\"text\" id=\"que\" value={{quess.key}}></td>\n          <td><input type=\"text\" id=\"ans\" value={{quess.info}}></td>\n          <td><input type=\"text\" id=\"ent\" value={{quess.ent}}></td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"add($event)\">Add</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"update($event)\">Update</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"delete($event)\">Delete</button></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/admission/admission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmissionComponent = /** @class */ (function () {
    function AdmissionComponent(router) {
        this.router = router;
        this.textValue = "";
        this.ques = [
            {
                key: 'Where is location?',
                info: 'Warananagar',
                ent: 'location'
            },
            {
                key: 'What is Time?',
                info: '9 AM',
                ent: 'time'
            },
            {
                key: 'Where is CSE?',
                info: 'Warananagar',
                ent: 'location'
            }
        ];
        //this.loadPeople();
    }
    AdmissionComponent.prototype.ngOnInit = function () {
    };
    AdmissionComponent.prototype.add = function (event) {
        this.router.navigate(['addnew']);
    };
    AdmissionComponent.prototype.update = function (event) {
        console.log("Update Done");
    };
    AdmissionComponent.prototype.delete = function (event) {
        this.router.navigate(['delete']);
    };
    AdmissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admission',
            template: __webpack_require__("../../../../../src/app/admission/admission.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admission/admission.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AdmissionComponent);
    return AdmissionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  margin:0;\r\n  background-color: black;\r\n}\r\n\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n.rounded-btn {\r\n  border-radius: 50px;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  background: $topnav-background-color;\r\n  border: 2px solid rgba(255, 255, 255, 0.8);\r\n  font-size: 18px;\r\n  line-height: 40px;\r\n  padding: 0 25px;\r\n}\r\n\r\n.rounded-btn:hover,\r\n.rounded-btn:focus,\r\n.rounded-btn:active,\r\n.rounded-btn:visited {\r\n  color: rgba(255, 255, 255, 1);\r\n  border: 2px solid rgba(255, 255, 255, 1);\r\n  outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\r\n <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_library_component__ = __webpack_require__("../../../../../src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__department_department_component__ = __webpack_require__("../../../../../src/app/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admission_admission_component__ = __webpack_require__("../../../../../src/app/admission/admission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__college_college_component__ = __webpack_require__("../../../../../src/app/college/college.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_new_add_new_component__ = __webpack_require__("../../../../../src/app/add-new/add-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__delete_delete_component__ = __webpack_require__("../../../../../src/app/delete/delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__routes__["a" /* routes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__department_department_component__["a" /* DepartmentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admission_admission_component__["a" /* AdmissionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__college_college_component__["a" /* CollegeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_new_add_new_component__["a" /* AddNewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__delete_delete_component__["a" /* DeleteComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/college/college.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}\r\n\r\ntable,th{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\ntable{\r\n    margin-top: 50px; \r\n}\r\n\r\ninput{\r\n    height: 25px;\r\n    border-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.bt{\r\n    border: solid white 1px;\r\n}\r\n\r\nbutton{\r\n    padding: 10px;\r\n}\r\n\r\n.rw{\r\n    padding: 10px;\r\n}\r\n\r\n#info{\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/college/college.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  </head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <th>Keywords</th>\n          <th>Information</th>\n          <th>Entities</th>\n        </tr>\n        <tr *ngFor=\"let quess of ques\">\n          <td><input type=\"text\" id=\"key\" value={{quess.key}}></td>\n          <td><input type=\"text\" id=\"info\" value={{quess.info}}></td>\n          <td><input type=\"text\" id=\"ent\" value={{quess.ent}}></td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"add($event)\">Add</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"update($event)\">Update</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"delete($event)\">Delete</button></td>\n        </tr>\n      </table>\n    </form>\n\n    <!--input [(ngModel)]='d'> \n    Value:{{d}}-->\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/college/college.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollegeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollegeComponent = /** @class */ (function () {
    function CollegeComponent(router) {
        this.router = router;
        this.textValue = "";
        this.d = "";
        this.ques = [
            {
                key: 'HOD',
                info: 'Prof. A. G. Patil is HOD of Computer Science & Engineering',
                ent: 'CseEntity'
            },
            {
                key: 'divisions',
                info: 'Three divisions are available for 2nd year admission',
                ent: 'CseEntity'
            },
            {
                key: 'class Co-ordinator',
                info: 'BE class Co-ordinator is G. V Patil Sir.',
                ent: 'CseEntity'
            }
        ];
        //this.loadPeople();
    }
    CollegeComponent.prototype.ngOnInit = function () {
    };
    CollegeComponent.prototype.add = function (event) {
        this.router.navigate(['addnew']);
    };
    CollegeComponent.prototype.update = function (event) {
        alert('Updated');
    };
    CollegeComponent.prototype.delete = function (event) {
        this.router.navigate(['delete']);
    };
    CollegeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-college',
            template: __webpack_require__("../../../../../src/app/college/college.component.html"),
            styles: [__webpack_require__("../../../../../src/app/college/college.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CollegeComponent);
    return CollegeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}\r\n\r\n#logout{\r\n    background-color: #f38077;\r\n    color: rgb(247, 245, 244);\r\n    padding: 10px 25px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-left: 1024px;\r\n    font: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n#title\r\n{\r\n    color:coral;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n#data{\r\n    padding: 14px 25px;\r\n    margin-left: 850px;\r\n    font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n</head>\r\n<body>\r\n    <form (submit)=\"logoutUser()\">\r\n        <label id=\"data\">Welcome, {{data}}</label>\r\n        <button type=\"submit\" value=\"LogOut\" id=\"logout\">Submit</button>\r\n    </form>\r\n    <h1 id=\"title\">{{title}}</h1>\r\n    <marquee behavior=\"alternate\" direction=\"left\" scrollamount=\"5\">\r\n        <img src=\"assets/Images/i-bot.png\" alt=\"Not Available\" height=\"300\">\r\n        <img src=\"assets/Images/cs.png\" alt=\"Not Available\" height=\"300\">\r\n        <img src=\"assets/Images/slk.jpg\" alt=\"Not Available\" height=\"300\">\r\n        <img src=\"assets/Images/ask.jpg\" alt=\"Not Available\" height=\"300\">\r\n        <img src=\"assets/Images/time.png\" alt=\"Not Available\" height=\"300\">\r\n    </marquee>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.data = "Ranjit";
        this.temp = "i-bot.png";
        this.title = "Wel-Come to TKIET Bot Service";
        var uname = sessionStorage.getItem("userName");
        var pass = sessionStorage.getItem("password");
        this.data = uname;
        if (uname === null || pass === null) {
            this.router.navigate(['/login']);
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logoutUser = function (e) {
        sessionStorage.clear();
        this.router.navigate(['login']);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table,td,tr{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.bt,.rw{\r\n    border: solid white 1px;\r\n}\r\nbutton{\r\n    padding: 10px;\r\n    font-size: 16px;\r\n}\r\n.rw{\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head></head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <td>Category</td>\n          <td>\n            <select name=\"cat\">\n              <option *ngFor=\"let cat of categories\">{{cat.category}}</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td>Keywords</td>\n          <td>\n            <select name=\"key\">\n              <option *ngFor=\"let key of keywords\">{{key.keyword}}</option>\n            </select>\n          </td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"delete($event)\">Delete</button></td>\n          <td class=\"rw\"><button type=\"reset\">Clear</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"cancle($event)\">Cancle</button></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(router) {
        this.router = router;
        this.categories = [
            {
                category: 'Admission'
            },
            {
                category: 'College'
            },
            {
                category: 'Department'
            },
            {
                category: 'Library'
            },
            {
                category: 'Event'
            }
        ];
        this.keywords = [
            {
                keyword: 'established'
            },
            {
                keyword: 'college name'
            },
            {
                keyword: 'code'
            },
            {
                keyword: 'chairman'
            }
        ];
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent.prototype.delete = function (event) {
    };
    DeleteComponent.prototype.cancle = function (event) {
        this.router.navigate(['dashboard']);
    };
    DeleteComponent.prototype.clear = function (event) {
        console.log("Clear");
    };
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete',
            template: __webpack_require__("../../../../../src/app/delete/delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/department/department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}\r\n\r\ntable,th{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\ntable{\r\n    margin-top: 50px; \r\n}\r\n\r\ninput{\r\n    height: 25px;\r\n    border-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.bt{\r\n    border: solid white 1px;\r\n}\r\n\r\nbutton{\r\n    padding: 10px;\r\n}\r\n\r\n.rw{\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/department/department.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  </head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <th>Keywords</th>\n          <th>Information</th>\n          <th>Entities</th>\n        </tr>\n        <tr *ngFor=\"let quess of ques\">\n          <td><input type=\"text\" id=\"que\" value={{quess.key}}></td>\n          <td><input type=\"text\" id=\"ans\" value={{quess.info}}></td>\n          <td><input type=\"text\" id=\"ent\" value={{quess.ent}}></td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"add($event)\">Add</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"update($event)\">Update</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"delete($event)\">Delete</button></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/department/department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(router) {
        this.router = router;
        this.ques = [
            {
                key: 'Where is location?',
                info: 'Warananagar',
                ent: 'location'
            },
            {
                key: 'What is Time?',
                info: '9 AM',
                ent: 'time'
            },
            {
                key: 'Where is CSE?',
                info: 'Warananagar',
                ent: 'location'
            }
        ];
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    DepartmentComponent.prototype.add = function (event) {
        this.router.navigate(['addnew']);
    };
    DepartmentComponent.prototype.update = function (event) {
        console.log("Update Done");
    };
    DepartmentComponent.prototype.delete = function (event) {
        this.router.navigate(['delete']);
    };
    DepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-department',
            template: __webpack_require__("../../../../../src/app/department/department.component.html"),
            styles: [__webpack_require__("../../../../../src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}\r\n\r\ntable,th{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\ntable{\r\n    margin-top: 50px; \r\n}\r\n\r\ninput{\r\n    height: 25px;\r\n    border-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.bt{\r\n    border: solid white 1px;\r\n}\r\n\r\nbutton{\r\n    padding: 10px;\r\n}\r\n\r\n.rw{\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  </head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <th>Keywords</th>\n          <th>Information</th>\n          <th>Entities</th>\n        </tr>\n        <tr *ngFor=\"let quess of ques\">\n          <td><input type=\"text\" id=\"que\" value={{quess.key}}></td>\n          <td><input type=\"text\" id=\"ans\" value={{quess.info}}></td>\n          <td><input type=\"text\" id=\"ent\" value={{quess.ent}}></td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"add($event)\">Add</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"update($event)\">Update</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"delete($event)\">Delete</button></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(router) {
        this.router = router;
        this.textValue = "";
        this.ques = [
            {
                key: 'Where is location?',
                info: 'Warananagar',
                ent: 'location'
            },
            {
                key: 'What is Time?',
                info: '9 AM',
                ent: 'time'
            },
            {
                key: 'Where is CSE?',
                info: 'Warananagar',
                ent: 'location'
            }
        ];
        //this.loadPeople();
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.add = function (event) {
        this.router.navigate(['addnew']);
    };
    EventComponent.prototype.update = function (event) {
        console.log("Update Done");
    };
    EventComponent.prototype.delete = function (event) {
        this.router.navigate(['delete']);
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("../../../../../src/app/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {margin:0px;;\r\npadding: 0px;}\r\n\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color:grey;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  </head>\n  <body>\n      <div class=\"topnav\">\n        <a class=\"\"><h2>{{collegeName}}</h2></a>\n      </div>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.collegeName = 'Tatyasaheb Kore Institute of Technology and Engineering, Warananagar';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/library/library.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}\r\n\r\ntable,th{\r\n    border: solid black 1px;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\ntable{\r\n    margin-top: 50px; \r\n}\r\n\r\ninput{\r\n    height: 25px;\r\n    border-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.bt{\r\n    border: solid white 1px;\r\n}\r\n\r\nbutton{\r\n    padding: 10px;\r\n}\r\n\r\n.rw{\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  </head>\n  <body>\n    <form action=\"\">\n      <table align=\"center\">\n        <tr>\n          <th>Keywords</th>\n          <th>Information</th>\n          <th>Entities</th>\n        </tr>\n        <tr *ngFor=\"let quess of ques\">\n          <td><input type=\"text\" id=\"que\" value={{quess.key}}></td>\n          <td><input type=\"text\" id=\"ans\" value={{quess.info}}></td>\n          <td><input type=\"text\" id=\"ent\" value={{quess.ent}}></td>\n        </tr>\n      </table>\n      <table align=\"center\" class=\"bt\">\n        <tr>\n          <td class=\"rw\"><button type=\"button\" (click)=\"add($event)\">Add</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"update($event)\">Update</button></td>\n          <td class=\"rw\"><button type=\"button\" (click)=\"delete($event)\">Delete</button></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(router) {
        this.router = router;
        this.textValue = "";
        this.ques = [
            {
                key: 'Where is location?',
                info: 'Warananagar',
                ent: 'location'
            },
            {
                key: 'What is Time?',
                info: '9 AM',
                ent: 'time'
            },
            {
                key: 'Where is CSE?',
                info: 'Warananagar',
                ent: 'location'
            }
        ];
        //this.loadPeople();
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent.prototype.add = function (event) {
        this.router.navigate(['addnew']);
    };
    LibraryComponent.prototype.update = function (event) {
        console.log("Update Done");
    };
    LibraryComponent.prototype.delete = function (event) {
        this.router.navigate(['delete']);
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("../../../../../src/app/library/library.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/Images/clg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "clg.84df9710d919336b3dd6.jpg";

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.logo {\r\n    width: 213px;\r\n    height: 36px;    \r\n    margin: 10px auto;\r\n}\r\n\r\n.login-block {\r\n    width: 620px;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border-top: 5px solid #ff656c;\r\n    margin: 0 auto;\r\n}\r\n\r\n.login-block h1 {\r\n    text-align: center;\r\n    color: #000;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-block input {\r\n    width: 100%;\r\n    height: 42px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    font-family: Montserrat;\r\n    padding: 0 20px 0 50px;\r\n    outline: none;\r\n}\r\n\r\n.login-block input:active, .login-block input:focus {\r\n    border: 1px solid #ff656c;\r\n}\r\n\r\n.login-block button {\r\n    width: 100%;\r\n    height: 40px;\r\n    background: #ff656c;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #e15960;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-family: Montserrat;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-block button:hover {\r\n    background: #ff7b81;\r\n}\r\n\r\na{\r\n    font-size: 20px;\r\n    margin-left: 150px;\r\n    text-decoration: none;\r\n}\r\n\r\n.back{\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/app/login/Images/clg.jpg")) + ");\r\n    background-repeat: no-repeat;\r\n    padding-bottom:160px; \r\n    background-position: center;\r\n}\r\n\r\nh3{\r\n    color:red;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  </head>\n  <body>\n    <h1 class=\"back\"></h1>\n        <form (submit)=\"loginUser()\">\n        <div class=\"login-block\">\n            <h1>Login</h1>\n            <h3 *ngIf=\"logInFail==true\">Authentication Failed</h3>\n            <input type=\"text\" value=\"\" placeholder=\"Username\" id=\"username\" />\n            <input type=\"password\" value=\"\" placeholder=\"Password\" id=\"password\" />\n            <a routerLink=\"/registration\">Register</a>\n            <a routerLink=\"\">Forgot Password?</a><br><br><br>\n            <button type=\"submit\" value=\"login\">Submit</button><br><br>\n            <button type=\"reset\">Cancle</button>            \n        </div>\n    </form>\n    </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.logInFail = false;
        //this.loadPeople();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (e) {
        var uname = (document.getElementById('username').value);
        var pass = (document.getElementById('password').value);
        //this.loadPeople();
        if (uname === 'admin' && pass === '1234') {
            this.name = uname;
            this.password = pass;
            sessionStorage.setItem("userName", uname);
            sessionStorage.setItem("password", pass);
            this.router.navigate(['dashboard']);
        }
        else {
            this.logInFail = true;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-left: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "\n<html>\n    <head>\n\n    </head>\n    <body>\n        <h1>The page you're looking for is not present.</h1>\n    </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th{\r\n      text-align: center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n  }\r\n\r\nlegend {\r\n    font-size: 1.4em;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntable{\r\n  border: solid black 1px;\r\n  background-color: rgb(185, 177, 177);\r\n  padding: 50px;\r\n}\r\n\r\nlabel{\r\n  padding: 5px;\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\ninput{\r\n  padding: 10px;\r\n  width: 300px;\r\n  border: 2px solid #3ac162;\r\n  border-radius: 10px;\r\n  padding: 20px; \r\n}\r\n\r\ntr,td{\r\n    padding: 20px 50px 10px 30px;\r\n    text-align: right;\r\n}\r\n\r\nbutton {\r\n    padding: 19px 39px 18px 39px;\r\n    color: #FFF;\r\n    background-color: #4bc970;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    font-style: normal;\r\n    border-radius: 5px;\r\n    width: 150px;\r\n    border: 1px solid #3ac162;\r\n    border-width: 1px 1px 3px;\r\n    -webkit-box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n            box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n#reg {\r\n    text-decoration: none;\r\n    border: 1px solid #3ac162;\r\n    padding: 20px 39px 20px 39px;\r\n    background-color: #4bc970;\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n    border-width: 1px 1px 3px;\r\n    color: white;\r\n    margin-left: 50px;\r\n  }\r\n\r\n#err{\r\n    color: red;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    \n  </head>\n  <body><br>\n    <h1>Registration Form</h1>\n    <form (submit)=\"regUser()\">\n      <table align=\"center\">\n        <tr>\n          <td><label for=\"fname\">First Name:</label></td>\n          <td><input type=\"text\" id=\"fname\" name=\"fname\"></td>\n          <td><label *ngIf=\"fn===false\" id=\"err\">Fail</label></td>\n        </tr>\n        <tr>\n          <td><label for=\"lname\">Last Name:</label></td>\n          <td><input type=\"text\" id=\"lname\"></td>\n          <td><label *ngIf=\"ln===false\" id=\"err\">Fail</label></td>   \n        </tr>\n        <tr>\n          <td><label for=\"mail\">Email:</label></td>\n          <td><input type=\"email\" id=\"email\"></td>\n          <td><label *ngIf=\"em===false\" id=\"err\">Fail</label></td>\n        </tr>\n        <tr>\n          <td><label for=\"password\">Password:</label></td>\n          <td><input type=\"password\" id=\"password\"></td>\n          <td><label *ngIf=\"ps===false\" id=\"err\">Fail</label></td>\n        </tr>\n        <tr>\n          <td  style=\"padding-right:35px\"><button type=\"submit\">Register</button></td>\n          <td style=\"text-align:left\"><button type=\"reset\">Clear</button>\n          <a id=\"reg\" routerLink=\"/\">Log In</a></td>\n        </tr>\n      </table>\n    </form>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router) {
        this.router = router;
        this.fn = true;
        this.ln = true;
        this.em = true;
        this.ps = true;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.regUser = function (e) {
        var fname = (document.getElementById('fname').value);
        var lname = (document.getElementById('lname').value);
        var email = (document.getElementById('email').value);
        var pass = (document.getElementById('password').value);
        if (fname === "") {
            this.fn = false;
        }
        else {
            this.fn = true;
        }
        if (lname === "") {
            this.ln = false;
        }
        else {
            this.ln = true;
        }
        if (email === "") {
            this.em = false;
        }
        else {
            this.em = true;
        }
        if (pass === "") {
            this.ps = false;
        }
        else {
            this.ps = true;
        }
        if (this.fn == true && this.ln == true && this.em == true && this.ps == true) {
            alert('Registration Successfully ' + fname + lname + email + pass);
            //this.router.navigate(['dashboard']);
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_library_component__ = __webpack_require__("../../../../../src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__department_department_component__ = __webpack_require__("../../../../../src/app/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admission_admission_component__ = __webpack_require__("../../../../../src/app/admission/admission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__college_college_component__ = __webpack_require__("../../../../../src/app/college/college.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_new_add_new_component__ = __webpack_require__("../../../../../src/app/add-new/add-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__delete_delete_component__ = __webpack_require__("../../../../../src/app/delete/delete.component.ts");











var routes = [
    {
        path: 'library',
        component: __WEBPACK_IMPORTED_MODULE_0__library_library_component__["a" /* LibraryComponent */]
    },
    {
        path: 'department',
        component: __WEBPACK_IMPORTED_MODULE_1__department_department_component__["a" /* DepartmentComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'event',
        component: __WEBPACK_IMPORTED_MODULE_2__event_event_component__["a" /* EventComponent */]
    },
    {
        path: 'admission',
        component: __WEBPACK_IMPORTED_MODULE_3__admission_admission_component__["a" /* AdmissionComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'registration',
        component: __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: 'college',
        component: __WEBPACK_IMPORTED_MODULE_8__college_college_component__["a" /* CollegeComponent */]
    },
    {
        path: 'addnew',
        component: __WEBPACK_IMPORTED_MODULE_9__add_new_add_new_component__["a" /* AddNewComponent */]
    },
    {
        path: 'delete',
        component: __WEBPACK_IMPORTED_MODULE_10__delete_delete_component__["a" /* DeleteComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tbackground-color: #d5dae5;\r\n\t-webkit-font-smoothing: antialiased;\r\n  \t-moz-osx-font-smoothing: grayscale;\r\n}\r\n.header {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tz-index: 3;\r\n\theight: 44px;\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 3px solid #2d3d51;\r\n}\r\n/* logo in header(mobile version) and side-nav (tablet & desktop) */\r\n.logo {\r\n\theight: 44px;\r\n\tpadding: 10px;\r\n\tfont-weight: 700;\r\n}\r\n.header .logo {\r\n\tcolor: #233245;\r\n}\r\n.side-nav .logo {\r\n\tbackground-color: #233245;\r\n\tcolor: #fff;\r\n}\r\n.header .logo {\r\n\tfloat: left;\r\n}\r\n.header .logo {\r\n\theight: 44px;\r\n\tz-index: 1;\r\n\tpadding: 10px;\r\n\tfont-weight: 700;\r\n\tcolor: #aeaeaf;\r\n}\r\n.logo  i {\r\n\tfont-size: 22px;\r\n}\r\n.logo span {\r\n\tmargin-left: 5px;\r\n\ttext-transform: uppercase;\r\n}\r\n.nav-trigger {\r\n\tposition: relative;\r\n\tfloat: right;\r\n\twidth: 20px;\r\n\theight: 44px;\r\n\tright: 30px;\r\n\tdisplay: block;\t\r\n}\r\n.nav-trigger span, .nav-trigger span:before, span:after {\r\n\twidth: 20px;\r\n\theight: 2px;\r\n\tbackground-color: #35475e;\r\n\tposition: absolute;\r\n}\r\n.nav-trigger span {\r\n\ttop: 50%;\r\n}\r\n.nav-trigger span:before, .nav-trigger span:after {\r\n\tcontent: '';\r\n}\r\n.nav-trigger span:before {\r\n\ttop: -6px;\r\n}\r\n.nav-trigger span:after {\r\n\ttop: 6px;\r\n}\r\n/* side navigation styles */\r\n.side-nav {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 90vh;\r\n\tbackground-color: #93bad1;\r\n\tz-index: 1;\r\n\tdisplay: none;\r\n}\r\n.side-nav.visible {\r\n\tdisplay: block;\r\n}\r\n.side-nav ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.side-nav ul li {\r\n\tpadding: 16px 16px;\r\n\tborder-bottom: 1px solid #3c506a;\r\n\tposition: relative;\r\n}\r\n.side-nav ul li.active:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\twidth: 4px;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbackground-color: #fff;\r\n}\r\n.side-nav ul li a {\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n}\r\n.side-nav ul li i {\r\n\tcolor: #0497df;\r\n\tmin-width: 20px;\r\n\ttext-align: center;\r\n}\r\n.side-nav ul li span:nth-child(2) {\r\n\tmargin-left: 10px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n}\r\n/* main content styles */\r\n.main-content {\r\n\tpadding: 40px;\r\n\tmargin-top: 0;\r\n\tpadding: 0;\r\n\tpadding-top: 44px;\r\n\theight: 100%;\r\n\toverflow: scroll;\r\n}\r\n.main-content .title {\r\n\tbackground-color: #eef1f7;\r\n\tborder-bottom: 1px solid #b8bec9;\r\n\tpadding: 10px 20px;\r\n\tfont-weight: 700;\r\n\tcolor: #333;\r\n\tfont-size: 18px;\r\n}\r\n/* set element styles to fit tablet and higher(desktop) */\r\n@media screen and (min-width: 600px) {\r\n\t.header {\r\n\t\tbackground-color: #35475e;\r\n\t\tz-index: 0;\r\n\t}\r\n\t.header .logo {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.nav-trigger {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.nav-trigger span, .nav-trigger span:before, span:after {\r\n\t\tbackground-color: #fff;\r\n\t}\r\n\t.side-nav {\r\n\t\tdisplay: block;\r\n\t\twidth: 70px;\r\n\t\tz-index: 2;\r\n\t}\r\n\t.side-nav ul li span:nth-child(2) {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.side-nav .logo i {\r\n\t\tpadding-left: 12px;\r\n\t}\r\n\t.side-nav .logo span {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.side-nav ul li i {\r\n\t\tfont-size: 26px;\r\n\t}\r\n\t.side-nav ul li a {\r\n\t\ttext-align: center;\r\n\t}\r\n\t.main-content {\r\n\t\tmargin-left: 70px;\r\n\t}\r\n}\r\n/* set element styles for desktop */\r\n@media screen and (min-width: 800px) {\r\n\t.side-nav {\r\n\t\twidth: 200px;\r\n\t}\r\n\t.side-nav ul li span:nth-child(2) {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t.side-nav ul li i {\r\n\t\tfont-size: 16px;\r\n\t}\r\n\t.side-nav ul li a {\r\n\t\ttext-align: left;\r\n\t}\r\n\t.side-nav .logo i {\r\n\t\tpadding-left: 0;\r\n\t}\r\n\t.side-nav .logo span {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t.main-content {\r\n\t\tmargin-left: 200px;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t</head>\n\t<body>\n\t\n\n    <div class=\"side-nav\">\n      <nav>\n        <ul>\n            <li>\n                <a routerLink=\"/dashboard\">\n                <span><i class=\"fa fa-user\"></i></span>\n                    <span>Profile</span>\n                </a>\n            </li>\n          <li>\n            <a routerLink=\"/college\">\n              <span><i class=\"fa fa-user\"></i></span>\n              <span>College</span>\n            </a>\n          </li>\n\n          <li>\n            <a routerLink=\"/department\">\n                <span><i class=\"fa fa-envelope\"></i></span>\n                <span>Department</span>\n            </a>\n          </li>\n\n          <li>\n              <a routerLink=\"/library\">\n                  <span><i class=\"fa fa-envelope\"></i></span>\n                  <span>Library</span>\n              </a>\n          </li>\n\n          <li>\n              <a routerLink=\"/admission\">\n                  <span><i class=\"fa fa-envelope\"></i></span>\n                  <span>Admission</span>\n              </a>\n          </li>\n\n          <li>\n              <a routerLink=\"/event\">\n                  <span><i class=\"fa fa-envelope\"></i></span>\n                  <span>Event</span>\n              </a>\n          </li>\n                \n        </ul>\n      </nav>\n    </div>\n\t</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map