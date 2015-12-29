import {Component} from 'angular2/core';
import {OAuthService} from '../oauth2/oauth-service';

@Component({
    templateUrl: 'app/login/login.html'
})

export class Login {

    constructor(
        private oauthService: OAuthService) {
    }
    
    login() {
        this.oauthService.initImplicitFlow();
    }

}