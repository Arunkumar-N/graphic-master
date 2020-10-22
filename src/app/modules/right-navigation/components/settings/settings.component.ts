import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private themeService: ThemeService) { }
  themes = [{name: "Linear Theme", color: "linear-gradient(#F0F8FF, #2F4F4F)", value:"theme-linear"},
          {name: "Dark Theme", color: "linear-gradient(#fff, #000000)", value:"theme-dark"},
          {name: "Light Theme", color: "linear-gradient(#fff, #A9A9A9)", value:"theme-light"}];
  ngOnInit(): void {
  }
  setDarkMode(value) {
    this.themeService.setDarkMode(value);
  }
}
