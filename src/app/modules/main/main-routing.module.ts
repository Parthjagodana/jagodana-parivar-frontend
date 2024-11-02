import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillageComponent } from './village/village.component';
import { HistoryComponent } from './history/history.component';
import { MembersComponent } from './village/members/members.component';
import { BusinessHistoryComponent } from './business-history/business-history.component';
import { MarriageComponent } from './marriage/marriage.component';
import { BloodsGroupComponent } from './bloods-group/bloods-group.component';
import { MemberDetailsComponent } from './village/members/member-details/member-details.component';
import { ProjectComponent } from './project/project.component';
import { FunctionComponent } from './function/function.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';

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
  },
  {
    path: 'village',
    component: VillageComponent,
    data: { title: 'village' },
  },
  {
    path: ':id/members',
    component: MembersComponent,
    data: { title: 'members' },
  },
  {
    path: 'member/:memberId',
    component: MemberDetailsComponent,
    data: { title: 'member-detail' },
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: { title: 'History' },
  },
  {
    path: 'business-history',
    component: BusinessHistoryComponent,
    data: { title: 'Business History' },
  },
  {
    path: 'marriage',
    component: MarriageComponent,
    data: { title: 'Marriage' },
  },
  {
    path: 'bloods-group',
    component: BloodsGroupComponent,
    data: { title: 'Bloods Group' },
  },
  {
    path: 'project',
    component: ProjectComponent,
    data: { title: 'Project' },
  },
  {
    path: 'function',
    component: FunctionComponent,
    data: { title: 'Function' },
  },
  {
    path: 'emergency-contact',
    component: EmergencyContactComponent,
    data: { title: 'Emergency Contact' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
