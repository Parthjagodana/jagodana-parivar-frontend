import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillageComponent } from './village/village.component';
import { HistoryComponent } from './history/history.component';
import { BusinessHistoryComponent } from './business-history/business-history.component';
import { MembersComponent } from './village/members/members.component';
import { MarriageComponent } from './marriage/marriage.component';


@NgModule({
  declarations: [
    DashboardComponent,
    VillageComponent,
    HistoryComponent,
    BusinessHistoryComponent,
    MembersComponent,
    MarriageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MainModule { }
