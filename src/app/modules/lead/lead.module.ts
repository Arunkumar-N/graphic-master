import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLeadComponent } from './components/create/create-lead.component';
import { LeadRoutingModule } from './lead-routing.module';
import { LeadPage } from './pages/lead/lead.page';



@NgModule({
  declarations: [CreateLeadComponent, LeadPage],
  imports: [
    CommonModule,
    LeadRoutingModule
  ]
})
export class LeadModule { }
