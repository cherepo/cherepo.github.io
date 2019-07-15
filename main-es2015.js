(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">CHE.APPS</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <!--<li class=\"nav-item\">-->\n      <!--  <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>-->\n      <!--</li>-->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/notes\" routerLinkActive=\"active\">Notes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/encryption\" routerLinkActive=\"active\">Encryption</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/media-player\" routerLinkActive=\"active\">Media Player</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/json-fetcher\" routerLinkActive=\"active\">Json Fetcher</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://chengz.freeshell.org\">80's</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"app-content\">\n  <div class=\"center-content\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/encryption/encryption.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/encryption/encryption.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"encryption-page\">\n    <div class=\"encryption\">\n      <p class=\"title\">String Encryptor</p>\n      <ngForm>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"paintext\" rows=\"6\" [(ngModel)]=\"cleanText\" name=\"cleanText\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" id=\"password\" name=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control btn btn-success btn-block\" type=\"submit\" value=\"Encrypt\" (click)=\"encrypt()\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control btn btn-danger btn-block\" type=\"submit\" value=\"Decrypt\" (click)=\"decrypt()\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"ciphertext\" rows=\"6\" [(ngModel)]=\"result\" name=\"result\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"button\" value=\"Clear\" (click)=\"clearTextarea()\" id=\"clrear\">\n        </div>\n      </ngForm>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"row alert\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"httpError\">\n        <span>Error: {{httpError}}</span>\n        <button class=\"btn btn-secondary reset-btn\" type=\"button\" (click)=\"clearPasscode()\">Retry</button>\n    </div>\n</div>\n<div class=\"keypass input-group\" *ngIf=\"!passcode\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Bookmarks Keypass\" (keyup.enter)=\"setKeypass(keypass.value)\" aria-describedby=\"basic-addon2\" #keypass>\n    <div class=\"input-group-append\">\n        <a class=\"input-group-text\" (click)=\"setKeypass(keypass.value)\">Unlock</a>\n    </div>\n</div>\n<div class=\"row home\">\n    <div class=\"col-md-6 bookmark\">\n        <div class=\"search input-group mb-3\" *ngIf=\"bookmarks\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"search($event)\" [(ngModel)]='searchString'>\n        </div>\n        <div class=\"search-result\" *ngIf=\"passcode\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-add\">\n                    <div class=\"input-group mb-3\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Description\" aria-label=\"name\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"bookmarkName\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"URL address\" aria-label=\"url\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"bookmarkUrl\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-success\" type=\"button\" (click)=\"addToGist()\">Add</button>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item item-list\"\n                    *ngFor=\"let bookmark of bookmarks; let i = index\">\n                    <div *ngIf=\"confirmRowNumber !== i\">\n                        <a target=\"_blank\"\n                            href=\"{{bookmark.url}}\">{{ bookmark.name }}\n                        </a>\n                        <button type=\"button\" class=\"btn btn-warning delete-btn\" (click)=\"deleteFromGist(bookmark.url, i)\">Delete</button>\n                    </div>\n                    <div *ngIf=\"confirmRowNumber === i\">\n                        <button type=\"button\" class=\"btn btn-danger delete-btn\" (click)=\"deleteFromGist(bookmark.url, i)\">Confirm</button>\n                        <button type=\"button\" class=\"btn btn-secondary delete-btn\" (click)=\"cancelRowDeletion()\">Cancel</button>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    \n    </div>\n    <div class=\"col-md-6 todo\">\n        <div class=\"search input-group mb-3\" *ngIf=\"passcode\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Add todos\" (keyup.enter)=\"addTodo($event)\" [(ngModel)]='todoString'>\n        </div>\n        <div class=\"search-result\" *ngIf=\"passcode\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"\n                    *ngFor=\"let todo of todos, let i = index\">\n                    {{ todo.content }}\n                    <button *ngIf=\"confirmTodoRowNumber !== i\" type=\"button\" class=\"btn btn-warning delete-btn\" (click)=\"deleteTodoFromGist(todo.content, i)\">Done</button>\n                    <button *ngIf=\"confirmTodoRowNumber === i\" type=\"button\" class=\"btn btn-danger delete-btn\" (click)=\"deleteTodoFromGist(todo.content, i)\">Confirm</button>\n                    <button *ngIf=\"confirmTodoRowNumber === i\" type=\"button\" class=\"btn btn-secondary delete-btn\" (click)=\"cancelRowDeletion()\">Cancel</button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/jsonfetch/jsonfetch.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/jsonfetch/jsonfetch.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"json-fetcher\">\n  <div class=\"keypass input-group\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"serverUrl\" placeholder=\"server url\" aria-label=\"JSON server's URL\" aria-describedby=\"basic-addon2\">\n    <div class=\"input-group-append\">\n      <a class=\"input-group-text\" id=\"basic-addon2\" (click)=\"getJSON()\">Fetch</a>\n    </div>\n  </div>\n  <div [innerHTML]=\"movies\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mediaplayer/mediaplayer.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mediaplayer/mediaplayer.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\n  <div class=\"media-player\">\n    <div class=\"keypass input-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"video\" placeholder=\"media url\" aria-label=\"Media's URL\" aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <a class=\"input-group-text\" id=\"basic-addon2\" (click)=\"getMedia()\">Get It</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"video\">\n      <div class=\"col text-center\">\n        <video id=\"my-video\" class=\"video-js vjs-big-play-centered mini-play\"\n                [poster]=\"poster\" style=\"margin: auto;\">\n          <source [src]=\"video\" type=\"video/mp4\">\n        </video>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/notes/notes.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/notes/notes.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"row alert\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"httpError\">\n        <span>Error: {{httpError}}</span>\n        <button class=\"btn btn-secondary reset-btn\" type=\"button\" (click)=\"clearPasscode()\">Retry</button>\n    </div>\n</div>\n<div class=\"keypass input-group\" *ngIf=\"!passcode\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Notes Keypass\" (keyup.enter)=\"setKeypass(keypass.value)\" aria-describedby=\"basic-addon2\" #keypass>\n    <div class=\"input-group-append\">\n        <a class=\"input-group-text\" (click)=\"setKeypass(keypass.value)\">Unlock</a>\n    </div>\n</div>\n\n<div class=\"row notes\" *ngIf=\"passcode\">\n    <div class=\"col-md-8 edit\">\n        <div>\n            <div class=\"form-group\">\n              <label class=\"textarea-label\" for=\"editNoteArea\">Edit note</label>\n              <simplemde style=\"height: 300px\" class=\"edit-area\" [(ngModel)]=\"editingNoteContent\" name=\"edit-note-form\"></simplemde>\n            </div>\n            <div *ngIf=\"!confirmDeletion\" class=\"form-group button-group\">\n                <button *ngIf=\"!editingNoteId\" type=\"button\" class=\"btn btn-warning\" (click)=\"addNote()\">Add New</button>\n                <button *ngIf=\"editingNoteId\" [attr.disabled]=\"editingNoteContent ? null : true\" (click)=\"updateNote()\" type=\"button\" class=\"btn btn-danger\">Update</button>\n                <button *ngIf=\"selectedNumber\" [attr.disabled]=\"selectedNumber && editingNoteContent ? null : true\" (click)=\"toggleDeleteFlag()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n                <button [attr.disabled]=\"editingNoteContent ? null : true\" (click)=\"cancelUpdateNote()\" type=\"button\" class=\"btn btn-secondary\">Cancel</button>\n            </div>\n            <div *ngIf=\"confirmDeletion\" class=\"form-group button-group\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteNote()\">Confirm</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleDeleteFlag()\">Cancel</button>\n            </div>\n        </div>\n    </div>  \n    <div class=\"col-md-4 notelist\">\n        <div class=\"search input-group mb-3\" *ngIf=\"notes\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"search($event)\" [(ngModel)]='searchString'>\n        </div>\n        <div class=\"search-result\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item item-list\"\n                    *ngFor=\"let note of notes; let i = index\"\n                    (click) = \"editNote(note.id, i)\">\n                    {{getTitle(note.content)}}\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  z-index: 999;\n}\n\n.app-content {\n  padding: 0 20pt;\n}\n\n.app-content .app-header {\n  font-weight: 300;\n  padding: 15pt 0;\n}\n\n@media (max-width: 767px) {\n  .app-content .center-content {\n    padding-top: 20pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoZW5nL3dvcmtzcGFjZS9jaGUtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURJSTtFQUZGO0lBR0ksaUJBQUE7RUNESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYXBwLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHQ7XG5cbiAgLmFwcC1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZzogMTVwdCAwO1xuICB9XG5cbiAgLmNlbnRlci1jb250ZW50IHtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogNzY3cHgpIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB0O1xuICAgIH1cblxuICB9XG59IiwibmF2IHtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYXBwLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHQ7XG59XG4uYXBwLWNvbnRlbnQgLmFwcC1oZWFkZXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxNXB0IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFwcC1jb250ZW50IC5jZW50ZXItY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHQ7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cheapps';
        this.navbarOpen = false;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_simplemde__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-simplemde */ "./node_modules/ngx-simplemde/esm2015/simplemde.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mediaplayer/mediaplayer.component */ "./src/app/components/mediaplayer/mediaplayer.component.ts");
/* harmony import */ var _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/encryption/encryption.component */ "./src/app/components/encryption/encryption.component.ts");
/* harmony import */ var _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jsonfetch/jsonfetch.component */ "./src/app/components/jsonfetch/jsonfetch.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");














