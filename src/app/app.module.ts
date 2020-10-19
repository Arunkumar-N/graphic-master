import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { PageLayoutComponent } from '@shared/component/page-layout/page-layout.component';
import { FooterComponent } from '@shared/component/footer/footer.component';
import { HeaderComponent } from '@shared/component/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from '@shared/interceptor/http-config.interceptor';
import { LeftNavbarComponent } from '@shared/component/left-navbar/left-navbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { RightNavigationModule } from '@modules/right-navigation/right-navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    RightNavigationModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
