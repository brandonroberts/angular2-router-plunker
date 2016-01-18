import {Injector} from 'angular2/core';

let appInjectorRef;

export const appInjector = (injector?: Injector): Injector => {
	if (!injector) {
		return appInjectorRef;
	}

	appInjectorRef = injector;

	return appInjectorRef;
};