import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponentDirective } from './load-component.directive';
import { RightNavigationPage } from './pages/right-navigation/right-navigation.page';
import { NavDefaultComponent } from './components/nav-default/nav-default.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoadComponentDirective, RightNavigationPage, NavDefaultComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [RightNavigationPage]
})
export class RightNavigationModule { }
