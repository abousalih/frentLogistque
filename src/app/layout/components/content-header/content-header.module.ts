import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CoreCommonModule} from '@core/common.module';

import {BreadcrumbModule} from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';
import {ContentHeaderComponent} from 'app/layout/components/content-header/content-header.component';
import {DropdownMenuAppsComponent} from './dropdown-menu-apps/dropdown-menu-apps.component';

@NgModule({
    declarations: [ContentHeaderComponent, DropdownMenuAppsComponent],
    imports: [CommonModule, RouterModule, CoreCommonModule, BreadcrumbModule, NgbModule],
    exports: [ContentHeaderComponent]
})
export class ContentHeaderModule {
}
