import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public toggleNavbar = false;
  constructor(private http:HttpClient) { }

  getSample() {
    console.log("Sample call");
    let url = environment.mock;
    return this.http.get<any[]>(environment.mock);
  }
  public getMenus() {
    return [{ name: 'Dashboard', path: 'dashboard', icon: 'fa-dashboard'},
            { name: 'Label', path: 'label', icon: 'fa-tag'},
            { name: 'Location', path: 'location', icon: 'fa-map-marker'},
            { name: 'Lead', path: 'lead', icon: 'fa-user'},
            { name: 'Organization', path: 'organization', icon: 'fa-sitemap'},
            { name: 'Site', path: 'site', icon: 'fa-home'},
            { name: 'Opportunity', path: 'opportunity', icon: 'fa-home'},
            { name: 'Task', path: 'task', icon: 'fa-list-alt'}];
  }
}
