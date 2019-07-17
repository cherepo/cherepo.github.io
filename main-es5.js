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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">CHE.APPS</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <!--<li class=\"nav-item\">-->\n      <!--  <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>-->\n      <!--</li>-->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/notes\" routerLinkActive=\"active\">Notes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/memo\" routerLinkActive=\"active\">Memo</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/encryption\" routerLinkActive=\"active\">Encryption</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/media-player\" routerLinkActive=\"active\">Media Player</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/json-fetcher\" routerLinkActive=\"active\">Json Fetcher</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://chengz.freeshell.org\">80's</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"app-content\">\n  <div class=\"center-content\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

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

/***/ "./node_modules/raw-loader/index.js!./src/app/components/memo/memo.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/memo/memo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<div class=\"row alert\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"httpError\">\n        <span>Error: {{httpError}}</span>\n        <button class=\"btn btn-secondary reset-btn\" type=\"button\" (click)=\"clearPasscode()\">Retry</button>\n    </div>\n</div>\n<div class=\"keypass input-group\" *ngIf=\"!passcode\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Notes Keypass\" (keyup.enter)=\"setKeypass(keypass.value)\" aria-describedby=\"basic-addon2\" #keypass>\n    <div class=\"input-group-append\">\n        <a class=\"input-group-text\" (click)=\"setKeypass(keypass.value)\">Unlock</a>\n    </div>\n</div>\n\n<div class=\"row notes\" *ngIf=\"passcode\">\n    <div class=\"col-md-8 edit\">\n        <div>\n            <div class=\"form-group\">\n              <label class=\"textarea-label\" for=\"editNoteArea\">Edit note</label>\n              <simplemde style=\"height: 300px\" class=\"edit-area\" [(ngModel)]=\"editingNoteContent\" name=\"edit-note-form\"></simplemde>\n            </div>\n            <div *ngIf=\"!confirmDeletion\" class=\"form-group button-group\">\n                <button *ngIf=\"!editingNoteId\" type=\"button\" class=\"btn btn-warning\" (click)=\"addNote()\">Add New</button>\n                <button *ngIf=\"editingNoteId\" [attr.disabled]=\"editingNoteContent ? null : true\" (click)=\"updateNote()\" type=\"button\" class=\"btn btn-danger\">Update</button>\n                <button *ngIf=\"selectedNumber >= 0\" [attr.disabled]=\"selectedNumber >= 0 && editingNoteContent ? null : true\" (click)=\"toggleDeleteFlag()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n                <button [attr.disabled]=\"editingNoteContent ? null : true\" (click)=\"cancelUpdateNote()\" type=\"button\" class=\"btn btn-secondary\">Cancel</button>\n            </div>\n            <div *ngIf=\"confirmDeletion\" class=\"form-group button-group\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteNote()\">Confirm</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleDeleteFlag()\">Cancel</button>\n            </div>\n        </div>\n    </div>  \n    <div class=\"col-md-4 notelist\">\n        <div class=\"search input-group mb-3\" *ngIf=\"notes\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"search($event)\" [(ngModel)]='searchString'>\n        </div>\n        <div class=\"search-result\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item item-list\"\n                    *ngFor=\"let note of notes; let i = index\"\n                    (click) = \"editNote(note._id, i)\">\n                    {{getTitle(note.content)}}\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

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

module.exports = "nav {\n  z-index: 999;\n}\n\n.app-content {\n  padding: 0 20pt;\n}\n\n.app-content .app-header {\n  font-weight: 300;\n  padding: 15pt 0;\n}\n\n@media (max-width: 767px) {\n  .app-content .center-content {\n    padding-top: 20pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FESUk7RUFGRjtJQUdJLGlCQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB0O1xuXG4gIC5hcHAtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmc6IDE1cHQgMDtcbiAgfVxuXG4gIC5jZW50ZXItY29udGVudCB7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aCA6IDc2N3B4KSB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBwdDtcbiAgICB9XG5cbiAgfVxufSIsIm5hdiB7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB0O1xufVxuLmFwcC1jb250ZW50IC5hcHAtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZzogMTVwdCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hcHAtY29udGVudCAuY2VudGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB0O1xuICB9XG59Il19 */"

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
        this.title = 'cheapps';
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_simplemde__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-simplemde */ "./node_modules/ngx-simplemde/esm5/simplemde.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mediaplayer/mediaplayer.component */ "./src/app/components/mediaplayer/mediaplayer.component.ts");
/* harmony import */ var _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/encryption/encryption.component */ "./src/app/components/encryption/encryption.component.ts");
/* harmony import */ var _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jsonfetch/jsonfetch.component */ "./src/app/components/jsonfetch/jsonfetch.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_memo_memo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/memo/memo.component */ "./src/app/components/memo/memo.component.ts");















