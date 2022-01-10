"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_damigroupinc_com_customers_onequality_oneqservices_snow_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 2817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ 5266);







let Tab1Page = class Tab1Page {
    constructor(http, alertController, global) {
        this.http = http;
        this.alertController = alertController;
        this.global = global;
        this.date_job = new Date();
        this.showDate();
    }
    showDate() {
        console.log(' veja o update da data aqui e agora: ', 'Date: ', this.date_job, 'Snow: ', this.snow, 'Ice melt H: ', this.icemelt_h, '" I: ', this.icemelt_i, 'Plaw H: ', this.plaw_h, ' " I: ', this.plaw_i, 'Shoviling H: ', this.shoviling_h, ' " I: ', this.shoviling_i, 'Obs: ', this.obs);
        // still inserted on database
    }
    insertJob() {
        let postData = {
            date_job: this.date_job,
            snow: this.snow,
            icemelt_h: this.icemelt_h,
            icemelt_i: this.icemelt_i,
            plaw_h: this.plaw_h,
            plaw_i: this.plaw_i,
            shoviling_h: this.shoviling_h,
            shoviling_i: this.shoviling_i,
            obs: this.obs,
        };
        console.log(postData);
        this.http.put(this.global.urlServer + 'insertJob', postData).subscribe((data) => {
            console.log('Send Work Order was a success!', data);
            this.global.presentToastGeneric('Send Work Order was a success!', 'success');
        }, error => {
            this.global.presentToastGeneric('Error when to send work order, try again!', 'error');
            console.log(error);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _C_damigroupinc_com_customers_onequality_oneqservices_snow_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Form </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-item class=\"drop-categoria\" style=\"margin-bottom: 1%\">\n      <ion-label position=\"stacked\">Date</ion-label>\n      <ion-input\n        name=\"date_job\"\n        id=\"date_job\"\n        value=\"date_job\"\n        type=\"date\"\n        required\n        [(ngModel)]=\"date_job\"\n        style=\"background-color: '#red'\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Snow (\"):</ion-label>\n      <ion-input \n      name=\"snow\" \n      id=\"snow\" \n      required\n      [(ngModel)]=\"snow\"></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Shoviling (h):</ion-label>\n          <ion-input\n            type=\"number\"\n            name=\"shoviling_h\"\n            id=\"shoviling_h\"\n            [(ngModel)]=\"shoviling_h\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Shoviling (\")</ion-label>\n          <ion-input\n            type=\"number\"\n            name=\"shoviling_i\"\n            id=\"shoviling_i\"\n            [(ngModel)]=\"shoviling_i\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Ice Melt (h):</ion-label>\n          <ion-input\n            type=\"number\"\n            name=\"icemelt_h\"\n            id=\"icemelt_h\"\n            [(ngModel)]=\"icemelt_h\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Ice Melt (\")</ion-label>\n          <ion-input\n            type=\"number\"\n            name=\"icemelt_i\"\n            id=\"icemelt_i\"\n            [(ngModel)]=\"icemelt_i\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Plaw (h):</ion-label>\n          <ion-input\n            type=\"number\"\n            name=\"plaw_h\"\n            id=\"plaw_h\"\n            [(ngModel)]=\"plaw_h\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Plaw (\")</ion-label>\n          <ion-input\n            type=\"number\"\n            name=\"plaw_i\"\n            id=\"plaw_i\"\n            [(ngModel)]=\"plaw_i\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-label position=\"stacked\">Obs:</ion-label>\n      <ion-input name=\"obs\" id=\"obs\" [(ngModel)]=\"obs\"> </ion-input>\n    </ion-item>\n    <div align='center'>\n    <ion-button\n      size=\"small\"\n      color=\"primary\"\n      class=\"pt-xs--4\"\n      ion-button\n      (click)=\"insertJob()\"\n    >\n      <ion-icon name=\"save\"></ion-icon> Insert job into database\n    </ion-button>\n    </div>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-content {\n  --background: #f2f2f7;\n}\n\nion-datetime {\n  height: auto;\n  width: auto;\n  max-width: 350px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));\n  grid-gap: 0 10px;\n}\n\nion-modal {\n  --width: 290px;\n  --height: 382px;\n  --border-radius: 8px;\n}\n\nion-modal ion-datetime {\n  height: 382px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBQUoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2YyZjJmNztcbiAgfVxuXG4gIGlvbi1kYXRldGltZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgfVxuXG4gIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjg4cHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAwIDEwcHg7XG4gIH1cblxuICBpb24tbW9kYWwge1xuICAgIC0td2lkdGg6IDI5MHB4O1xuICAgIC0taGVpZ2h0OiAzODJweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG4gIGlvbi1tb2RhbCBpb24tZGF0ZXRpbWUge1xuICAgIGhlaWdodDogMzgycHg7XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map