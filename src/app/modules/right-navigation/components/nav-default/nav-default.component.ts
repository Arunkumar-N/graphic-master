import { Component, OnInit } from '@angular/core';
import { RightNavigationService } from '@modules/right-navigation/right-navigation.service';

@Component({
  selector: 'app-nav-default',
  templateUrl: './nav-default.component.html',
  styleUrls: ['./nav-default.component.css']
})
export class NavDefaultComponent implements OnInit {

  constructor(private navService: RightNavigationService) { }

  ngOnInit(): void {
  }
  openNav(component) {
    this.navService.open();
    this.navService.emitNavChangeEvent(component);
  }
}
