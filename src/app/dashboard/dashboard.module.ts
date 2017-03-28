import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { DataService } from './service/data.service';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule

    ],
    declarations: [ MODULE_COMPONENTS ],
    providers: [ DataService ]
})

export class DashboardModule{}
