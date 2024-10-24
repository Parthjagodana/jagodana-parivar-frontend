import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth.guard';
import { VillageComponent } from './village/village.component';
import { HistoryComponent } from './history/history.component';
import { BusinessHistoryComponent } from './business-history/business-history.component';
import { MarriageComponent } from './marriage/marriage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'dashboard' },
    canActivate: [authGuard],
  },
  {
    path: 'village',
    component: VillageComponent,
    data: { title: 'village' },
    canActivate: [authGuard],
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: { title: 'History' },
    canActivate: [authGuard],
  },
  {
    path: 'business-history',
    component: BusinessHistoryComponent,
    data: { title: 'Business History' },
    canActivate: [authGuard],
  },
  {
    path: 'marriage',
    component: MarriageComponent,
    data: { title: 'Marriage' },
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }