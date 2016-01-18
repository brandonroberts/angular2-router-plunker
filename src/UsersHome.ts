import {Component, Injector} from 'angular2/core';
import {RouteParams, ComponentInstruction, OnActivate, CanDeactivate} from 'angular2/router';

@Component({
  selector: 'users-home',
  template: `
    User Home: {{ id }}
    <br><br>
    
    Welcome Home User!
  `
})
export class UsersHome implements OnActivate, CanDeactivate {
  params: RouteParams;
  constructor(injector: Injector) {
    // get route params from parent route component's injector
    this.params = injector.parent.parent.get(RouteParams);
  }
  
  routerOnActivate() {
    this.id = this.params.get('id');
  }
  
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
      return window.confirm('Are you sure you want to leave?'); 
  }
}