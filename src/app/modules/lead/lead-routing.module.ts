import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadPage } from './pages/lead/lead.page';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'create'
    },
    {
    path: 'create',
    component: LeadPage
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
