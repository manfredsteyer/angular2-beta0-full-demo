import {Component} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {OAuthService} from '../oauth2/oauth-service';
import {Protected} from '../oauth2/protected';
import {Configuration} from '../services/configuration';
import {CanActivate, RouteData} from 'angular2/router';

@Component({
    templateUrl: 'app/voucher/voucher.html'
})
@Protected()
/*
@CanActivate((next, prev) => {
    var oauthService = new OAuthService();
    //return oauthService.hasValidAccessToken();
    
    if (!oauthService.hasValidAccessToken()) {
        next.componentType = Home;
        next.urlParams = ["login=" + next.urlPath];
    }
    
    return true;
})
*/
export class Voucher {

    constructor(
        private oauthService: OAuthService, 
        private http:Http, 
        private config: Configuration,
        private routeData: RouteData) {
            
            this.needVerifiedEmail = routeData.get("needVerifiedEmail");     
    }
    
    voucher = "";
    message = "";
    needVerifiedEmail;
    
    buyVoucher() {
        
        var url = this.config.apiUrl + "/api/voucher?amount=150";
        
        var headers = new Headers({
            "Authorization": "Bearer " + this.oauthService.getAccessToken()
        });
        
        // "Authorization": "Basic base64(username:pwd)"
        
        this.http
            .post(url, "", { headers })
            .subscribe(
                (response) => {
                    this.message = "Got voucher";
                    this.voucher = response.text();
                },
                (error) => {
                    this.message = "Error: " 
                                        + error.statusText + ", "
                                        + error.text();
                                        
                    console.error(error);
                });
        
    }
    
}