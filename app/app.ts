import {Component, provide, OnInit} from 'angular2/core';
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
import { Voucher } from './voucher/voucher';
import { Login } from './login/login';
import { Logoff} from './logoff/logoff';
import { OAuthService} from './oauth2/oauth-service';
import {Configuration} from './services/configuration';

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES, Warenkorb],
	templateUrl: 'app/app.html'
})
@RouteConfig([
	{ path: '/', component: Home, name: 'Home', useAsDefault: true },
    { path: '/flug-buchen/...', component: FlugBuchen, name: 'FlugBuchen' },
    { path: '/voucher', component: Voucher, name: 'Voucher' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/logoff', component: Logoff, name: 'Logoff' }
    
])
@CanActivate((next, prev) => {
    return true;     
})
export class App {
	title;
	location: Location;
	oauthService: OAuthService;
    config: Configuration;
    
	constructor(
        location: Location, 
        oauthService: OAuthService,
        config: Configuration) {
            
		this.title = "Flug-Demo-App";
		this.location = location;
        this.oauthService = oauthService;
        this.config = config;
        
        this.oauthService.loginUrl =  this.config.loginUrl; 
        this.oauthService.redirectUri = window.location.origin + "/index.html"; 
        this.oauthService.clientId = "spa-demo"; 
        this.oauthService.scope = "openid profile email voucher"; 
        this.oauthService.issuer = this.config.issuerUri; 
        this.oauthService.oidc = true; 

        this.oauthService.tryLogin({
            onTokenReceived: (context) => {
                if (context.state) {
                    this.location.replaceState(context.state);
                } 
            }
        });
	}
	
	isActive(path): boolean {
        if (path == '') return this.location.path() == '';  
		return (this.location.path().startsWith(path));
	}
}



