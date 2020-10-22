import { EventEmitter, Injectable } from '@angular/core';
import { CreateDashboardComponent } from '@modules/dashboard/components/create/create-dashboard.component';
import { CreateLeadComponent } from '@modules/lead/components/create/create-lead.component';
import { SettingsComponent } from './components/settings/settings.component';

@Injectable({
  providedIn: 'root'
})
export class RightNavigationService {

  componentChange: EventEmitter<number> = new EventEmitter();
  constructor() { }
  getComponent(name: string) {
    return this.componentList[name];
  }
  toggle = false;
  emitNavChangeEvent(name) {
    this.componentChange.emit(name);
  }
  getNavChangeEmitter() {
    return this.componentChange;
  }
  open() {
    this.toggle = true;
  }
  close() {
    this.toggle = false;
  }
  private componentList = {
    lead: CreateLeadComponent,
    dashboard: CreateDashboardComponent,
    settings: SettingsComponent
  }
}
