import {Component, provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import { FlugSuchen } from './flug-suchen/flug-suchen';
import { FlugService } from './services/flug-service';
import { BASE_URL } from './registry';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, CanActivate } from 'angular2/router';
import { Location, HashLocationStrategy, LocationStrategy } from 'angular2/router';
import { Home } from './home/home';
import { FlugEdit } from './flug-edit/flug-edit';
import { FlugBuchen } from './flug-buchen/flug-buchen';
import { Warenkorb} from './warenkorb/warenkorb';

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES, Warenkorb],
	templateUrl: 'app/app.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'Home', useAsDefault: true },
    { path: '/flug-buchen/...', component: FlugBuchen, as: 'FlugBuchen' }
])
@CanActivate((next, prev) => {
    return true;     
})
export class App {
	title;
	location: Location;
	
	constructor(location: Location) {
		this.title = "Flug-Demo-App";
		this.location = location;
	}
	
	isActive(path): boolean {
        
        if (path == '') return this.location.path() == '';  
		return (this.location.path().startsWith(path));
	}
}


