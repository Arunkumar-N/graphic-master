import { Component, OnInit } from '@angular/core';
import { RightNavigationService } from '@modules/right-navigation/right-navigation.service';
import { GlobalService } from '@shared/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appsList: any[];
  modulesList: any[];
  notificationCount: number;
  constructor(public globalService: GlobalService,
    private navService:RightNavigationService) { }

  ngOnInit(): void {
    this.appsList = this.globalService.getApps();
    this.modulesList = this.globalService.getModules();
    this.notificationCount = 4;
  }
  openNav(component) {
    this.navService.open();
    this.navService.emitNavChangeEvent(component);
  }

}
