"use strict";
//import { HomeComponent } from './home/home.component';
var showcase_component_1 = require('./showcase/showcase.component');
var user_component_1 = require('./user/user.component');
//import { IconsComponent } from './icons/icons.component';
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
//import { MapsComponent } from './maps/maps.component';
exports.MODULE_ROUTES = [
    //{ path: 'dashboard', component: HomeComponent },
    { path: 'showcase', component: showcase_component_1.ShowcaseComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    //{ path: 'icons', component: IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    //{ path: 'maps', component: MapsComponent },
    { path: '', redirectTo: 'showcase', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    //    HomeComponent,
    showcase_component_1.ShowcaseComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    //    IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
];
//# sourceMappingURL=dashboard.routes.js.map