import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';


import {CoreCommonModule} from '@core/common.module';


import {DashboardService} from 'app/main/dashboard/dashboard.service';

import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {LogistiqueModule} from "../projets/logistique/logistique.module";

const routes = [
    {
        path: 'layout',
        component: DashboardLayoutComponent,
        resolve: {},
    }
];

@NgModule({
    declarations: [DashboardLayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
        NgbModule,
        PerfectScrollbarModule,
        CoreCommonModule,
        NgApexchartsModule,
        LogistiqueModule,

    ],
    providers: [DashboardService],
    exports: []
})
export class DashboardModule {
}
