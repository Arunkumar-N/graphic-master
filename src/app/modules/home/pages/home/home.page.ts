import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@shared/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  public data: any;
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getSample().subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

}
