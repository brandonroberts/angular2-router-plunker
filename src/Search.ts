import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'search',
  template: `
    Query Params<br><br>
    
    <strong>NOTE</strong> Query parameters are only represented as 
    (?name=value&name2=value2)  for root level routes. Child routes use
    <a [routerLink]="['/Users', {id: 123}, 'Params', {id: 456, title: 'Matrix'}]">Matrix Parameters</a><br><br>
    
    Matrix parameters and query parameters can be used together without collision<br><br>
    
    Launch the preview in a separate window to see the URL querystring
    
    <br><br>
    
    ID: {{ id }}<br>
    Name: {{ name }}<br>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class Search {
  constructor(public params: RouteParams) {
    this.id = params.get('id');
    this.name = params.get('name');
  }
}