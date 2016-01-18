import {Component} from 'angular2/core';
import {RouteParams, ComponentInstruction, Router} from 'angular2/router';

@Component({
  selector: 'home',
  template: `
    Welcome<br><br>
    
    <a href="./#/restricted">Redirect to Protected Content</a>
    <br><br>
    <a href="./#/invalid">Invalid Route</a><br>
    <strong>Only works with hashed route URLs</strong>
    <br><br>
    <button (click)="goToProfile()">Go To My Account</button>
  `
})
export class Home {
  constructor(public router: Router) {

  }
  
  goToProfile() {
    this.router.navigate(['/Users', {id: 1234}, 'Home']);
  }
}