import {Directive, Input, Query, QueryList} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

// A custom directive to apply the router-link-active class
// to elements with a child routerLink directive that's active
@Directive({
  selector: '[linkActive]',
  host: {
    '[class.router-link-active]': 'isRouteActive'
  }
})
export class LinkActiveDirective {
  routerLink: RouterLink;
  
  constructor(@Query(RouterLink) routerLinks:QueryList<RouterLink>) {
    routerLinks.changes.subscribe((_) => {
      this.routerLink = routerLinks.first;
    });
  }

  get isRouteActive() {
    return this.routerLink ? this.routerLink.isRouteActive : false;
  }
}