var appRoutes = [
    { path: 'media-player', component: _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_9__["MediaplayerComponent"] },
    { path: 'json-fetcher', component: _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_11__["JsonfetchComponent"] },
    { path: 'encryption', component: _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_10__["EncryptionComponent"] },
    { path: 'notes', component: _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"] },
    { path: 'memo', component: _components_memo_memo_component__WEBPACK_IMPORTED_MODULE_14__["MemoComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_mediaplayer_mediaplayer_component__WEBPACK_IMPORTED_MODULE_9__["MediaplayerComponent"],
                _components_encryption_encryption_component__WEBPACK_IMPORTED_MODULE_10__["EncryptionComponent"],
                _components_jsonfetch_jsonfetch_component__WEBPACK_IMPORTED_MODULE_11__["JsonfetchComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"],
                _components_memo_memo_component__WEBPACK_IMPORTED_MODULE_14__["MemoComponent"]
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
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/encryption/encryption.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/encryption/encryption.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#encryption-page {\n  /* encrypt app */\n}\n#encryption-page .encryption {\n  min-width: 300px;\n  max-width: 640px;\n  margin-top: 10px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n  height: 100%;\n  color: white;\n  background-color: rgba(43, 62, 99, 0.9);\n  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZW5jcnlwdGlvbi9lbmNyeXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VuY3J5cHRpb24vZW5jcnlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBSUEsK0NBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5jcnlwdGlvbi9lbmNyeXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VuY3J5cHRpb24tcGFnZSB7XG4gIC8qIGVuY3J5cHQgYXBwICovXG4gIC5lbmNyeXB0aW9ue1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA2MiwgOTksIDAuOSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XG4gIH0gXG59XG4iLCIjZW5jcnlwdGlvbi1wYWdlIHtcbiAgLyogZW5jcnlwdCBhcHAgKi9cbn1cbiNlbmNyeXB0aW9uLXBhZ2UgLmVuY3J5cHRpb24ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNjIsIDk5LCAwLjkpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



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
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(this.cleanText, this.password);
        this.result = encrypted;
        this.cleanText = '';
        this.password = '';
    };
    EncryptionComponent.prototype.decrypt = function () {
        this.result = '';
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(this.cleanText, this.password);
        this.result = decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
        this.cleanText = '';
        this.password = '';
    };
    EncryptionComponent.prototype.clearTextarea = function () {
        this.cleanText = '';
        this.password = '';
        this.result = '';
    };
    EncryptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encryption',
            template: __webpack_require__(/*! raw-loader!./encryption.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/encryption/encryption.component.html"),
            styles: [__webpack_require__(/*! ./encryption.component.scss */ "./src/app/components/encryption/encryption.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EncryptionComponent);
    return EncryptionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  width: -webkit-fill-available;\n}\n.alert .reset-btn {\n  float: right;\n}\n.keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n.home {\n  margin-bottom: 10px;\n}\n.home ul {\n  list-style-type: none;\n}\n.home .delete-btn {\n  float: right;\n  margin: 0 5px;\n}\n.home .alert-danger {\n  height: 64px;\n}\n.home .item-list {\n  display: block;\n  align-content: space-between;\n}\n@media (max-width: 767px) {\n  .home .todo {\n    margin-top: 20pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBREVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQXFCLHNCQUFBO0FDRXpCO0FEQUE7RUFDSSxtQkFBQTtBQ0dKO0FEREk7RUFDSSxxQkFBQTtBQ0dSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VSO0FEQ0k7RUFDSSxZQUFBO0FDQ1I7QURFSTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQ0FSO0FESVE7RUFESjtJQUVRLGdCQUFBO0VDRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcblxuICAgIC5yZXNldC1idG4ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuLmtleXBhc3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA4MCwgMTkxKTtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7IC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59XG4uaG9tZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZGVsZXRlLWJ0biB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG5cbiAgICAuYWxlcnQtZGFuZ2VyIHtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgIH1cblxuICAgIC5pdGVtLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAudG9kbyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoIDogNzY3cHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuYWxlcnQge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbi5hbGVydCAucmVzZXQtYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ua2V5cGFzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMyNDUwYmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE3NXB4O1xuICAvKiBIYWxmIG9mIHRoZSB3aWR0aCAqL1xufVxuXG4uaG9tZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaG9tZSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5ob21lIC5kZWxldGUtYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhvbWUgLmFsZXJ0LWRhbmdlciB7XG4gIGhlaWdodDogNjRweDtcbn1cbi5ob21lIC5pdGVtLWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaG9tZSAudG9kbyB7XG4gICAgbWFyZ2luLXRvcDogMjBwdDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(resourceService, spinner) {
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
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.loadGist = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        this.resourceService.getGist(this.cheGist, this.passcode).subscribe(function (result) {
            _this.bookmarks = JSON.parse(result[_this.gistFile]['content']).data;
            _this.original = _this.deepClone(_this.bookmarks);
            _this.todos = JSON.parse(result[_this.gistTodo]['content']).data;
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
        });
    };
    HomeComponent.prototype.addToGist = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        var newEntry = {
            name: this.bookmarkName,
            url: this.bookmarkUrl
        };
        this.bookmarks.push(newEntry);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.bookmarks, this.passcode).subscribe(function (val) {
            //Todo show info notification
        }, function (error) {
            _this.httpError = error.statusText;
        }, function () {
            console.log("The PATCH observable is now completed.");
        });
        this.bookmarkName = '';
        this.bookmarkUrl = '';
        this.spinner.hide();
    };
    HomeComponent.prototype.addTodo = function (event) {
        var _this = this;
        this.spinner.show();
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
        this.spinner.hide();
    };
    HomeComponent.prototype.deleteFromGist = function (url, index) {
        var _this = this;
        this.spinner.show();
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
        this.spinner.hide();
    };
    HomeComponent.prototype.cancelRowDeletion = function () {
        this.confirmRowNumber = Number.MAX_SAFE_INTEGER;
    };
    HomeComponent.prototype.deleteTodoFromGist = function (content, index) {
        var _this = this;
        this.spinner.show();
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
        this.spinner.hide();
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
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/jsonfetch/jsonfetch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/jsonfetch/jsonfetch.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".json-fetcher {\n  padding: 20px;\n}\n.json-fetcher .keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvanNvbmZldGNoL2pzb25mZXRjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9qc29uZmV0Y2gvanNvbmZldGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFBcUIsc0JBQUE7QUNFN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pzb25mZXRjaC9qc29uZmV0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanNvbi1mZXRjaGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIFxuICAgIC5rZXlwYXNzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDM2LCA4MCwgMTkxKTtcbiAgICAgICAgcGFkZGluZzogMjBweDsgXG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE3NXB4OyAvKiBIYWxmIG9mIHRoZSB3aWR0aCAqL1xuICAgIH1cbn0iLCIuanNvbi1mZXRjaGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5qc29uLWZldGNoZXIgLmtleXBhc3Mge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMjQ1MGJmO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNzVweDtcbiAgLyogSGFsZiBvZiB0aGUgd2lkdGggKi9cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/resource.service */ "./src/app/config/resource.service.ts");



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
    JsonfetchComponent.ctorParameters = function () { return [
        { type: _config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] }
    ]; };
    JsonfetchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jsonfetch',
            template: __webpack_require__(/*! raw-loader!./jsonfetch.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/jsonfetch/jsonfetch.component.html"),
            styles: [__webpack_require__(/*! ./jsonfetch.component.scss */ "./src/app/components/jsonfetch/jsonfetch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
    ], JsonfetchComponent);
    return JsonfetchComponent;
}());



