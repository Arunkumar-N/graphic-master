import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { SampleComponent } from './components/sample/sample.component';
import { Sample2Component } from './components/sample2/sample2.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    DashboardPage,
    SampleComponent,
    Sample2Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class DashboardModule { }
