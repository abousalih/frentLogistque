import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MouvementVhComponent} from './mouvement-vh/mouvement-vh.component';
import {RouterModule, Routes} from "@angular/router";
import { EnginsComponent } from './engins/engins.component';
import { LocationComponent } from './location/location.component';
import { LogiDashboardComponent } from './logi-dashboard/logi-dashboard.component';

const routes: Routes = [
    {
        path: "dashboard",
        component: LogiDashboardComponent
    },
    {
        path: "mvtvh",
        component: MouvementVhComponent
    },
    {
        path: "engins",
        component: EnginsComponent
    },
    {
        path: "location",
        component: LocationComponent
    }
]

@NgModule({
    declarations: [
        MouvementVhComponent,
        EnginsComponent,
        LocationComponent,
        LogiDashboardComponent
    ],
    exports: [
        MouvementVhComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class LogistiqueModule {
}
