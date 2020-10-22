import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public toggleNavbar = false;
  public showloading = false;
  constructor(private http:HttpClient) { }

  getSample() {
    console.log("Sample call");
    let url = environment.mock;
    return this.http.get<any[]>(environment.mock);
  }
  public getMenus() {
    return [{ name: 'Dashboard', path: 'dashboard', icon: 'fa-dashboard', group: 'Dashboard'},
            { name: 'Add Label header', path: 'label', icon: 'fa-tag', group: 'Label'},
            { name: 'Add Label', path: 'label', icon: 'fa-tag', group: 'Label'},
            { name: 'Location', path: 'location', icon: 'fa-map-marker', group: 'Location'},
            { name: 'Lead', path: 'lead', icon: 'fa-user', group: 'Lead'},
            { name: 'Update Lead', path: 'lead/create', icon: 'fa-user', group: 'Lead'},
            { name: 'Organization', path: 'organization', icon: 'fa-sitemap', group: 'Organization'},
            { name: 'Site', path: 'site', icon: 'fa-home', group: 'Site'},
            { name: 'Opportunity', path: 'opportunity', icon: 'fa-home', group: 'Opportunity'},
            { name: 'Task', path: 'task', icon: 'fa-list-alt', group: 'Task'}];
  }
  public getApps() {
    return [{ name: 'Whatsapp', logo: 'https://i.pinimg.com/originals/99/0b/7d/990b7d2c2904f8cd9bc884d3eed6d003.png', url: ""},
            { name: 'Facebook', logo: 'https://www.citypng.com/public/uploads/preview/-11595356475ug1zyp2de4.png', url: ""},
            { name: 'Instagram', logo: 'https://i.pinimg.com/originals/76/00/8b/76008bb9685d410d47fe1fa01dc54f15.jpg', url: ""},
            { name: 'Linked-in', logo: 'https://www.sclmortgage.com/wp-content/uploads/2019/08/Linkedin-logo.png', url: ""},
            { name: 'Twitter', logo: 'https://www.creativefreedom.co.uk/wp-content/uploads/2015/06/Twitter-bird-white-blue2.png', url: ""},
            { name: 'App store', logo: 'https://cdn.iconscout.com/icon/free/png-256/apple-store-493161.png', url: ""},
            { name: 'Freshsales', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZq2vrhoCaNqodsqmJ4ZYKF5Y_EsIPlPvqKw&usqp=CAU', url: ""}];
  }
  public getModules() {
    return [{ name: 'Add lead', component: 'lead', icon: 'fa-user-circle-o', group: 'Records'},
            { name: 'Add contact', component: 'dashboard', icon: 'fa-user-plus', group: 'Records'},
            { name: 'Add account', component: 'dashboard', icon: 'fa-building-o', group: 'Records'},
            { name: 'Add deal', component: 'dashboard', icon: 'fa-usd', group: 'Records'},
            { name: 'Add task', component: 'dashboard', icon: 'fa-tasks', group: 'Sales activities'},
            { name: 'Add appointment', component: 'dashboard', icon: 'fa-calendar', group: 'Sales activities'},
            { name: 'Add call log', component: 'dashboard', icon: 'fa-phone', group: 'Sales activities'},
            { name: 'Send SMS', component: 'dashboard', icon: 'fa-comments-o', group: 'Sales activities'},
            { name: 'Create report', component: 'dashboard', icon: 'fa-file-text-o', group: 'Reports'},
            { name: 'Create dashboard', component: 'dashboard', icon: 'fa-tachometer', group: 'Reports'}];
  }
}
