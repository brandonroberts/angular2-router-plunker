import {Component} from 'angular2/core';
import {Router, ComponentInstruction, OnActivate} from 'angular2/router';
import {ResolvedInstruction} from 'angular2/src/router/instruction';
import {Auth} from './Auth';

@Component({
  selector: 'logout-modal',
  template: ''
})
export class LogoutModal implements OnActivate {
  constructor(public auth: Auth, public router: Router) {

  }
  
  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    if (window.confirm('Are you sure you want to logout?')) {
      this.auth.logout();
      this.router.navigate(['/Home']);
    } else {
      if (prev) {
        this.router.navigateByInstruction(new ResolvedInstruction(prev, prev.child, {}));
      } else {
        this.router.navigate(['/Home']);
      }
    }
    
    return false;
  }
}