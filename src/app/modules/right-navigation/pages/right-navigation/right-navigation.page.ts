import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { LoadComponentDirective } from '@modules/right-navigation/load-component.directive';
import { RightNavigationService } from '@modules/right-navigation/right-navigation.service';

@Component({
  selector: 'app-right-navigation',
  templateUrl: './right-navigation.page.html',
  styleUrls: ['./right-navigation.page.css']
})
export class RightNavigationPage implements OnInit {

  @ViewChild(LoadComponentDirective, {static: true}) appLoadComponent: LoadComponentDirective;
  subscription: any;
  showDefault = true;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    public navService:RightNavigationService) {
      //this.loadComponent('lead');
  }

  ngOnInit(): void {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => {
        if(item != "") {
          this.showDefault = false;
          this.loadComponent(item);
        } else {
          this.showDefault = true;
          this.clear();
        }
      });
  }
  loadComponent(componentName) {
    const component = this.navService.getComponent(componentName);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.appLoadComponent.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<any>(componentFactory);
  }
  clear() {
    let viewContainerRef = this.appLoadComponent.viewContainerRef;
    viewContainerRef.clear();
  }
}
