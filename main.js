(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _customers_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers/customer-create/customer-create.component */ "./src/app/customers/customer-create/customer-create.component.ts");
/* harmony import */ var _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"] },
    { path: 'verify-email', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailComponent"] },
    { path: 'customer-create', component: _customers_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_12__["CustomerCreateComponent"] },
    { path: 'customer-list', component: _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__["CustomerListComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_15__["EmployeesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n  <div class=\"container\">\n      <!-- Content here -->\n    </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'easy-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _customers_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customers/customer-details/customer-details.component */ "./src/app/customers/customer-details/customer-details.component.ts");
/* harmony import */ var _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customers/customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _customers_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customers/customer-create/customer-create.component */ "./src/app/customers/customer-create/customer-create.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__["ForgotPasswordComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_24__["VerifyEmailComponent"],
                _customers_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_25__["CustomerDetailsComponent"],
                _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_26__["CustomerListComponent"],
                _customers_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_27__["CustomerCreateComponent"],
                _slide_slide_component__WEBPACK_IMPORTED_MODULE_28__["SlideComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_29__["ProductsComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_30__["EmployeesComponent"],
                _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeComponent"],
                _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_32__["EmployeeListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _shared_employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ติดต่อเรา</h2>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <img src=\"assets/images/001.jpg\" class=\"img-fluid\" />\n  </div>\n  <div class=\"col-md-4\">\n    <ul>\n      <li>122 ถนนเดโช บางรัก 10500 </li>\n      <li>โทร: 0952506340</li>\n      <li>อีเมล: kongwongsasuttida@gmail.com</li>\n    </ul>\n  </div>\n  <div class=\"col-md-4\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.4811285709448!2d100.52561071372239!3d13.72758858404105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d375699af1%3A0xd1af0af1e5a887be!2z4LiL4Lit4LiiIOC4reC4meC4uOC4oeC4suC4meC4o-C4suC4iuC4mOC4mSDguYDguILguJXguJrguLLguIfguKPguLHguIEg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwNTAw!5e0!3m2!1sth!2sth!4v1562513569816!5m2!1sth!2sth\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-create/customer-create.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/customers/customer-create/customer-create.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1jcmVhdGUvY3VzdG9tZXItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customers/customer-create/customer-create.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-create/customer-create.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Create Customer</h3>\n<div [hidden]=\"submitted\" style=\"width: 300px;\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"customer.name\" name=\"name\">\n    </div>\n \n    <div class=\"form-group\">\n      <label for=\"age\">Age</label>\n      <input type=\"text\" class=\"form-control\" id=\"age\" required [(ngModel)]=\"customer.age\" name=\"age\">\n    </div>\n \n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form>\n</div>\n \n<div [hidden]=\"!submitted\">\n  <h4>You submitted successfully!</h4>\n  <button class=\"btn btn-success\" (click)=\"newCustomer()\">Add</button>\n</div>"

/***/ }),

/***/ "./src/app/customers/customer-create/customer-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/customers/customer-create/customer-create.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateComponent", function() { return CustomerCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");




var CustomerCreateComponent = /** @class */ (function () {
    function CustomerCreateComponent(customerService) {
        this.customerService = customerService;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.submitted = false;
    }
    CustomerCreateComponent.prototype.ngOnInit = function () {
    };
    CustomerCreateComponent.prototype.newCustomer = function () {
        this.submitted = false;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    };
    CustomerCreateComponent.prototype.save = function () {
        this.customerService.createCustomer(this.customer);
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    };
    CustomerCreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    CustomerCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__(/*! ./customer-create.component.html */ "./src/app/customers/customer-create/customer-create.component.html"),
            styles: [__webpack_require__(/*! ./customer-create.component.css */ "./src/app/customers/customer-create/customer-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n  <div>\n    <label>First Name: </label> {{customer.name}}\n  </div>\n  <div>\n    <label>Age: </label> {{customer.age}}\n  </div>\n  <div>\n    <label>Active: </label> {{customer.active}}\n  </div>\n \n  <span class=\"button is-small btn-primary\" *ngIf='customer.active' (click)='updateActive(false)'>Inactive</span>\n \n  <span class=\"button is-small btn-primary\" *ngIf='!customer.active' (click)='updateActive(true)'>Active</span>\n \n  <span class=\"button is-small btn-danger\" (click)='deleteCustomer()'>Delete</span>\n \n  <hr/>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/customer */ "./src/app/models/customer.ts");




var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(customerService) {
        this.customerService = customerService;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsComponent.prototype.updateActive = function (isActive) {
        this.customerService
            .updateCustomer(this.customer.key, { active: isActive })
            .catch(function (err) { return console.log(err); });
    };
    CustomerDetailsComponent.prototype.deleteCustomer = function () {
        this.customerService
            .deleteCustomer(this.customer.key)
            .catch(function (err) { return console.log(err); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"])
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customers/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customers/customer-details/customer-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customers</h1>\n<div *ngFor=\"let customer of customers\" style=\"width: 300px;\">\n  <app-customer-details [customer]='customer'></app-customer-details>\n</div>\n<div style=\"margin-top:20px;\">\n  <button type=\"button\" class=\"button btn-danger\" (click)='deleteCustomers()'>Delete All</button>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getCustomersList();
    };
    CustomerListComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.customerService.getCustomersList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val()));
            });
        })).subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomerListComponent.prototype.deleteCustomers = function () {
        this.customerService.deleteAll().catch(function (err) { return console.log(err); });
    };
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customers/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customers/customer-list/customer-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n    <th>Name</th>\n    <th>Position</th>\n    <th>Mobile</th>\n    <th></th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let emp of list\">\n      <td (click)=\"onEdit(emp)\">{{emp.empCode}} - {{emp.fullName}}</td>\n      <td (click)=\"onEdit(emp)\">{{emp.position}}</td>\n      <td (click)=\"onEdit(emp)\">{{emp.mobile}}</td>\n      <td><a class=\"btn text-danger\" (click)=\"onDelete(emp.id)\"><i class=\"fa fa-trash\"></i></a></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");




var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(service, firestore) {
        this.service = service;
        this.firestore = firestore;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getEmployees().subscribe(function (actionArray) {
            _this.list = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.service.formData = Object.assign({}, emp);
    };
    EmployeeListComponent.prototype.onDelete = function (id) {
        if (confirm("Are you sure to delete this record?")) {
            this.firestore.doc('employees/' + id).delete();
        }
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/*!************************************************************!*\
  !*** ./src/app/employees/employee/employee.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"display-4\">EMP. Register</h1>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n  <div class=\"form-group\">\n    <input name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" class=\"form-control\" placeholder=\"Full name\" required>\n    <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">This field is required.</div>\n  </div>\n  <div class=\"form-group\">\n    <input name=\"position\" #position=\"ngModel\" [(ngModel)]=\"service.formData.position\" class=\"form-control\" placeholder=\"Position\">\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <input name=\"empCode\" #empCode=\"ngModel\" [(ngModel)]=\"service.formData.empCode\" class=\"form-control\" placeholder=\"Emp. code\">\n    </div>\n    <div class=\"form-group  col-md-6\">\n      <input name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"Mobile\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">SUBMIT</button>\n  </div>\n \n</form>"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(service, firestore) {
        this.service = service;
        this.firestore = firestore;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            fullName: '',
            position: '',
            empCode: '',
            mobile: '',
        };
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        var data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null)
            this.firestore.collection('employees').add(data);
        else
            this.firestore.doc('employees/' + form.value.id).update(data);
        this.resetForm(form);
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-employee></app-employee>\n  </div>\n  <div class=\"col-md-7\">\n    <app-employee-list></app-employee-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-6 mx-auto\">\n  <h4> Please enter you email address to request a password reset </h4>\n  <form>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" #passwordResetEmail>\n    </div>\n    <button type=\"button\" class=\"btn btn-secondary\"\n      (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset</button>\n\n    Go back to <a routerLink=\"/login\">Login</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n\n<div class=\"jumbotron\">\n    <h1 class=\"display-4\">ยินดีต้อนรับ!</h1>\n    <p class=\"lead\">หัวก๊อก มือบิด และพื้นผิววัสดุ พร้อมให้คุณเลือกดีไซต์ได้ในแบบเฉพาะตัว</p>\n    <hr class=\"my-4\">\n    <p>พบจินตนาการที่ไร้ขีดจำกัดและสินค้าราคาสุดพิเศษจาก Hardware house</p>\n    <a class=\"btn btn-success btn-lg\" routerLink=\"login\" role=\"button\">เข้าสู่ระบบ</a>\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"signup\" role=\"button\">สมัครสมาชิก</a>\n  </div>\n\n  <app-products></app-products>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\n    border: 0px solid #fff !important;\n  }\n  .btn-social{\n    position: relative;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #fff;\n    border-color: rgba(0,0,0,0.2);\n  }\n  .btn-facebook{\n    background: #3b5998;\n  }\n  .btn-google{\n    background: #dd4b39;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsNkJBQTZCO0VBQy9CO0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAuYnRuLXNvY2lhbHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgfVxuICBcbiAgLmJ0bi1mYWNlYm9va3tcbiAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xuICB9XG4gIC5idG4tZ29vZ2xle1xuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-6 col-md-4 ml-auto\"> \n     <h4> เข้าสู่ระบบ </h4>\n    <form>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" #userEmail>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #userPassword>\n      </div>\n      <button type=\"button\" class=\"btn btn-secondary\"\n        (click)=\"authService.SignIn(userEmail.value, userPassword.value)\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</button>\n    </form>\n  </div>\n  <div class=\"col-xs-12 col-sm-6 col-md-4 mr-auto\">\n    <br>\n    <button type=\"button\" class=\"btn btn-block btn-social btn-google\" (click)=\"authService.GoogleAuth()\"><i class=\"fa fa-google fa-lg\" ></i> Login with\n      google</button>\n      <button type=\"button\" class=\"btn btn-social btn-facebook btn-block\" (click)=\"authService.FacebookAuth()\"><i class=\"fa fa-facebook-square\" ></i> Login with\n          Facebook</button>\n    <p>\n      <a routerLink=\"/forgot-password\" class=\"btn btn-link\"> Forgot password?</a> <br>\n      Don't have an account? <a routerLink=\"/signup\" class=\"btn btn-link\"> Sign Up</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.active = true;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-info\">\n  <a class=\"navbar-brand\" href=\"#\">Sanitary ware house</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\">Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"about\">About</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n         ประเภทสินค้า\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <div *ngFor=\"let item of catalog\">\n           <a class=\"dropdown-item\" href=\"#\">{{item.title}}</a>\n        </div>\n      </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"customer-create\">Customers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"employees\">Employees</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"profile\" *ngIf=\"authService.isLoggedIn\">Profile </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"login\" *ngIf=\"!authService.isLoggedIn\"> <i class=\"fa fa-sign-in\" ></i>Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"signup\" *ngIf=\"!authService.isLoggedIn\"><i class=\"fa fa-user-circle-o\"></i>Signup</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"#\" (click)=\"authService.SignOut()\" *ngIf=\"authService.isLoggedIn\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.catalog = [
            { id: '1', title: 'ก๊อกห้องน้ำ', detail: 'xxxx' },
            { id: '2', title: 'ก๊อกอ่างล้างหน้า', detail: 'xxxx' },
            { id: '3', title: 'ก๊อกอ่างอาบน้ำ', detail: 'xxxx' },
            { id: '4', title: 'ก๊อกลงอ่างอาบน้ำและ/หรือยืนอาบแบบติดผนังพร้อมฝักบัวสายอ่อน', detail: 'xxxx' },
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>สินค้าทั้งหมด</h2>\n\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let item of products\">\n    <img src=\"{{item.imgs}}\" class=\"card-img-top\" >\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{item.title}}</h5>\n      <p class=\"card-text\">{{item.detail}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.products = [
            { id: '1001', title: 'ก๊อกเดี่ยวอ่างล้างหน้าแบบก้านโยก', price: '100', detail: '380฿', imgs: 'assets/products/ก๊อก01.jpg' },
            { id: '1002', title: 'ก๊อกเดี่ยวอ่างล้างหน้าแบบหมุน', price: '100', detail: '380฿', imgs: 'assets/products/ก๊อก02.jpg' },
            { id: '1003', title: 'ก๊อกเดี่ยวอ่างล้างหน้าแบบก้านโยก', price: '100', detail: '380฿', imgs: 'assets/products/ก๊อก03.jpg' },
            { id: '1004', title: 'ก๊อกเดี่ยวอ่างล้างหน้าแบบก้านโยก', price: '100', detail: '380฿', imgs: 'assets/products/ก๊อก04.jpg' },
            { id: '1004', title: 'ก๊อกเดี่ยวอ่างล้างหน้าแบบกด', price: '100', detail: '400฿', imgs: 'assets/products/ก๊อก05.jpg' },
            { id: '1004', title: 'สายฉีดชำระพร้อมสายอ่อนและขอแขวน', price: '100', detail: '420฿', imgs: 'assets/products/สายชำระ01.jpg' },
            { id: '1004', title: 'สายฉีดชำระพร้อมสายอ่อนและขอแขวน', price: '100', detail: '459฿', imgs: 'assets/products/สายชำระ02.jpg' },
            { id: '1004', title: 'ก๊อกผสมลงอ่างอาบน้ำและยืนอาบแบบติดผนังพร้อมฝักบัวสายอ่อน', price: '100', detail: '499฿', imgs: 'assets/products/ฝักบัว01.jpg' },
            { id: '1004', title: 'ก๊อกผสมลงอ่างอาบน้ำและยืนอาบแบบติดผนังพร้อมฝักบัวสายแข็ง', price: '100', detail: '285฿', imgs: 'assets/products/ฝักบัว02.jpg' },
            { id: '1004', title: 'ก๊อกผสมลงอ่างอาบน้ำและยืนอาบแบบติดผนังพร้อมฝักบัวสายอ่อน', price: '100', detail: '243฿', imgs: 'assets/products/ฝักบัว03.jpg' },
            { id: '1004', title: 'ก๊อกผสมลงอ่างอาบน้ำและยืนอาบแบบติดผนังพร้อมฝักบัวสายอ่อน', price: '100', detail: '450฿', imgs: 'assets/products/ฝักบัว04.jpg' },
            { id: '1004', title: 'ก๊อกผสมลงอ่างอาบน้ำและยืนอาบแบบติดผนังพร้อมฝักบัวสายอ่อน', price: '100', detail: '430฿', imgs: 'assets/products/ฝักบัว05.jpg' },
        ];
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"max-width: 800px;\" *ngIf=\"authService.userData as user\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4\">\n        <img src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\" class=\"card-img\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{(user.displayName) ? user.displayName : 'User'}}</h5>\n          <p class=\"card-text\">{{user.email}}</p>\n          <p class=\"card-text\">{{user.uid}}</p>\n          <p class=\"card-text\"><small class=\"text-muted\">{{user.emailVerified}}</small></p>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(afs, afAuth, router, ngZone) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        //Saving user data in localstorage when logged in and setting up null when logged out
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.SendVerificationMail(); //Call the SendVerficationMail() function when new user sign
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    //Send email verification when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email']);
        });
    };
    //Reset forgot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        //Return true when user is logged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    //Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    //Sign in with Facebook
    AuthService.prototype.FacebookAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
    };
    //Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    //Setting up user data when sign in with username/password, sign up with username/password
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc('users/${user.uid}');
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    //Sign out
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['login']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var CustomerService = /** @class */ (function () {
    function CustomerService(db) {
        this.db = db;
        this.dbPath = '/customer-list';
        this.customersRef = null;
        this.customersRef = db.list(this.dbPath);
    }
    CustomerService.prototype.createCustomer = function (customer) {
        this.customersRef.push(customer);
    };
    CustomerService.prototype.updateCustomer = function (key, value) {
        return this.customersRef.update(key, value);
    };
    CustomerService.prototype.deleteCustomer = function (key) {
        return this.customersRef.remove(key);
    };
    CustomerService.prototype.getCustomersList = function () {
        return this.customersRef;
    };
    CustomerService.prototype.deleteAll = function () {
        return this.customersRef.remove();
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(firestore) {
        this.firestore = firestore;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.firestore.collection('employees').snapshotChanges();
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\n    border: 0px solid #fff !important;\n  }\n  .btn-social{\n    position: relative;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #fff;\n    border-color: rgba(0,0,0,0.2);\n  }\n  .btn-facebook{\n    background: #3b5998;\n  }\n  .btn-google{\n    background: #dd4b39;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bi1zb2NpYWx7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gIH1cbiAgXG4gIC5idG4tZmFjZWJvb2t7XG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcbiAgfVxuICAuYnRuLWdvb2dsZXtcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-6 col-md-4 ml-auto\">\n    <h3> สมัครสมาชิก </h3>\n    <form>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" #userEmail>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #userPassword>\n      </div>\n      <button type=\"button\" class=\"btn btn-success\"\n        (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">Sign Up</button>\n    </form>\n  </div>\n  <div class=\"col-xs-12 col-sm-6 col-md-4 mr-auto\">\n    <br>\n    <button type=\"button\" class=\"btn btn-social btn-google btn-block\" (click)=\"authService.GoogleAuth()\">Continue with\n      Google</button>\n    <button type=\"button\" class=\"btn btn-social btn-facebook btn-block\" (click)=\"authService.FacebookAuth()\">Continue with\n      Facebook</button>\n    <p>\n      Already have an account? <a routerLink=\"/login\" class=\"btn btn-link\">Login</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/slide/slide.component.css":
/*!*******************************************!*\
  !*** ./src/app/slide/slide.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlL3NsaWRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/slide/slide.component.html":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel>\n    <slide>\n      <img src=\"assets/images/ก๊อก001.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;height: 500px\">\n    </slide>\n    <slide>\n      <img src=\"assets/images/สายชำระ01.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;height: 500px\">\n    </slide>\n    <slide>\n      <img src=\"assets/images/ก๊อกผนัง01.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;height: 500px\">\n    </slide>\n  </carousel>\n"

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
    }
    SlideComponent.prototype.ngOnInit = function () {
    };
    SlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.css */ "./src/app/slide/slide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/verify-email/verify-email.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.userData as user\">\n  <p> We have sent a confirmation email to <strong>{{user.email}}</strong> </p>\n  <p> Please check your email and click on the link to verify your email address</p>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"authService.SendVerificationMail()\">Send Verification Email</button>\n  <p>Go back to <a routerLink=\"/login\">Login</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.ts ***!
  \********************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/verify-email/verify-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCLsMvZ8TeUoIpEaJ_rrJ0i0V8hOn7TfRQ",
        authDomain: "project-55f74.firebaseapp.com",
        databaseURL: "https://project-55f74.firebaseio.com",
        projectId: "project-55f74",
        storageBucket: "project-55f74.appspot.com",
        messagingSenderId: "390029823142",
        appId: "1:390029823142:web:a900280494dca9d3"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\Desktop\easy-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map