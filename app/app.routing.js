"use strict";
var router_1 = require('@angular/router');
var login_form_component_1 = require('./login/login-form.component');
var artist_list_component_1 = require('./artist/artist-list.component');
var artist_detail_component_1 = require('./artist/artist-detail.component');
var album_list_component_1 = require('./album/album-list.component');
var album_detail_component_1 = require('./album/album-detail.component');
var logged_guard_1 = require('./login/logged.guard');
exports.routing = router_1.RouterModule.forRoot([
    {
        path: 'login',
        component: login_form_component_1.LoginFormComponent
    },
    {
        path: 'artists',
        component: artist_list_component_1.ArtistListComponent
    },
    {
        path: 'artists/:artistId',
        component: artist_detail_component_1.ArtistDetailComponent,
        canActivate: [logged_guard_1.LoggedInGuard]
    },
    {
        path: 'albums',
        component: album_list_component_1.AlbumListComponent
    },
    {
        path: 'albums/:albumId',
        component: album_detail_component_1.AlbumDetailComponent,
        canActivate: [logged_guard_1.LoggedInGuard]
    },
    {
        path: '',
        redirectTo: '/artists',
        pathMatch: 'full'
    }
]);
//# sourceMappingURL=app.routing.js.map