/***/ }),

/***/ "./src/app/components/mediaplayer/mediaplayer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mediaplayer/mediaplayer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-player {\n  align-content: space-around;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n}\n.media-player .row {\n  padding-top: 10px;\n}\n.media-player .keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbWVkaWFwbGF5ZXIvbWVkaWFwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWFwbGF5ZXIvbWVkaWFwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQXFCLHNCQUFBO0FDQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZWRpYXBsYXllci9tZWRpYXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpYS1wbGF5ZXIge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcblxuICAucm93e1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG5cbiAgLmtleXBhc3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA4MCwgMTkxKTtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7IC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59XG59IiwiLm1lZGlhLXBsYXllciB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1lZGlhLXBsYXllciAucm93IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubWVkaWEtcGxheWVyIC5rZXlwYXNzIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzI0NTBiZjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTc1cHg7XG4gIC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    return MediaplayerComponent;
}());



/***/ }),

/***/ "./src/app/components/memo/memo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/memo/memo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notes .edit {\n  border-radius: 12px;\n  border: 2px solid #cccccc;\n  padding: 20px;\n}\n.notes .edit .textarea-label {\n  font-weight: 300;\n  font-size: 1.6rem;\n  color: #414040;\n}\n.notes .button-group {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.notes .button-group button {\n  font-weight: bold;\n  font-size: 1em;\n  text-align: center;\n  display: block;\n}\n.notes textarea#editNoteArea {\n  resize: none;\n  height: 500px;\n  border: 2px solid #cccccc;\n  padding: 5px;\n  font-family: Tahoma, sans-serif;\n}\n.keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbWVtby9tZW1vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbW8vbWVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQVI7QURFUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RSO0FER1E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNEWjtBREtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ0hSO0FETUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFBcUIsc0JBQUE7QUNGekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbW8vbWVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlcyB7XG4gICAgLmVkaXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcblxuICAgICAgICAudGV4dGFyZWEtbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM0MTQwNDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbi1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhI2VkaXROb3RlQXJlYXtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgfVxufVxuLmtleXBhc3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA4MCwgMTkxKTtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7IC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59XG4iLCIubm90ZXMgLmVkaXQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm5vdGVzIC5lZGl0IC50ZXh0YXJlYS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzQxNDA0MDtcbn1cbi5ub3RlcyAuYnV0dG9uLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5vdGVzIC5idXR0b24tZ3JvdXAgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5vdGVzIHRleHRhcmVhI2VkaXROb3RlQXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjY2NjYztcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogVGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG4ua2V5cGFzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMyNDUwYmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE3NXB4O1xuICAvKiBIYWxmIG9mIHRoZSB3aWR0aCAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/memo/memo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/memo/memo.component.ts ***!
  \***************************************************/
