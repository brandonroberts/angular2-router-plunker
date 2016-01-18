import {Component, Injector} from 'angular2/core';
import {CanActivate, RouteData, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

// This is a terrible workaround for resolving data before the route is activated
// and accessing it through dependency injection
@Component({
  selector: 'resolved',
  template: `
    This example is a <strong>workaround</strong> for resolving data before the route is activated
    <hr>
    
    <ul>
      <li *ngFor="#user of users">
        <a [routerLink]="['/Users', {id: user.registered}]">{{ user.name.first }} {{ user.name.last }}</a>
      </li>
    </ul>
  `
  directives: [ROUTER_DIRECTIVES]
})
@CanActivate((to) => {
  return new Promise((resolve) => {
    let injector = Injector.resolveAndCreate([HTTP_PROVIDERS]);
    let http = injector.get(Http);
    
    http.get('http://api.randomuser.me/?nat=us&results=10&seed=Bim8OGO7oddxBaa26WzR')
      .map((res) => res.json())
      .map((res) => res.results)
      .map((res) => res.map(item => item.user))
      .subscribe((users) => {
        // override the RouteData
        to.routeData.data.users = users;
        
        // continue
        resolve(true);
      }, (error) => {
        resolve(false);
      });
  });
})
export class Resolved {
  constructor(routeData: RouteData) {
    // user data resolved in CanActivate
    this.users = routeData.get('users');
  }
}