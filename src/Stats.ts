import {Component, Injector} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'user-stats',
  template: `
      User Stats: {{ id }}
  `
})
export class Stats {
  constructor(injector: Injector) {
    // get route params from parent route component's injector
    this.params = injector.parent.parent.get(RouteParams);
  }
  
  routerOnActivate() {
    this.id = this.params.get('id');
  }
}