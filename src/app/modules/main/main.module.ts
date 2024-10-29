import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillageComponent } from './village/village.component';
import { HistoryComponent } from './history/history.component';
import { BusinessHistoryComponent } from './business-history/business-history.component';
import { MembersComponent } from './village/members/members.component';
import { MarriageComponent } from './marriage/marriage.component';
import { BloodsGroupComponent } from './bloods-group/bloods-group.component';
import { MemberDetailsComponent } from './village/members/member-details/member-details.component';
import { ProjectComponent } from './project/project.component';
import { FunctionComponent } from './function/function.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';


@NgModule({
  declarations: [
    DashboardComponent,
    VillageComponent,
    HistoryComponent,
    BusinessHistoryComponent,
    MembersComponent,
    MarriageComponent,
    BloodsGroupComponent,
    MemberDetailsComponent,
    ProjectComponent,
    FunctionComponent,
    EmergencyContactComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ]
})
export class MainModule { }
