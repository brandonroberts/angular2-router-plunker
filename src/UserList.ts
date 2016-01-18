import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'user-list',
  template: `
    Users List<br>
    
    <ul>
      <li *ngFor="#user of users">
        <a [routerLink]="['/Users', {id: user.id}]">{{ user.name }}</a>
      </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class UserList {
  users: any[] = [
    {
      id: 1234,
      name: 'John Smith'
    },
    {
      id: 4567,
      name: 'Joe Smith'
    },
    {
      id: 789,
      name: 'Jane Smith'
    }    
  ]
}