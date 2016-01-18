//our root app component
import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router, Route, Redirect, AuxRoute, AsyncRoute} from 'angular2/router';
import {Home} from './Home';
import {Login} from './Login';
import {Protected} from './Protected';
import {Users} from './Users';
import {LogoutModal} from './LogoutModal';
import {Auth} from './Auth';
import {Search} from './Search';
import {UserList} from './UserList';
import {LoadingPage} from './LoadingPage';
import {RouterState} from './RouterState';
import {NotFound} from './NotFound';
import {Resolved} from './Resolved';
import {Reuse} from './Reuse';
import {ActivateData} from './ActivateData';
import {Chat} from './Chat';
import {Wildcard} from './Wildcard';

@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['/Home']">Home</a> | 
    <a *ngIf="!auth.loggedIn" [routerLink]="['/Login']">Login</a>
    <a *ngIf="auth.loggedIn" [routerLink]="['/LogoutModal']">Logout</a><br><br>
    
    <strong>Protecting Routes</strong><br>
    <a [routerLink]="['/Protected']">Protected Content</a><br><br>
    
    <strong>Repeating Route Links</strong><br>
    <a [routerLink]="['/UserList']">Users List</a><br><br>
    
    <strong>Nested Routes</strong><br>
    <a [routerLink]="['/Users', {id: 1234}]">User Profile</a> |
    <a [routerLink]="['/Users', {id: 1234}, 'Stats']">User Stats</a><br><br>
    
    <strong>Async Routes</strong><br>
    <a [routerLink]="['/About']">About Me</a><br><br>
    
    <strong>Optional Query Parameters</strong><br>
    <a [routerLink]="['/Search', {id: 123, name: 'Test'}]">Search</a><br><br>
    
    <strong>Optional Matrix Parameters</strong><br>
    <a [routerLink]="['/Users', {id: 123, title: 'Matrix'}, 'Params', {id: 456, title: 'Matrix'}]">User Query</a><br><br>
    
    <strong>Wildcard Parameters</strong><br>
    <a [routerLink]="['/Wildcard', {name: 12345}]">Wildcard</a><br><br>    
    
    <strong>Router Lifecycle Examples</strong><br>
    <a [routerLink]="['/LoadingPage']">Loading Page</a> |
    <a [routerLink]="['/Resolved']">Resolve Data</a> |
    <a [routerLink]="['/Activate']">Activate Data</a> |
    <a [routerLink]="['/Reuse']">Reuse Route</a><br><br>
    
    <strong>Auxiliary Routes</strong><br>
    <a [routerLink]="['/Home', ['Chat']]">Home and Chat</a>
    
    <hr>
    <router-outlet></router-outlet>
    
    <!-- Auxiliary Outlets -->
    <hr>
    <router-outlet name="chat"></router-outlet>
    <br><br><br><br>
    
    <!-- Show/Hide when the router is navigating -->
    <div *ngIf="router.navigating">Loading</div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  new Route({path: '/', component: Home, name: 'Home'}),
  new Redirect({path: '/restricted', redirectTo: ['Protected']}),
  new Route({
    path: '/protected',
    component: Protected,
    name: 'Protected',
    data: { info: 'I have some information for you' }
  }),
  new Route({path: '/login', component: Login, name: 'Login'}),
  new Route({path: '/users', component: UserList, name: 'UserList'}),
  new Route({path: '/users/:id/...', component: Users, name: 'Users'}),
  new Route({path: '/logout', component: LogoutModal, name: 'LogoutModal'}),
  new AsyncRoute({path: '/about', loader: () => System.import('app/About').then(m => m.About), name: 'About'}),
  new Route({path: '/search', component: Search, name: 'Search'}),
  new Route({path: '/loading', component: LoadingPage, name: 'LoadingPage'}),
  new Route({path: '/resolved', component: Resolved, name: 'Resolved'}),
  new Route({path: '/reuse', component: Reuse, name: 'Reuse'}),
  new Route({path: '/activate', component: ActivateData, name: 'Activate'}),
  new Route({path: '/wildcard/*name', component: Wildcard, name: 'Wildcard'}),
  new AuxRoute({path: '/chat', component: Chat, name: 'Chat'}),
  
  // Page not found route (Wildcard Param)
  new Route({path: '/*path', component: NotFound})
])

export class App {
  constructor(
    public auth: Auth,
    public router: Router,
    routerState: RouterState
  ) {}
}