const appRoutes = [
    { path: 'media-player', component: _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_9__["MediaplayerComponent"] },
    { path: 'json-fetcher', component: _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_11__["JsonfetchComponent"] },
    { path: 'encryption', component: _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_10__["EncryptionComponent"] },
    { path: 'notes', component: _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_9__["MediaplayerComponent"],
            _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_10__["EncryptionComponent"],
            _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_11__["JsonfetchComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            ngx_simplemde__WEBPACK_IMPORTED_MODULE_6__["SimplemdeModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/encryption/encryption.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/encryption/encryption.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#encryption-page {\n  /* encrypt app */\n}\n#encryption-page .encryption {\n  min-width: 300px;\n  max-width: 640px;\n  margin-top: 10px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n  height: 100%;\n  color: white;\n  background-color: rgba(43, 62, 99, 0.9);\n  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoZW5nL3dvcmtzcGFjZS9jaGUtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9lbmNyeXB0aW9uL2VuY3J5cHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZW5jcnlwdGlvbi9lbmNyeXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFJQSwrQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbmNyeXB0aW9uL2VuY3J5cHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZW5jcnlwdGlvbi1wYWdlIHtcbiAgLyogZW5jcnlwdCBhcHAgKi9cbiAgLmVuY3J5cHRpb257XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDYyLCA5OSwgMC45KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcbiAgfSBcbn1cbiIsIiNlbmNyeXB0aW9uLXBhZ2Uge1xuICAvKiBlbmNyeXB0IGFwcCAqL1xufVxuI2VuY3J5cHRpb24tcGFnZSAuZW5jcnlwdGlvbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA2MiwgOTksIDAuOSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



let EncryptionComponent = class EncryptionComponent {
    constructor() {
        this.cleanText = void 0;
        this.password = void 0;
        this.result = void 0;
    }
    ngOnInit() {
    }
    encrypt() {
        this.result = '';
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(this.cleanText, this.password);
        this.result = encrypted;
        this.cleanText = '';
        this.password = '';
    }
    decrypt() {
        this.result = '';
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(this.cleanText, this.password);
        this.result = decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
        this.cleanText = '';
        this.password = '';
    }
    clearTextarea() {
        this.cleanText = '';
        this.password = '';
        this.result = '';
    }
};
EncryptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encryption',
        template: __webpack_require__(/*! raw-loader!./encryption.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/encryption/encryption.component.html"),
        styles: [__webpack_require__(/*! ./encryption.component.scss */ "./src/app/components/encryption/encryption.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EncryptionComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  width: -webkit-fill-available;\n}\n.alert .reset-btn {\n  float: right;\n}\n.keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n.home {\n  margin-bottom: 10px;\n}\n.home ul {\n  list-style-type: none;\n}\n.home .delete-btn {\n  float: right;\n  margin: 0 5px;\n}\n.home .alert-danger {\n  height: 64px;\n}\n.home .item-list {\n  display: block;\n  align-content: space-between;\n}\n@media (max-width: 767px) {\n  .home .todo {\n    margin-top: 20pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoZW5nL3dvcmtzcGFjZS9jaGUtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FERUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFBcUIsc0JBQUE7QUNFekI7QURBQTtFQUNJLG1CQUFBO0FDR0o7QURESTtFQUNJLHFCQUFBO0FDR1I7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRVI7QURDSTtFQUNJLFlBQUE7QUNDUjtBREVJO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0FDQVI7QURJUTtFQURKO0lBRVEsZ0JBQUE7RUNEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuXG4gICAgLnJlc2V0LWJ0biB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG4ua2V5cGFzcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDgwLCAxOTEpO1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDsgLyogSGFsZiBvZiB0aGUgd2lkdGggKi9cbn1cbi5ob21lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIFxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cblxuICAgIC5kZWxldGUtYnRuIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgIH1cblxuICAgIC5hbGVydC1kYW5nZXIge1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgfVxuXG4gICAgLml0ZW0tbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC50b2RvIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGggOiA3NjdweCkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBwdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5hbGVydCB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuLmFsZXJ0IC5yZXNldC1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5rZXlwYXNzIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzI0NTBiZjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTc1cHg7XG4gIC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59XG5cbi5ob21lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ob21lIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmhvbWUgLmRlbGV0ZS1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaG9tZSAuYWxlcnQtZGFuZ2VyIHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmhvbWUgLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ob21lIC50b2RvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB0O1xuICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let HomeComponent = class HomeComponent {
    constructor(resourceService, spinner) {
        this.resourceService = resourceService;
        this.spinner = spinner;
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
    ngOnInit() { }
    loadGist() {
        this.spinner.show();
        this.httpError = void 0;
        this.resourceService.getGist(this.cheGist, this.passcode).subscribe(result => {
            this.bookmarks = JSON.parse(result[this.gistFile]['content']).data;
            this.original = this.deepClone(this.bookmarks);
            this.todos = JSON.parse(result[this.gistTodo]['content']).data;
            this.spinner.hide();
        }, error => {
            this.httpError = error.statusText;
        });
    }
    addToGist() {
        this.spinner.show();
        this.httpError = void 0;
        const newEntry = {
            name: this.bookmarkName,
            url: this.bookmarkUrl
        };
        this.bookmarks.push(newEntry);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.bookmarks, this.passcode).subscribe((val) => {
            //Todo show info notification
        }, error => {
            this.httpError = error.statusText;
        }, () => {
            console.log("The PATCH observable is now completed.");
        });
        this.bookmarkName = '';
        this.bookmarkUrl = '';
        this.spinner.hide();
    }
    addTodo(event) {
        this.spinner.show();
        if (event.target.value) {
            this.httpError = void 0;
            const newEntry = {
                content: event.target.value
            };
            this.todos.push(newEntry);
            this.resourceService.patchGist(this.gistTodo, this.cheGist, this.todos, this.passcode).subscribe((val) => {
                console.log("PATCH call successful value returned in body", val);
            }, error => {
                this.httpError = error.statusText;
            }, () => {
                console.log("The PATCH observable is now completed.");
            });
            event.target.value = '';
        }
        this.spinner.hide();
    }
    deleteFromGist(url, index) {
        this.spinner.show();
        if (this.confirmRowNumber === index) {
            this.httpError = void 0;
            this.bookmarks = this.bookmarks.filter(bookmark => bookmark.url !== url);
            this.resourceService.patchGist(this.gistFile, this.cheGist, this.bookmarks, this.passcode).subscribe((val) => {
                console.log("PATCH call successful value returned in body", val);
            }, error => {
                this.httpError = error.statusText;
            }, () => {
                console.log("The PATCH observable is now completed.");
            });
            this.confirmRowNumber = Number.MAX_SAFE_INTEGER;
        }
        this.confirmRowNumber = index;
        this.spinner.hide();
    }
    cancelRowDeletion() {
        this.confirmRowNumber = Number.MAX_SAFE_INTEGER;
    }
    deleteTodoFromGist(content, index) {
        this.spinner.show();
        if (this.confirmTodoRowNumber === index) {
            this.httpError = void 0;
            this.todos = this.todos.filter(todo => todo.content !== content);
            this.resourceService.patchGist(this.gistTodo, this.cheGist, this.todos, this.passcode).subscribe((val) => {
                console.log("PATCH call successful value returned in body", val);
            }, error => {
                this.httpError = error.statusText;
            }, () => {
                console.log("The PATCH observable is now completed.");
            });
            this.confirmTodoRowNumber = Number.MAX_SAFE_INTEGER;
        }
        this.confirmTodoRowNumber = index;
        this.spinner.hide();
    }
    setKeypass(keypass) {
        this.passcode = keypass;
        this.loadGist();
    }
    clearPasscode() {
        this.passcode = void 0;
        this.httpError = void 0;
    }
    search(event) {
        // event.target.value
        if (event.target.value) {
            this.bookmarks = this.bookmarks.filter(bookmark => bookmark.name.toLowerCase().includes(event.target.value.toLowerCase()));
            event.target.value = '';
        }
        else {
            this.bookmarks = this.deepClone(this.original);
        }
    }
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/jsonfetch/jsonfetch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/jsonfetch/jsonfetch.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".json-fetcher {\n  padding: 20px;\n}\n.json-fetcher .keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoZW5nL3dvcmtzcGFjZS9jaGUtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9qc29uZmV0Y2gvanNvbmZldGNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2pzb25mZXRjaC9qc29uZmV0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUFxQixzQkFBQTtBQ0U3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvanNvbmZldGNoL2pzb25mZXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qc29uLWZldGNoZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgXG4gICAgLmtleXBhc3Mge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDgwLCAxOTEpO1xuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7IC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG4gICAgfVxufSIsIi5qc29uLWZldGNoZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmpzb24tZmV0Y2hlciAua2V5cGFzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMyNDUwYmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE3NXB4O1xuICAvKiBIYWxmIG9mIHRoZSB3aWR0aCAqL1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/resource.service */ "./src/app/config/resource.service.ts");



let JsonfetchComponent = class JsonfetchComponent {
    constructor(resource) {
        this.resource = resource;
        this.serverUrl = '';
        this.movies = void 0;
    }
    ngOnInit() {
    }
    getJSON() {
        this.resource.getJSON(this.serverUrl)
            .subscribe(movies => this.movies = JSON.stringify(movies, null, 2));
    }
};
JsonfetchComponent.ctorParameters = () => [
    { type: _config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] }
];
JsonfetchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jsonfetch',
        template: __webpack_require__(/*! raw-loader!./jsonfetch.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/jsonfetch/jsonfetch.component.html"),
        styles: [__webpack_require__(/*! ./jsonfetch.component.scss */ "./src/app/components/jsonfetch/jsonfetch.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
], JsonfetchComponent);



/***/ }),

