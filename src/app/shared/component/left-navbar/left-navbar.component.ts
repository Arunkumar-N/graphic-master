import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@shared/services/global.service';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {
  
  menuList = [];
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    this.menuList = this.globalService.getMenus();
  }

}
