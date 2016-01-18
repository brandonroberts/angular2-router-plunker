import {Component, View} from 'angular2/core';
import {OnActivate} from 'angular2/router';

@Component({
  selector: 'loading-page',
  template: `
      This page just simulates a route that takes time to load
  `
})
export class LoadingPage implements OnActivate {
  routerOnActivate() {
    return new Promise((resolve) => {
      // wait 3 seconds before continuing
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
}