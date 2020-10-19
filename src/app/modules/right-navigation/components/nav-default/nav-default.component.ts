import { Component, OnInit } from '@angular/core';
import { RightNavigationService } from '@modules/right-navigation/right-navigation.service';
import { GlobalService } from '@shared/services/global.service';

@Component({
  selector: 'app-nav-default',
  templateUrl: './nav-default.component.html',
  styleUrls: ['./nav-default.component.css']
})
export class NavDefaultComponent implements OnInit {

  modulesList: any[];
  constructor(private navService: RightNavigationService,public globalService: GlobalService) { }

  ngOnInit(): void {
    this.modulesList = this.globalService.getModules();
  }
  openNav(component) {
    this.navService.open();
    this.navService.emitNavChangeEvent(component);
  }
}
