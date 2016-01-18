import {Component} from 'angular2/core';
import {OnActivate, ROUTER_DIRECTIVES, ComponentInstruction} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
  selector: 'activate-data',
  template: `
    This is an example of resolving data before the route completes navigation.
    <hr>
    
    <ul>
      <li *ngFor="#user of users">
        <a [routerLink]="['/Users', {id: user.registered}]">{{ user.name.first }} {{ user.name.last }}</a>
      </li>
    </ul>
  `
  directives: [ROUTER_DIRECTIVES]
})
export class ActivateData {
  constructor(public http: Http) {
  }
  
  routerOnActivate(to: ComponentInstruction, from: ComponentInstruction) {
    return new Promise((resolve) => {
      this.http.get('http://api.randomuser.me/?nat=us&results=25&seed=Bim8OGO7oddxBaa26WzR')
        .map((res) => res.json())
        .map((res) => res.results)
        .map((res) => res.map(item => item.user))
        .subscribe((users) => {
          this.users = users;
          resolve(true);
        });
    }
  }
}