/***/ "./src/app/components/mediaplayer/mediaplayer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mediaplayer/mediaplayer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-player {\n  align-content: space-around;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n}\n.media-player .row {\n  padding-top: 10px;\n}\n.media-player .keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoZW5nL3dvcmtzcGFjZS9jaGUtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9tZWRpYXBsYXllci9tZWRpYXBsYXllci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZWRpYXBsYXllci9tZWRpYXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFBcUIsc0JBQUE7QUNDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lZGlhcGxheWVyL21lZGlhcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhLXBsYXllciB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIC5yb3d7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cblxuICAua2V5cGFzcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDgwLCAxOTEpO1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDsgLyogSGFsZiBvZiB0aGUgd2lkdGggKi9cbn1cbn0iLCIubWVkaWEtcGxheWVyIHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWVkaWEtcGxheWVyIC5yb3cge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5tZWRpYS1wbGF5ZXIgLmtleXBhc3Mge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMjQ1MGJmO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNzVweDtcbiAgLyogSGFsZiBvZiB0aGUgd2lkdGggKi9cbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MediaplayerComponent = class MediaplayerComponent {
    constructor() {
        this.poster = 'assets/img/movie-icon.png';
        this.video = void 0;
    }
    ngOnInit() {
    }
    getMedia() {
        const options = {
            controls: true,
            autoplay: false,
            preload: 'auto',
            techOrder: ['html5']
        };
        // this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
        //   videojs.log('Your player is ready!');
        // });
        const player = videojs('my-video', options);
        player.pause();
        player.src(this.video);
        // set src track corresponding to new movie //
        player.load();
    }
    ngAfterViewInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myvid', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MediaplayerComponent.prototype, "vid", void 0);
MediaplayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mediaplayer',
        template: __webpack_require__(/*! raw-loader!./mediaplayer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mediaplayer/mediaplayer.component.html"),
        styles: [__webpack_require__(/*! ./mediaplayer.component.scss */ "./src/app/components/mediaplayer/mediaplayer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MediaplayerComponent);



/***/ }),

/***/ "./src/app/components/notes/notes.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notes .edit {\n  border-radius: 12px;\n  border: 2px solid #cccccc;\n  padding: 20px;\n}\n.notes .edit .textarea-label {\n  font-weight: 300;\n  font-size: 1.6rem;\n  color: #414040;\n}\n.notes .button-group {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.notes .button-group button {\n  font-weight: bold;\n  font-size: 1em;\n  text-align: center;\n  display: block;\n}\n.notes textarea#editNoteArea {\n  resize: none;\n  height: 500px;\n  border: 2px solid #cccccc;\n  padding: 5px;\n  font-family: Tahoma, sans-serif;\n}\n.keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoZW5nL3dvcmtzcGFjZS9jaGUtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQVI7QURFUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RSO0FER1E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNEWjtBREtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ0hSO0FETUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFBcUIsc0JBQUE7QUNGekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGVzIHtcbiAgICAuZWRpdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IFxuXG4gICAgICAgIC50ZXh0YXJlYS1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICBjb2xvcjogIzQxNDA0MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGV4dGFyZWEjZWRpdE5vdGVBcmVhe1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICB9XG59XG4ua2V5cGFzcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDgwLCAxOTEpO1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDsgLyogSGFsZiBvZiB0aGUgd2lkdGggKi9cbn1cbiIsIi5ub3RlcyAuZWRpdCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubm90ZXMgLmVkaXQgLnRleHRhcmVhLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjNDE0MDQwO1xufVxuLm5vdGVzIC5idXR0b24tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubm90ZXMgLmJ1dHRvbi1ncm91cCBidXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubm90ZXMgdGV4dGFyZWEjZWRpdE5vdGVBcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG5cbi5rZXlwYXNzIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzI0NTBiZjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTc1cHg7XG4gIC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let NotesComponent = class NotesComponent {
    constructor(resourceService, spinner) {
        this.resourceService = resourceService;
        this.spinner = spinner;
        this.editingNoteContent = '';
        this.editingNoteId = void 0;
        this.cheGist = 'https://api.github.com/gists/973de2c3eb3f55518e97a1d3d18eb79e';
        this.gistFile = 'notes.json';
        this.passcode = void 0;
        this.httpError = '';
        this.selectedNumber = Number.MAX_SAFE_INTEGER;
        this.confirmDeletion = false;
    }
    ngOnInit() { }
    generateId() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    getTitle(content) {
        return content.slice(0, 35);
    }
    editNote(id, index) {
        const note = this.notes.filter(note => note.id === id);
        this.selectedNumber = index;
        this.editingNoteId = id;
        this.editingNoteContent = note[0].content;
    }
    cancelUpdateNote() {
        this.editingNoteContent = '';
        this.editingNoteId = void 0;
        this.selectedNumber = Number.MAX_SAFE_INTEGER;
        this.confirmDeletion = false;
    }
    loadNotes() {
        this.spinner.show();
        this.httpError = void 0;
        this.resourceService.getGist(this.cheGist, this.passcode).subscribe(result => {
            this.notes = JSON.parse(result[this.gistFile]['content']).data;
            this.original = this.deepClone(this.notes);
            this.spinner.hide();
        }, error => {
            this.httpError = error.statusText;
            this.spinner.hide();
        });
    }
    addNote() {
        this.spinner.show();
        this.httpError = void 0;
        const newEntry = {
            id: this.generateId(),
            content: this.editingNoteContent
        };
        this.notes.push(newEntry);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe((val) => {
            console.log("PATCH call successful value returned in body", val);
            this.spinner.hide();
        }, error => {
            this.httpError = error.statusText;
            this.spinner.hide();
        }, () => {
            console.log("The PATCH observable is now completed.");
        });
        this.editingNoteContent = '';
    }
    updateNote() {
        this.spinner.show();
        this.httpError = void 0;
        if (this.editingNoteId) {
            this.notes.map(note => note.id === this.editingNoteId ? note.content = this.editingNoteContent : note);
            this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe((val) => {
                console.log("PATCH call successful value returned in body", val);
                this.spinner.hide();
            }, error => {
                this.httpError = error.statusText;
                this.spinner.hide();
            }, () => {
                console.log("The PATCH observable is now completed.");
            });
        }
    }
    deleteNote() {
        this.spinner.show();
        this.httpError = void 0;
        this.notes = this.notes.filter(note => note.id !== this.editingNoteId);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe((val) => {
            console.log("PATCH call successful value returned in body", val);
            this.selectedNumber = Number.MAX_SAFE_INTEGER;
            this.editingNoteId = void 0;
            this.editingNoteContent = void 0;
            this.cancelUpdateNote();
        }, error => {
            this.httpError = error.statusText;
            this.spinner.hide();
        }, () => {
            console.log("The PATCH observable is now completed.");
        });
        this.spinner.hide();
    }
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    setKeypass(keypass) {
        this.passcode = keypass;
        this.loadNotes();
    }
    clearPasscode() {
        this.passcode = void 0;
        this.httpError = void 0;
    }
    toggleDeleteFlag() {
        this.confirmDeletion = !this.confirmDeletion;
    }
    search(event) {
        // event.target.value
        if (event.target.value) {
            this.notes = this.notes.filter(note => note.content.toLowerCase().includes(event.target.value.toLowerCase()));
            event.target.value = '';
        }
        else {
            this.notes = this.deepClone(this.original);
        }
    }
};
NotesComponent.ctorParameters = () => [
    { type: src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: __webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/notes/notes.component.html"),
        styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/components/notes/notes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], NotesComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);





let ResourceService = class ResourceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getJSON(url) {
        return this.httpClient.get(url);
    }
    getGist(url, passcode) {
        return this.httpClient.get(url, this.getHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => resp['files']));
    }
    patchGist(patchFile, url, content, passcode) {
        const structuredContent = {
            date: new Date(),
            data: content
        };
        const payload = {
            description: "Bookmarks",
            files: {
                patchFile: {
                    "filename": patchFile,
                    "content": JSON.stringify(structuredContent)
                }
            }
        };
        return this.httpClient.patch(url, payload, this.getHeaders(passcode));
    }
    getHeaders(passcode) {
        const encoded = 'U2FsdGVkX19NvA7TMWNIYZ8JmfmsE2ZHOp3NbfBY68AH95uhDU4g5dRqrelCRrIUMVp3PsjKVLeKOZribMWOLQ==';
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': `token ${this.decryptToken(encoded, passcode)}`
            })
        };
    }
    decryptToken(encoded, passcode) {
        const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(encoded, passcode);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8);
    }
};
ResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ResourceService);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cheng/workspace/che-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map