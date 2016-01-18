import {Component} from 'angular2/core';
import {Auth} from './Auth';
import {Router, OnActivate, ComponentInstruction, RouteParams} from 'angular2/router';
import {ResolvedInstruction} from 'angular2/src/router/instruction';

@Component({
  selector: 'login',
  template: `
    Logged in: {{ auth.loggedIn }}<br>
    <button (click)="login()" *ngIf="!auth.loggedIn">Login</button>
    <button (click)="logout()" *ngIf="auth.loggedIn">Logout</button>
  `
})
export class Login implements OnActivate {
  prev: ComponentInstruction;
  constructor(public auth: Auth, public router: Router, public params: RouteParams) {}
  
  routerOnActivate(current: ComponentInstruction, previous: ComponentInstruction) {
    this.prev = previous;
  }
  
  login() {
    this.auth.login();
    
    let target = this.params.get('targetUrl');
    
    if (target) {
      this.router.navigateByUrl(target);
    }
  }
  
  logout() {
    this.auth.logout();
  }
}