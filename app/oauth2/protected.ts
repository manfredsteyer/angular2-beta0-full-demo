import {CanActivate} from 'angular2/router';
import {Home} from '../home/home';
import {OAuthService} from '../oauth2/oauth-service';

export function Protected() {
    return CanActivate((next, prev) => {
        var oauthService = new OAuthService();

        if (!oauthService.hasValidAccessToken()) {
            next.componentType = Home;
            next.urlParams = ["login=" + next.urlPath];
        }
        
        var hasVerifiedEmail = false;
        var needVerifiedEmail = next.routeData.get("needVerifiedEmail");
        var claims = oauthService.getIdentityClaims();
        if (claims) {
            hasVerifiedEmail = claims.email_verified
        }
        
        if (needVerifiedEmail && !hasVerifiedEmail) {
            next.componentType = Home;
            next.urlParams = ["login=" + next.urlPath];
        }
        
        return true;
    });
}