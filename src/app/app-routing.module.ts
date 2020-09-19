import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './shared/component/page-layout/page-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path:'dashboard',
        loadChildren: () => 
          import('@modules/dashboard/dashboard.module').then(r => r.DashboardModule)
      },
      {
        path:'home',
        loadChildren: () => 
          import('@modules/home/home.module').then(r => r.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
