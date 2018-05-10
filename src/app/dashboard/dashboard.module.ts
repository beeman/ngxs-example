import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardView } from './dashboard.view';
import { SharedModule } from '../shared/shared.module';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardView },
];

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  declarations: [
    DashboardView
  ]
})
export class DashboardModule { }
