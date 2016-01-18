import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, CanReuse, OnReuse} from 'angular2/router';

@Component({
  selector: 'reuse',
  template: `
    This component will not be reloaded if the same route is used again.
    <br><br>
    
    Route reused {{ used }} times
    
    <br><br>
    
    <a [routerLink]="['Reuse', {page: 'p1'}]">(1)</a> | 
    <a [routerLink]="['Reuse', {page: 'p2'}]">(2)</a> |
    <a [routerLink]="['Reuse', {page: 'p3'}]">(3)</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class Reuse implements CanReuse, OnReuse {
  used: number = 0;

  routerCanReuse(){
    return true;
  }
  
  routerOnReuse() {
    this.used++;
  }
}