import {Component} from 'angular2/core';
import {CanActivate, ComponentInstruction, RouteData} from 'angular2/router';
import {Page} from './Page';
import {isLoggedIn} from './is-logged-in';

@Component({
  selector: 'protected',
  template: `
    This content is only available to authenticated users.
    <br><br>
    Route Data Information: {{ info }}
  `
})
// Prevent this route from loading unless the user is authenticated
@CanActivate((to: ComponentInstruction, from: ComponentInstruction) => {
  return isLoggedIn(to, from, '/protected'); // navigate to /protected URL after logging in
})
export class Protected {
  constructor(public data: RouteData) {
    // get the route data from the route config
    this.info = data.get('info');
  }
}