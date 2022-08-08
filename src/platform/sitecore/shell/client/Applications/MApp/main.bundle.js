webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/WindowRef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".DialogHeader {\n    color: rgb(255, 255, 255);\n    margin: 0;\n    border: 0;\n    font: inherit;\n    font-size: 18px;\n    padding: 0 15px 10px;\n    line-height: 30px;\n    font-family: \"Open Sans\", Arial, sans-serif;\n}\n\n.MFrame {\n  Width: 100%;\n  Height: 100%;\n  border: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<sc-page>\n  <div scPageHeader>\n      <div class=\"DialogHeader\">{{ 'INSERT_TITLE' | translate }}</div>\n  </div>\n  <div scPageAppHeader>\n    <!-- ApplicationHeader -->\n  </div>\n  <div scPageActionBar>\n    <!-- ActionBar -->\n  </div>\n  <article scPageContent style=\"overflow:auto\" *ngIf=\"isInitialized\">\n    <!-- Content goes here -->\n    <iframe [src]=\"frameUrl\" class=\"MFrame\" style=\"max-height: calc(100vh - 60px)\"></iframe>\n    <sc-dialog-footer style=\"position:absolute;bottom:0px;width:100%\">\n      <button scButton scDialogClose (click)=\"close()\">{{ 'CLOSE' | translate }}</button>\n    </sc-dialog-footer>\n  </article>\n  <aside scPageContext>\n    <!-- Context goes here -->\n  </aside>\n</sc-page>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Asset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speak_ng_sc__ = __webpack_require__("../../../../@speak/ng-sc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Asset = (function () {
    function Asset() {
    }
    return Asset;
}());

