import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponentDirective } from './load-component.directive';
import { RightNavigationPage } from './pages/right-navigation/right-navigation.page';
import { NavDefaultComponent } from './components/nav-default/nav-default.component';



@NgModule({
  declarations: [LoadComponentDirective, RightNavigationPage, NavDefaultComponent],
  imports: [
    CommonModule
  ],
  exports: [RightNavigationPage]
})
export class RightNavigationModule { }
