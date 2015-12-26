import {bootstrap} from 'angular2/platform/browser';
import { provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import { FlugSuchen } from './flug-suchen/flug-suchen';
import { FlugService } from './services/flug-service';
import { BASE_URL } from './registry';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, CanActivate } from 'angular2/router';
import { Location, HashLocationStrategy, LocationStrategy } from 'angular2/router';
import { Home } from './home/home';
import { FlugEdit } from './flug-edit/flug-edit';
import { App } from './app';

var service = [
	provide(FlugService, { useClass: FlugService }),
	provide(BASE_URL, { useValue: 'http://www.angular.at/api'}),
	HTTP_PROVIDERS,
	FORM_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
	Location
];

bootstrap(App, service);