var AppComponent = (function () {
    function AppComponent(sanitizer, ngScService, winRef, http, translate) {
        this.sanitizer = sanitizer;
        this.ngScService = ngScService;
        this.winRef = winRef;
        this.http = http;
        this.translate = translate;
        this.isInitialized = false;
        this.frameUrl = null;
        this.baseUrl = null;
        this.window = null;
        translate.setDefaultLang('en');
        translate.use('en');
        if (window.addEventListener) {
            window.addEventListener("message", this.receiveMessage.bind(this), false);
        }
        else {
            window.attachEvent("onmessage", this.receiveMessage.bind(this));
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/sitecore/MContent/GetAuthenticationDetails").subscribe(function (authenticationData) {
            _this.http.get("/api/sitecore/MContent/GetCurrentSiteId").subscribe(function (siteIdData) {
                _this.baseUrl = authenticationData['MInstance'];
                var url = authenticationData['SearchPage'];
                var externalRedirectKey = authenticationData['ExternalRedirectKey'];
                var siteId = siteIdData['site_id'];
                var currentUrl = _this.findPageUrl(window);
                var queryString = "?externalRedirectKey=" + externalRedirectKey + "&externalRedirectUrl=" + currentUrl + "&hasExternalRedirect=true";
                url = url + queryString;
                if (siteId) {
                    url = url + "&id=" + siteId;
                }
                _this.frameUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(url);
                _this.isInitialized = true;
            });
        });
        this.window = this.winRef.nativeWindow;
        this.ngScService.init();
    };
    AppComponent.prototype.getFileType = function (url) {
        // We are caching GET, but we shouldn't cache HEAD because chrome has a bug where it won't store the CORS header
        // As a GET request will override the cache control of the HEAD request, we need to fool the browser by making him thinking we are doing 2 requests on 2 different resource
        url = url + "&head=true";
        var ajaxRequest = this.http.head(url, { observe: 'response', responseType: 'text' }).map(function (resp) {
            var contentType = resp.headers.get("content-type");
            // Content type have format similar to "video/mpeg"
            // or "image/png"
            var contentTypePrefix = contentType.split("/")[0];
            // Check which content type we're dealing with
            // (image, video or other)
            if (contentTypePrefix == "image") {
                return "Image";
            }
            else if (contentTypePrefix == "video") {
                return "Video";
            }
            else {
                return "Other";
            }
            ;
        });
        return ajaxRequest;
    };
    AppComponent.prototype.findPageUrl = function (currentWindow) {
        var isInIframe = (currentWindow.parent !== currentWindow);
        if (isInIframe) {
            return this.findPageUrl(currentWindow.parent);
        }
        else {
            return currentWindow.location.href;
        }
    };
    AppComponent.prototype.close = function () {
        var radWindow;
        if (this.window.radWindow) {
            radWindow = this.window.radWindow;
            radWindow.Close();
        }
        else if (this.window.frameElement && this.window.frameElement.radWindow) {
            radWindow = this.window.frameElement.radWindow;
            radWindow.Close();
        }
        else {
            this.window.top.dialogClose();
        }
    };
    AppComponent.prototype.receiveMessage = function (event) {
        var _this = this;
        var data = event.data;
        if (data.public_link) {
            if (!data.public_link || !data.public_link) {
                throw "Public link not found. Please select one.";
            }
            ;
            this.getFileType(data.public_link).subscribe(function (fileType) {
                data.source = data.public_link;
                data.id = data.selected_asset_id;
                data.file_type = fileType;
                data.downloadText = _this.translate.instant("DOWNLOAD_TEXT");
                data.thumbnail = _this.baseUrl + "/api/gateway/" + data.selected_asset_id + "/thumbnail";
                _this.trackTelemetry(fileType);
                _this.returnResult(data);
            });
        }
    };
    AppComponent.prototype.returnResult = function (result) {
        var radWindow;
        if (this.window.radWindow) {
            radWindow = this.window.radWindow;
            radWindow.Close(result);
        }
        else if (this.window.frameElement && this.window.frameElement.radWindow) {
            radWindow = this.window.frameElement.radWindow;
            radWindow.Close(result);
        }
        else {
            var returnedResult = JSON.stringify(result);
            this.window.returnValue = returnedResult;
            this.window.top.returnValue = returnedResult;
            this.window.top.dialogClose();
        }
    };
    AppComponent.prototype.trackTelemetry = function (filetype) {
        var serviceUrl = '/api/sitecore/MContent/TrackTelemetry';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["f" /* HttpHeaders */]().set('Content-type', 'application/x-www-form-urlencoded');
        var body = 'type=' + filetype;
        this.http.post(serviceUrl, body, { headers: headers, responseType: 'text' }).subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__speak_ng_sc__["b" /* NgScService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speak_ng_sc__["b" /* NgScService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speak_ng_sc_bcl_dictionary__ = __webpack_require__("../../../../@speak/ng-sc/bcl-dictionary/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speak_ng_bcl_account_information__ = __webpack_require__("../../../../@speak/ng-bcl/account-information/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speak_ng_bcl_action_bar__ = __webpack_require__("../../../../@speak/ng-bcl/action-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speak_ng_bcl_application_header__ = __webpack_require__("../../../../@speak/ng-bcl/application-header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__speak_ng_bcl_button__ = __webpack_require__("../../../../@speak/ng-bcl/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__speak_ng_bcl_global_header__ = __webpack_require__("../../../../@speak/ng-bcl/global-header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__speak_ng_bcl_global_logo__ = __webpack_require__("../../../../@speak/ng-bcl/global-logo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__speak_ng_bcl_icon__ = __webpack_require__("../../../../@speak/ng-bcl/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__speak_ng_bcl_menu__ = __webpack_require__("../../../../@speak/ng-bcl/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__speak_ng_bcl_table__ = __webpack_require__("../../../../@speak/ng-bcl/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__speak_ng_bcl_page__ = __webpack_require__("../../../../@speak/ng-bcl/page/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__speak_ng_bcl_dialog__ = __webpack_require__("../../../../@speak/ng-bcl/dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__speak_ng_bcl__ = __webpack_require__("../../../../@speak/ng-bcl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__speak_ng_sc__ = __webpack_require__("../../../../@speak/ng-sc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__speak_ng_sc_ngx_translate_loader__ = __webpack_require__("../../../../@speak/ng-sc/ngx-translate-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__speak_ng_sc_anti_csrf__ = __webpack_require__("../../../../@speak/ng-sc/anti-csrf/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__speak_ng_bcl_account_information__["a" /* ScAccountInformationModule */],
            __WEBPACK_IMPORTED_MODULE_4__speak_ng_bcl_action_bar__["a" /* ScActionBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__speak_ng_bcl_application_header__["a" /* ScApplicationHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__speak_ng_bcl_button__["a" /* ScButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__speak_ng_bcl_global_header__["a" /* ScGlobalHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_8__speak_ng_bcl_global_logo__["a" /* ScGlobalLogoModule */],
            __WEBPACK_IMPORTED_MODULE_9__speak_ng_bcl_icon__["a" /* ScIconModule */],
            __WEBPACK_IMPORTED_MODULE_12__speak_ng_bcl_page__["a" /* ScPageModule */],
            __WEBPACK_IMPORTED_MODULE_13__speak_ng_bcl_dialog__["a" /* ScDialogModule */],
            __WEBPACK_IMPORTED_MODULE_10__speak_ng_bcl_menu__["a" /* ScMenuModule */],
            __WEBPACK_IMPORTED_MODULE_11__speak_ng_bcl_table__["a" /* ScTableModule */],
            __WEBPACK_IMPORTED_MODULE_21__speak_ng_sc_anti_csrf__["a" /* SciAntiCSRFModule */],
            __WEBPACK_IMPORTED_MODULE_2__speak_ng_sc_bcl_dictionary__["b" /* SciBclDictionaryModule */],
            __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                    useClass: __WEBPACK_IMPORTED_MODULE_20__speak_ng_sc_ngx_translate_loader__["a" /* SciTranslateLoader */],
                    deps: [__WEBPACK_IMPORTED_MODULE_18__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_20__speak_ng_sc_ngx_translate_loader__["b" /* TRANSLATE_ITEM_ID */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_15__speak_ng_sc__["a" /* NgScModule */].forRoot({
                contextToken: __WEBPACK_IMPORTED_MODULE_14__speak_ng_bcl__["a" /* CONTEXT */]
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__WindowRef__["a" /* WindowRef */],
            { provide: __WEBPACK_IMPORTED_MODULE_20__speak_ng_sc_ngx_translate_loader__["b" /* TRANSLATE_ITEM_ID */], useValue: 'F477ED1E-1BBA-4EE4-933B-9188A81E31DF' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);