/*! exports provided: MemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoComponent", function() { return MemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var MemoComponent = /** @class */ (function () {
    function MemoComponent(resourceService, spinner) {
        this.resourceService = resourceService;
        this.spinner = spinner;
        this.notes = [];
        this.db = void 0;
        this.editingNoteContent = '';
        this.editingNoteId = void 0;
        this.passcode = void 0;
        this.httpError = '';
        this.selectedNumber = Number.MAX_SAFE_INTEGER;
        this.confirmDeletion = false;
    }
    MemoComponent.prototype.ngOnInit = function () { };
    MemoComponent.prototype.generateId = function () {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    };
    MemoComponent.prototype.getTitle = function (content) {
        return content.slice(0, 35);
    };
    MemoComponent.prototype.editNote = function (id, index) {
        console.log('id', id);
        console.log('index', index);
        var note = this.notes.filter(function (note) { return note._id === id; });
        this.selectedNumber = index;
        this.editingNoteId = id;
        this.editingNoteContent = note[0].content;
    };
    MemoComponent.prototype.cancelUpdateNote = function () {
        this.editingNoteContent = '';
        this.editingNoteId = void 0;
        this.selectedNumber = Number.MAX_SAFE_INTEGER;
        this.confirmDeletion = false;
    };
    MemoComponent.prototype.loadNotes = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        this.resourceService.awsGetNotes(this.passcode).subscribe(function (result) {
            _this.notes = [];
            result.forEach(function (element) {
                _this.notes.push(element);
            });
            // this.notes = JSON.parse(result);
            _this.original = _this.deepClone(_this.notes);
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        });
        this.spinner.hide();
    };
    MemoComponent.prototype.addNote = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        var body = "{\n      \"content\": \"" + this.editingNoteContent + "\"\n    }";
        this.resourceService.awsAddNote(body, this.passcode).subscribe(function (result) {
            _this.loadNotes();
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        });
        this.editingNoteContent = '';
        this.spinner.hide();
    };
    MemoComponent.prototype.updateNote = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        var body = "{\n      \"content\": \"" + this.editingNoteContent + "\"\n    }";
        this.resourceService.awsUpdateNotes(this.editingNoteId, body, this.passcode).subscribe(function (result) {
            _this.cancelUpdateNote();
            _this.loadNotes();
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        });
        this.spinner.hide();
    };
    MemoComponent.prototype.deleteNote = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        this.resourceService.awsDeleteNote(this.editingNoteId, this.passcode).subscribe(function (result) {
            _this.cancelUpdateNote();
            _this.loadNotes();
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        });
        this.spinner.hide();
    };
    MemoComponent.prototype.deepClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    MemoComponent.prototype.setKeypass = function (keypass) {
        this.passcode = keypass;
        this.loadNotes();
    };
    MemoComponent.prototype.clearPasscode = function () {
        this.passcode = void 0;
        this.httpError = void 0;
    };
    MemoComponent.prototype.toggleDeleteFlag = function () {
        this.confirmDeletion = !this.confirmDeletion;
    };
    MemoComponent.prototype.search = function (event) {
        // event.target.value
        if (event.target.value) {
            this.notes = this.notes.filter(function (note) { return note.content.toLowerCase().includes(event.target.value.toLowerCase()); });
            event.target.value = '';
        }
        else {
            this.notes = this.deepClone(this.original);
        }
    };
    MemoComponent.ctorParameters = function () { return [
        { type: src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    MemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-memo',
            template: __webpack_require__(/*! raw-loader!./memo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/memo/memo.component.html"),
            styles: [__webpack_require__(/*! ./memo.component.scss */ "./src/app/components/memo/memo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], MemoComponent);
    return MemoComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/notes.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notes .edit {\n  border-radius: 12px;\n  border: 2px solid #cccccc;\n  padding: 20px;\n}\n.notes .edit .textarea-label {\n  font-weight: 300;\n  font-size: 1.6rem;\n  color: #414040;\n}\n.notes .button-group {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.notes .button-group button {\n  font-weight: bold;\n  font-size: 1em;\n  text-align: center;\n  display: block;\n}\n.notes textarea#editNoteArea {\n  resize: none;\n  height: 500px;\n  border: 2px solid #cccccc;\n  padding: 5px;\n  font-family: Tahoma, sans-serif;\n}\n.keypass {\n  border-radius: 12px;\n  background: #2450bf;\n  padding: 20px;\n  width: 350px;\n  left: 50%;\n  margin-left: -175px;\n  /* Half of the width */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jem91L0Rlc2t0b3AvY2hlbmcvY2hlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERVE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FaO0FER0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNEUjtBREdRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNIUjtBRE1BO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQXFCLHNCQUFBO0FDRnpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlcyB7XG4gICAgLmVkaXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcblxuICAgICAgICAudGV4dGFyZWEtbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM0MTQwNDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbi1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhI2VkaXROb3RlQXJlYXtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgfVxufVxuLmtleXBhc3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA4MCwgMTkxKTtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7IC8qIEhhbGYgb2YgdGhlIHdpZHRoICovXG59XG4iLCIubm90ZXMgLmVkaXQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm5vdGVzIC5lZGl0IC50ZXh0YXJlYS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzQxNDA0MDtcbn1cbi5ub3RlcyAuYnV0dG9uLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5vdGVzIC5idXR0b24tZ3JvdXAgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5vdGVzIHRleHRhcmVhI2VkaXROb3RlQXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjY2NjYztcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogVGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG4ua2V5cGFzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMyNDUwYmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE3NXB4O1xuICAvKiBIYWxmIG9mIHRoZSB3aWR0aCAqL1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/resource.service */ "./src/app/config/resource.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var NotesComponent = /** @class */ (function () {
    function NotesComponent(resourceService, spinner) {
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
    NotesComponent.prototype.ngOnInit = function () { };
    NotesComponent.prototype.generateId = function () {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    };
    NotesComponent.prototype.getTitle = function (content) {
        return content.slice(0, 35);
    };
    NotesComponent.prototype.editNote = function (id, index) {
        var note = this.notes.filter(function (note) { return note.id === id; });
        this.selectedNumber = index;
        this.editingNoteId = id;
        this.editingNoteContent = note[0].content;
    };
    NotesComponent.prototype.cancelUpdateNote = function () {
        this.editingNoteContent = '';
        this.editingNoteId = void 0;
        this.selectedNumber = Number.MAX_SAFE_INTEGER;
        this.confirmDeletion = false;
    };
    NotesComponent.prototype.loadNotes = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        this.resourceService.getGist(this.cheGist, this.passcode).subscribe(function (result) {
            _this.notes = JSON.parse(result[_this.gistFile]['content']).data;
            _this.original = _this.deepClone(_this.notes);
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        });
    };
    NotesComponent.prototype.addNote = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        var newEntry = {
            id: this.generateId(),
            content: this.editingNoteContent
        };
        this.notes.push(newEntry);
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe(function (val) {
            console.log("PATCH call successful value returned in body", val);
            _this.spinner.hide();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        }, function () {
            console.log("The PATCH observable is now completed.");
        });
        this.editingNoteContent = '';
    };
    NotesComponent.prototype.updateNote = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        if (this.editingNoteId) {
            this.notes.map(function (note) {
                return note.id === _this.editingNoteId ? note.content = _this.editingNoteContent : note;
            });
            this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe(function (val) {
                console.log("PATCH call successful value returned in body", val);
                _this.spinner.hide();
            }, function (error) {
                _this.httpError = error.statusText;
                _this.spinner.hide();
            }, function () {
                console.log("The PATCH observable is now completed.");
            });
        }
    };
    NotesComponent.prototype.deleteNote = function () {
        var _this = this;
        this.spinner.show();
        this.httpError = void 0;
        this.notes = this.notes.filter(function (note) { return note.id !== _this.editingNoteId; });
        this.resourceService.patchGist(this.gistFile, this.cheGist, this.notes, this.passcode).subscribe(function (val) {
            console.log("PATCH call successful value returned in body", val);
            _this.selectedNumber = Number.MAX_SAFE_INTEGER;
            _this.editingNoteId = void 0;
            _this.editingNoteContent = void 0;
            _this.cancelUpdateNote();
        }, function (error) {
            _this.httpError = error.statusText;
            _this.spinner.hide();
        }, function () {
            console.log("The PATCH observable is now completed.");
        });
        this.spinner.hide();
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
    NotesComponent.prototype.toggleDeleteFlag = function () {
        this.confirmDeletion = !this.confirmDeletion;
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
    NotesComponent.ctorParameters = function () { return [
        { type: src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/components/notes/notes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);





var ResourceService = /** @class */ (function () {
    function ResourceService(httpClient) {
        this.httpClient = httpClient;
    }
    ResourceService.prototype.getJSON = function (url) {
        return this.httpClient.get(url);
    };
    ResourceService.prototype.getGist = function (url, passcode) {
        return this.httpClient.get(url, this.getHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp['files']; }));
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
    /*
      POST - https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes
      GET - https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes/{id}
      GET - https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes
      PUT - https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes/{id}
      DELETE - https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes/{id}
    */
    ResourceService.prototype.awsGetNotes = function (passcode) {
        var awsurl = 'https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes';
        return this.httpClient.get(awsurl, this.getAWSHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ResourceService.prototype.awsUpdateNotes = function (id, body, passcode) {
        var awsurl = "https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes/" + id;
        return this.httpClient.put(awsurl, body, this.getAWSHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ResourceService.prototype.awsAddNote = function (body, passcode) {
        var awsurl = 'https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes';
        return this.httpClient.post(awsurl, body, this.getAWSHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ResourceService.prototype.awsDeleteNote = function (id, passcode) {
        var awsurl = "https://vshb53js6h.execute-api.us-east-1.amazonaws.com/dev/notes/" + id;
        return this.httpClient.delete(awsurl, this.getAWSHeaders(passcode))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ResourceService.prototype.getHeaders = function (passcode) {
        var encoded = 'U2FsdGVkX19NvA7TMWNIYZ8JmfmsE2ZHOp3NbfBY68AH95uhDU4g5dRqrelCRrIUMVp3PsjKVLeKOZribMWOLQ==';
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "token " + this.decryptToken(passcode, encoded)
            })
        };
    };
    ResourceService.prototype.getAWSHeaders = function (passcode) {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest',
                'app-token': this.decryptToken(passcode)
            })
        };
    };
    ResourceService.prototype.decryptToken = function (passcode, encoded) {
        if (encoded === void 0) { encoded = 'U2FsdGVkX1+8w5+OoFnMyjuNRT0u+Dg02Qk/1x2LCUMgUY07u1VbColbH/1NPBeF'; }
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(encoded, passcode);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8);
    };
    ResourceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

module.exports = __webpack_require__(/*! /Users/czou/Desktop/cheng/che-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map