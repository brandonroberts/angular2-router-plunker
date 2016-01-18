import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'wildcard',
  template: `
    Wildcards<br><br>
    
    Allows you to capture everything followed by the asterisk into one parameter<br><br>
    
    Name: {{ name }}<br><br>
    
    <a href="./#/wildcard/67">/wildcard/67</a><br>
    <a href="./#/wildcard/some/long/string">/wildcard/some/long/string</a><br>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class Wildcard {
  name: string;
  constructor(public params: RouteParams) {
    this.name = params.get('name');
  }
}