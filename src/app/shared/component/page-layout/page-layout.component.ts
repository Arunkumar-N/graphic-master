import { Component, OnInit } from '@angular/core';
import { RightNavigationService } from '@modules/right-navigation/right-navigation.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  constructor(public navService: RightNavigationService) { }

  ngOnInit(): void {
  }
  addButtonClick() {
    this.navService.open();
    this.navService.emitNavChangeEvent("");
    console.log("Hello");
  }

}
