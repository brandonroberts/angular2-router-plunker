import {Component, View} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'user-params',
  template: `
    Matrix Params<br><br>
    
    <strong>NOTE</strong> Matrix parameters are only represented as 
    (;name=value;name2=value2) for child routes. Root level routes use
    <a [routerLink]="['/Search', {id: 123, name: 'Test'}]">Query Parameters</a><br><br>

    Matrix parameters and query parameters can be used together without collision<br><br>
    
    Launch the preview in a separate window to see the URL querystring with matrix parameters
    
    <br><br>
    
    ID: {{ id }}<br>
    Title: {{ title }}<br>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class UserParams {
  id: any;
  title: any;
  constructor(params: RouteParams) {
    this.id = params.get('id');
    this.title = params.get('title');
  }
}