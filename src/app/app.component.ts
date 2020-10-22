import { Component } from '@angular/core';
import { ThemeService } from '@shared/services/theme.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graphic-master';
  darkMode$: Observable<string>;
  constructor(
    private themeService: ThemeService
  ) { }
  ngOnInit() {
    this.darkMode$ = this.themeService.darkMode$;
  }
}
