import { Component, OnInit } from '@angular/core';
import { RightNavigationService } from '@modules/right-navigation/right-navigation.service';
import { GlobalService } from '@shared/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService: GlobalService,
    private navService:RightNavigationService) { }

  ngOnInit(): void {
  }
  openNav(component) {
    this.navService.open();
    this.navService.emitNavChangeEvent(component);
  }

}
