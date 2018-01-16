webpackJsonp([1],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentPageModule = (function () {
    function CommentPageModule() {
    }
    CommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */]),
            ],
        })
    ], CommentPageModule);
    return CommentPageModule;
}());

//# sourceMappingURL=comment.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = (function () {
    function CommentPage(navCtrl, platform, navParams, viewCtrl, fb) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.commentForm = fb.group({
            "rating": [5, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "author": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "comment": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "date": new Date().toISOString()
        });
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // addComment() {
    //     let comm = this.comment.value;
    //     this.comm.push
    //   }
    CommentPage.prototype.onSubmit = function () {
        console.log(this.commentForm.value);
        this.viewCtrl.dismiss(this.commentForm.value);
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"C:\wamp64\www\coursera\Ionic\conFusion\src\pages\comment\comment.html"*/'<!--\n\n  Generated template for the CommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="primary-pale">\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Comment on Dish</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="commentForm">\n\n    <ion-item>\n\n      <ion-label><strong>Rating</strong></ion-label>\n\n      <ion-range min="1" max="5" step="1" snaps="true" formControlName="rating">\n\n        <ion-label range-left>1</ion-label>\n\n        <ion-label range-right>5</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label><strong>Author</strong></ion-label>\n\n      <ion-input type="text" formControlName="author"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label><strong>Comment</strong></ion-label>\n\n      <ion-textarea formControlName="comment"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-button small block (click)="onSubmit()">Submit</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\coursera\Ionic\conFusion\src\pages\comment\comment.html"*/,
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ })

});
//# sourceMappingURL=1.js.map