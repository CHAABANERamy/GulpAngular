"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var login_service_1 = require('./login/login.service');
var login_form_component_1 = require('./login/login-form.component');
var app_component_1 = require('./app.component');
var album_service_1 = require('./album/album.service');
var artist_list_component_1 = require('./artist/artist-list.component');
var artist_detail_component_1 = require('./artist/artist-detail.component');
var artist_service_1 = require('./artist/artist.service');
var album_list_component_1 = require('./album/album-list.component');
var album_detail_component_1 = require('./album/album-detail.component');
var app_routing_1 = require('./app.routing');
var common_1 = require('@angular/common');
var logged_guard_1 = require('./login/logged.guard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                login_form_component_1.LoginFormComponent,
                artist_list_component_1.ArtistListComponent,
                artist_detail_component_1.ArtistDetailComponent,
                album_list_component_1.AlbumListComponent,
                album_detail_component_1.AlbumDetailComponent
            ],
            providers: [
                artist_service_1.ArtistService,
                album_service_1.AlbumService,
                login_service_1.LoginService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                logged_guard_1.LoggedInGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map