import {Component, OnInit} from 'angular2/core';
import {OAuthService} from './../oauth2/oauth-service';
import {Location} from 'angular2/router';

@Component({
	templateUrl: 'app/home/home.html'
})
export class Home implements OnInit {
	
    oauthService: OAuthService;
    message = "";
    location: Location;
    requestedPath = "";
    
    constructor(
        oauthService: OAuthService, 
        location: Location) {
       
       this.oauthService = oauthService;  
       this.location = location;
    }
    
    ngOnInit() {

       var result = this.location.path().match(/login=(.*)/);
       if (result) {
           this.requestedPath = result[1];
       }
    }
    
    login() {
        this.oauthService.initImplicitFlow(this.requestedPath);
    }
    
    logoff() {
        this.oauthService.logOut();
        this.message = "You're logged off now";
    }
    
    get isLoggedIn() {
        return this.oauthService.hasValidAccessToken();
    }
    
    get name() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }
    
    
	info = "Willkommen bei dieser Demo-Anwendung!";
	
}