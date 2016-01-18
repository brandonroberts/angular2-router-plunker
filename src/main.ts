//main entry point
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {provide, ComponentRef} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {App} from './app';
import {Auth} from './Auth';
import {RouterState} from './RouterState';
import {appInjector} from './app-injector';
import 'rxjs/Rx';

bootstrap(App, [
  Auth,
  RouterState,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}) // Use hashed route URLs instead of HTML5 urls
]).then((appRef: ComponentRef) => {
  // Store a reference to the injector
  // Workaround for Dependency Injection
  // in Router CanActivate lifecycle hook
  appInjector(appRef.injector);
});