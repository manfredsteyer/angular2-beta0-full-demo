System.register(['angular2/router', '../home/home', '../oauth2/oauth-service'], function(exports_1) {
    var router_1, home_1, oauth_service_1;
    function Protected() {
        return router_1.CanActivate(function (next, prev) {
            var oauthService = new oauth_service_1.OAuthService();
            if (!oauthService.hasValidAccessToken()) {
                next.componentType = home_1.Home;
                next.urlParams = ["login=" + next.urlPath];
            }
            return true;
        });
    }
    exports_1("Protected", Protected);
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=protected.js.map