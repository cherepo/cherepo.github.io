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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">CHE.APPS</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/notes\" routerLinkActive=\"active\" (click)=\"toggleNavbar()\">Notes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/encryption\" routerLinkActive=\"active\" (click)=\"toggleNavbar()\">Encryption</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/media-player\" routerLinkActive=\"active\" (click)=\"toggleNavbar()\">Media Player</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/json-fetcher\" routerLinkActive=\"active\" (click)=\"toggleNavbar()\">Json Fetcher</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"app-content\">\n  <div class=\"center-content\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  z-index: 999; }\n\n.app-content {\n  padding: 20pt;\n  max-width: 1024px; }\n\n.app-content .app-header {\n    font-weight: 300;\n    padding: 15pt 0; }\n\n.app-content .center-content {\n    width: 80%;\n    padding-top: 20pt;\n    padding-bottom: 20pt;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    max-height: -webkit-fill-available; }\n\n@media (max-width: 767px) {\n      .app-content .center-content {\n        padding-top: 20pt; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cheapps';
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mediaplayer/mediaplayer.component */ "./src/app/components/mediaplayer/mediaplayer.component.ts");
/* harmony import */ var _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/encryption/encryption.component */ "./src/app/components/encryption/encryption.component.ts");
/* harmony import */ var _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/jsonfetch/jsonfetch.component */ "./src/app/components/jsonfetch/jsonfetch.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'media-player', component: _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_6__["MediaplayerComponent"] },
    { path: 'json-fetcher', component: _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_8__["JsonfetchComponent"] },
    { path: 'encryption', component: _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_7__["EncryptionComponent"] },
    { path: 'notes', component: _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_10__["NotesComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_6__["MediaplayerComponent"],
                _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_7__["EncryptionComponent"],
                _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_8__["JsonfetchComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_10__["NotesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/encryption/encryption.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/encryption/encryption.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"encryption-page\">\n    <div class=\"encryption\">\n      <p class=\"title\">String Encryptor</p>\n      <ngForm>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"paintext\" rows=\"6\" [(ngModel)]=\"cleanText\" name=\"cleanText\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" id=\"password\" name=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control btn btn-success btn-block\" type=\"submit\" value=\"Encrypt\" (click)=\"encrypt()\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control btn btn-danger btn-block\" type=\"submit\" value=\"Decrypt\" (click)=\"decrypt()\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"ciphertext\" rows=\"6\" [(ngModel)]=\"result\" name=\"result\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"button\" value=\"Clear\" (click)=\"clearTextarea()\" id=\"clrear\">\n        </div>\n      </ngForm>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/encryption/encryption.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/encryption/encryption.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#encryption-page {\n  /* encrypt app */ }\n  #encryption-page .encryption {\n    min-width: 300px;\n    max-width: 640px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 15px;\n    height: 100%;\n    color: white;\n    background-color: rgba(43, 62, 99, 0.9);\n    box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/components/encryption/encryption.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/encryption/encryption.component.ts ***!
  \***************************************************************/
/*! exports provided: EncryptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionComponent", function() { return EncryptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncryptionComponent = /** @class */ (function () {
    function EncryptionComponent() {
        this.cleanText = void 0;
        this.password = void 0;
        this.result = void 0;
    }
    EncryptionComponent.prototype.ngOnInit = function () {
    };
    EncryptionComponent.prototype.encrypt = function () {
        this.result = '';
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(this.cleanText, this.password);
        this.result = encrypted;
        this.cleanText = '';
        this.password = '';
    };
    EncryptionComponent.prototype.decrypt = function () {
        this.result = '';
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(this.cleanText, this.password);
        this.result = decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
        this.cleanText = '';
        this.password = '';
    };
    EncryptionComponent.prototype.clearTextarea = function () {
        this.cleanText = '';
        this.password = '';
        this.result = '';
    };
    EncryptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encryption',
            template: __webpack_require__(/*! ./encryption.component.html */ "./src/app/components/encryption/encryption.component.html"),
            styles: [__webpack_require__(/*! ./encryption.component.scss */ "./src/app/components/encryption/encryption.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EncryptionComponent);
    return EncryptionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row alert\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"httpError\">\n        <span>Error: {{httpError}}</span>\n        <button class=\"btn btn-secondary reset-btn\" type=\"button\" (click)=\"clearPasscode()\">Retry</button>\n    </div>\n</div>\n<div class=\"row home\">\n    <div class=\"col-md-6 bookmark\">\n        <div class=\"keypass input-group mb-3\" *ngIf=\"!passcode\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Keypass\" aria-describedby=\"basic-addon2\" #keypass>\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"setKeypass(keypass.value)\">Unlock</button>\n            </div>\n        </div>\n        <div class=\"search input-group mb-3\" *ngIf=\"bookmarks\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"search($event)\" [(ngModel)]='searchString'>\n        </div>\n        <div class=\"search-result\" *ngIf=\"passcode\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-add\">\n                    <div class=\"input-group mb-3\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Description\" aria-label=\"name\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"bookmarkName\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"URL address\" aria-label=\"url\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"bookmarkUrl\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addToGist()\">Add</button>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item item-list\"\n                    *ngFor=\"let bookmark of bookmarks; let i = index\">\n                    <a target=\"_blank\"\n                        href=\"{{bookmark.url}}\">{{ bookmark.name }}\n                    </a>\n                    <button *ngIf=\"confirmRowNumber !== i\" type=\"button\" class=\"btn btn-warning delete-btn\" (click)=\"deleteFromGist(bookmark.url, i)\">Delete</button>\n                    <button *ngIf=\"confirmRowNumber === i\" type=\"button\" class=\"btn btn-danger delete-btn\" (click)=\"deleteFromGist(bookmark.url, i)\">Confirm</button>\n                    <button *ngIf=\"confirmRowNumber === i\" type=\"button\" class=\"btn btn-secondary delete-btn\" (click)=\"cancelRowDeletion()\">Cancel</button>\n                </li>\n            </ul>\n        </div>\n    \n    </div>\n    <div class=\"col-md-6 todo\">\n        <div class=\"search input-group mb-3\" *ngIf=\"passcode\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Add todos\" (keyup.enter)=\"addTodo($event)\" [(ngModel)]='todoString'>\n        </div>\n        <div class=\"search-result\" *ngIf=\"passcode\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"\n                    *ngFor=\"let todo of todos, let i = index\">\n                    {{ todo.content }}\n                    <button *ngIf=\"confirmTodoRowNumber !== i\" type=\"button\" class=\"btn btn-warning delete-btn\" (click)=\"deleteTodoFromGist(todo.content, i)\">Done</button>\n                    <button *ngIf=\"confirmTodoRowNumber === i\" type=\"button\" class=\"btn btn-danger delete-btn\" (click)=\"deleteTodoFromGist(todo.content, i)\">Confirm</button>\n                    <button *ngIf=\"confirmTodoRowNumber === i\" type=\"button\" class=\"btn btn-secondary delete-btn\" (click)=\"cancelRowDeletion()\">Cancel</button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  width: -webkit-fill-available; }\n  .alert .reset-btn {\n    float: right; }\n  .home {\n  margin-bottom: 10px; }\n  .home ul {\n    list-style-type: none; }\n  .home .delete-btn {\n    float: right;\n    margin: 0 5px; }\n  .home .alert-danger {\n    height: 64px; }\n  .home .item-list {\n    display: block;\n    align-content: space-between; }\n  @media (max-width: 767px) {\n    .home .todo {\n      margin-top: 20pt; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(resourceService) {
        this.resourceService = resourceService;
        this.passcode = void 0;
        this.httpError = void 0;
        this.bookmarkName = '';
        this.bookmarkUrl = '';
        this.bookmarks = void 0;
        this.todos = void 0;
        this.original = void 0;
        this.cheGist = 'https://api.github.com/gists/973de2c3eb3f55518e97a1d3d18eb79e';
        this.gistFile = 'bookmarks.json';
        this.gistTodo = 'todos.json';
        this.confirmRowNumber = Number.MAX_SAFE_INTEGER;
        this.confirmTodoRowNumber = Number.MAX_SAFE_INTEGER;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loadGist = function () {
        var _this = this;
        this.httpError = void 0;
        this.resourceService.getGist(this.cheGist, this.passcode).subscribe(function (result) {
            _this.bookmarks = JSON.parse(result[_this.gistFile]['content']).data;
            _this.original = _this.deepClone(_this.bookmarks);
            _this.todos = JSON.parse(result[_this.gistTodo]['content']).data;
        }, function (error) {
            _this.httpError = error.statusText;
        });
    };
    HomeComponent.prototype.addToGist = function () {
        var _this = this;
        this.httpError = void 0;
        var newEntry = {
            name: this.bookmarkName,
            url: this.bookmarkUrl
        };
        this.bookmarks.push(newEntry);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.bookmarks, this.passcode).subscribe(function (val) {
            console.log("PATCH call successful value returned in body", val);
        }, function (error) {
            _this.httpError = error.statusText;
        }, function () {
            console.log("The PATCH observable is now completed.");
        });
        this.bookmarkName = '';
        this.bookmarkUrl = '';
    };
    HomeComponent.prototype.addTodo = function (event) {
        var _this = this;
        if (event.target.value) {
            this.httpError = void 0;
            var newEntry = {
                content: event.target.value
            };
            this.todos.push(newEntry);
            this.resourceService.patchGist(this.gistTodo, this.cheGist, this.todos, this.passcode).subscribe(function (val) {
                console.log("PATCH call successful value returned in body", val);
            }, function (error) {
                _this.httpError = error.statusText;
            }, function () {
                console.log("The PATCH observable is now completed.");
            });
            event.target.value = '';
        }
    };
    HomeComponent.prototype.deleteFromGist = function (url, index) {
        var _this = this;
        if (this.confirmRowNumber === index) {
            this.httpError = void 0;
            this.bookmarks = this.bookmarks.filter(function (bookmark) { return bookmark.url !== url; });
            this.resourceService.patchGist(this.gistFile, this.cheGist, this.bookmarks, this.passcode).subscribe(function (val) {
                console.log("PATCH call successful value returned in body", val);
            }, function (error) {
                _this.httpError = error.statusText;
            }, function () {
                console.log("The PATCH observable is now completed.");
            });
            this.confirmRowNumber = Number.MAX_SAFE_INTEGER;
        }
        this.confirmRowNumber = index;
    };
    HomeComponent.prototype.cancelRowDeletion = function () {
        this.confirmRowNumber = Number.MAX_SAFE_INTEGER;
    };
    HomeComponent.prototype.deleteTodoFromGist = function (content, index) {
        var _this = this;
        if (this.confirmTodoRowNumber === index) {
            this.httpError = void 0;
            this.todos = this.todos.filter(function (todo) { return todo.content !== content; });
            this.resourceService.patchGist(this.gistTodo, this.cheGist, this.todos, this.passcode).subscribe(function (val) {
                console.log("PATCH call successful value returned in body", val);
            }, function (error) {
                _this.httpError = error.statusText;
            }, function () {
                console.log("The PATCH observable is now completed.");
            });
            this.confirmTodoRowNumber = Number.MAX_SAFE_INTEGER;
        }
        this.confirmTodoRowNumber = index;
    };
    HomeComponent.prototype.setKeypass = function (keypass) {
        this.passcode = keypass;
        this.loadGist();
    };
    HomeComponent.prototype.clearPasscode = function () {
        this.passcode = void 0;
        this.httpError = void 0;
    };
    HomeComponent.prototype.search = function (event) {
        // event.target.value
        if (event.target.value) {
            this.bookmarks = this.bookmarks.filter(function (bookmark) { return bookmark.name.toLowerCase().includes(event.target.value.toLowerCase()); });
            event.target.value = '';
        }
        else {
            this.bookmarks = this.deepClone(this.original);
        }
    };
    HomeComponent.prototype.deepClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/jsonfetch/jsonfetch.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/jsonfetch/jsonfetch.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\n  <div class=\"json-fetcher\">\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"serverUrl\" placeholder=\"server url\" aria-label=\"JSON server's URL\" aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <a class=\"input-group-text\" id=\"basic-addon2\" (click)=\"getJSON()\">Fetch</a>\n      </div>\n    </div>\n    <div [innerHTML]=\"movies\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/jsonfetch/jsonfetch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/jsonfetch/jsonfetch.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/jsonfetch/jsonfetch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/jsonfetch/jsonfetch.component.ts ***!
  \*************************************************************/
/*! exports provided: JsonfetchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonfetchComponent", function() { return JsonfetchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/resource.service */ "./src/app/config/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsonfetchComponent = /** @class */ (function () {
    function JsonfetchComponent(resource) {
        this.resource = resource;
        this.serverUrl = '';
        this.movies = void 0;
    }
    JsonfetchComponent.prototype.ngOnInit = function () {
    };
    JsonfetchComponent.prototype.getJSON = function () {
        var _this = this;
        this.resource.getJSON(this.serverUrl)
            .subscribe(function (movies) { return _this.movies = JSON.stringify(movies, null, 2); });
    };
    JsonfetchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jsonfetch',
            template: __webpack_require__(/*! ./jsonfetch.component.html */ "./src/app/components/jsonfetch/jsonfetch.component.html"),
            styles: [__webpack_require__(/*! ./jsonfetch.component.scss */ "./src/app/components/jsonfetch/jsonfetch.component.scss")]
        }),
        __metadata("design:paramtypes", [_config_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], JsonfetchComponent);
    return JsonfetchComponent;
}());



/***/ }),

