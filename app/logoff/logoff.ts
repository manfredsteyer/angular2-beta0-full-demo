import {Component} from 'angular2/core';
import {OAuthService} from '../oauth2/oauth-service';

@Component({
    templateUrl: 'app/logoff/logoff.html'
})

export class Logoff {

    constructor(
        private oauthService: OAuthService) {
    }
    
    message = "";
    
    logoff() {
        this.message = "You're logged off now!";
        this.oauthService.logOut();
    }

}