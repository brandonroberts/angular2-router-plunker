import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate, Route, RouteParams} from 'angular2/router';
import {UsersHome} from './UsersHome';
import {Stats} from './Stats';
import {UserParams} from './UserParams';
import {isLoggedIn} from './is-logged-in';
import {LinkActiveDirective} from './LinkActiveDirective';
import {OnReuse} from 'angular2/router';

@Component({
  selector: 'users',
  template: `
  User<br>
  <nav>
    <ol>
      <li linkActive>
        <a [routerLink]="['./Home']">Profile</a>
      </li>
      <li linkActive>
        <a [routerLink]="['./Stats']">Stats</a>
      </li>
    </ol>
  </nav>
  <br>
  <br>
  {{ message }}
  <hr>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES, LinkActiveDirective]
})
@RouteConfig([
  new Route({path: '/', component: UsersHome, name: 'Home', useAsDefault: true}),
  new Route({path: '/stats', component: Stats, name: 'Stats'}),
  new Route({path: '/search', component: UserParams, name: 'Params'})
])
/*
Uncomment to prevent this route from loading unless logged in
@CanActivate((to: ComponentInstruction, from: ComponentInstruction) => {
  return isLoggedIn(to, from);
})
*/
export class Users implements OnReuse {
  message: string = 'This your first time here';
  
  routerOnReuse() {
    this.message = 'You\'re Still In Here?';
  }
}