/***/ "./src/app/components/mediaplayer/mediaplayer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/mediaplayer/mediaplayer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\n  <div class=\"media-player\">\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"video\" placeholder=\"media url\" aria-label=\"Media's URL\" aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <a class=\"input-group-text\" id=\"basic-addon2\" (click)=\"getMedia()\">Get It</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"video\">\n      <div class=\"col text-center\">\n        <video id=\"my-video\" class=\"video-js vjs-big-play-centered mini-play\"\n                [poster]=\"poster\" style=\"margin: auto;\">\n          <source [src]=\"video\" type=\"video/mp4\">\n        </video>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/mediaplayer/mediaplayer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mediaplayer/mediaplayer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-player {\n  align-content: space-around;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n  .media-player .row {\n    padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/components/mediaplayer/mediaplayer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/mediaplayer/mediaplayer.component.ts ***!
  \*****************************************************************/
/*! exports provided: MediaplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaplayerComponent", function() { return MediaplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaplayerComponent = /** @class */ (function () {
    function MediaplayerComponent() {
        this.poster = 'assets/img/movie-icon.png';
        this.video = void 0;
    }
    MediaplayerComponent.prototype.ngOnInit = function () {
    };
    MediaplayerComponent.prototype.getMedia = function () {
        var options = {
            controls: true,
            autoplay: false,
            preload: 'auto',
            techOrder: ['html5']
        };
        // this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
        //   videojs.log('Your player is ready!');
        // });
        var player = videojs('my-video', options);
        player.pause();
        player.src(this.video);
        // set src track corresponding to new movie //
        player.load();
    };
    MediaplayerComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myvid'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MediaplayerComponent.prototype, "vid", void 0);
    MediaplayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mediaplayer',
            template: __webpack_require__(/*! ./mediaplayer.component.html */ "./src/app/components/mediaplayer/mediaplayer.component.html"),
            styles: [__webpack_require__(/*! ./mediaplayer.component.scss */ "./src/app/components/mediaplayer/mediaplayer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaplayerComponent);
    return MediaplayerComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/notes.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row alert\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"httpError\">\n        <span>Error: {{httpError}}</span>\n        <button class=\"btn btn-secondary reset-btn\" type=\"button\" (click)=\"clearPasscode()\">Retry</button>\n    </div>\n    <div class=\"keypass input-group mb-3\" *ngIf=\"!passcode\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Keypass\" aria-describedby=\"basic-addon2\" #keypass>\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"setKeypass(keypass.value)\">Unlock</button>\n        </div>\n    </div>\n</div>\n<div class=\"row notes\" *ngIf=\"passcode\">\n    <div class=\"col-md-6 edit\">\n        <form>\n            <div class=\"form-group\">\n              <label for=\"editNoteArea\">Edit note</label>\n              <textarea class=\"form-control\" id=\"editNoteArea\" rows=\"10\" [(ngModel)]=\"editingNoteContent\" name=\"edit-note-form\"></textarea>\n            </div>\n            <div class=\"form-group button-group\">\n                <button *ngIf=\"!editingNoteNumber\" type=\"button\" class=\"btn btn-warning\" (click)=\"addNote()\">Add New</button>\n                <button *ngIf=\"editingNoteNumber\" [attr.disabled]=\"editingNoteContent ? null : true\" (click)=\"updateNote()\" type=\"button\" class=\"btn btn-danger\">Update</button>\n                <button [attr.disabled]=\"editingNoteContent ? null : true\" (click)=\"cancelUpdateNote()\" type=\"button\" class=\"btn btn-secondary\">Cancel</button>\n            </div>\n        </form>\n    </div>  \n    <div class=\"col-md-6 notelist\">\n        <div class=\"search input-group mb-3\" *ngIf=\"notes\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"search($event)\" [(ngModel)]='searchString'>\n        </div>\n        <div class=\"search-result\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item item-list\"\n                    *ngFor=\"let note of notes; let i = index\"\n                    (click) = \"editNote(note.id)\">\n                    {{getTitle(note.content)}}\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notes/notes.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notes .button-group {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around; }\n  .notes .button-group button {\n    font-weight: bold;\n    font-size: 1em;\n    text-align: center;\n    display: block; }\n"

/***/ }),

/***/ "./src/app/components/notes/notes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/notes/notes.component.ts ***!
  \*****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesComponent = /** @class */ (function () {
    function NotesComponent(resourceService) {
        this.resourceService = resourceService;
        this.editingNoteContent = '';
        this.editingNoteNumber = void 0;
        this.cheGist = 'https://api.github.com/gists/973de2c3eb3f55518e97a1d3d18eb79e';
        this.gistFile = 'notes.json';
        this.passcode = void 0;
        this.httpError = '';
    }
    NotesComponent.prototype.ngOnInit = function () { };
    NotesComponent.prototype.generateId = function () {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    };
    NotesComponent.prototype.getTitle = function (content) {
        return content.slice(0, 35);
    };
    NotesComponent.prototype.editNote = function (id) {
        var note = this.notes.filter(function (note) { return note.id === id; });
        this.editingNoteNumber = id;
        this.editingNoteContent = note[0].content;
    };
    NotesComponent.prototype.cancelUpdateNote = function () {
        this.editingNoteContent = '';
        this.editingNoteNumber = void 0;
    };
    NotesComponent.prototype.loadNotes = function () {
        var _this = this;
        this.httpError = void 0;
        this.resourceService.getGist(this.cheGist, this.passcode).subscribe(function (result) {
            _this.notes = JSON.parse(result[_this.gistFile]['content']).data;
            _this.original = _this.deepClone(_this.notes);
        }, function (error) {
            _this.httpError = error.statusText;
        });
    };
    NotesComponent.prototype.addNote = function () {
        var _this = this;
        this.httpError = void 0;
        var newEntry = {
            id: this.generateId(),
            content: this.editingNoteContent
        };
        this.notes.push(newEntry);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe(function (val) {
            console.log("PATCH call successful value returned in body", val);
        }, function (error) {
            _this.httpError = error.statusText;
        }, function () {
            console.log("The PATCH observable is now completed.");
        });
        this.editingNoteContent = '';
    };
    NotesComponent.prototype.updateNote = function () {
        var _this = this;
        this.httpError = void 0;
        if (this.editingNoteNumber) {
            this.notes.map(function (note) {
                return note.id === _this.editingNoteNumber ? note.content = _this.editingNoteContent : note;
            });
            this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe(function (val) {
                console.log("PATCH call successful value returned in body", val);
            }, function (error) {
                _this.httpError = error.statusText;
            }, function () {
                console.log("The PATCH observable is now completed.");
            });
        }
    };
    NotesComponent.prototype.deepClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    NotesComponent.prototype.setKeypass = function (keypass) {
        this.passcode = keypass;
        this.loadNotes();
    };
    NotesComponent.prototype.clearPasscode = function () {
        this.passcode = void 0;
        this.httpError = void 0;
    };
    NotesComponent.prototype.search = function (event) {
        // event.target.value
        if (event.target.value) {
            this.notes = this.notes.filter(function (note) { return note.content.toLowerCase().includes(event.target.value.toLowerCase()); });
            event.target.value = '';
        }
        else {
            this.notes = this.deepClone(this.original);
        }
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/components/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/components/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/config/resource.service.ts":
/*!********************************************!*\
  !*** ./src/app/config/resource.service.ts ***!
  \********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResourceService = /** @class */ (function () {
    function ResourceService(httpClient) {
        this.httpClient = httpClient;
    }
    ResourceService.prototype.getJSON = function (url) {
        return this.httpClient.get(url);
    };
    ResourceService.prototype.getGist = function (url, passcode) {
        return this.httpClient.get(url, this.getHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp['files']; }));
    };
    ResourceService.prototype.patchGist = function (patchFile, url, content, passcode) {
        var structuredContent = {
            date: new Date(),
            data: content
        };
        var payload = {
            description: "Bookmarks",
            files: {
                patchFile: {
                    "filename": patchFile,
                    "content": JSON.stringify(structuredContent)
                }
            }
        };
        return this.httpClient.patch(url, payload, this.getHeaders(passcode));
    };
    ResourceService.prototype.getHeaders = function (passcode) {
        var encoded = 'U2FsdGVkX19NvA7TMWNIYZ8JmfmsE2ZHOp3NbfBY68AH95uhDU4g5dRqrelCRrIUMVp3PsjKVLeKOZribMWOLQ==';
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "token " + this.decryptToken(encoded, passcode)
            })
        };
    };
    ResourceService.prototype.decryptToken = function (encoded, passcode) {
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].decrypt(encoded, passcode);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Utf8);
    };
    ResourceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ResourceService);
    return ResourceService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/czou/Desktop/cheng/cheapps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map