System.register(['angular2/core', './../oauth2/oauth-service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, oauth_service_1, router_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(oauthService, location) {
                    this.message = "";
                    this.requestedPath = "";
                    this.info = "Willkommen bei dieser Demo-Anwendung!";
                    this.oauthService = oauthService;
                    this.location = location;
                }
                Home.prototype.ngOnInit = function () {
                    var result = this.location.path().match(/login=(.*)/);
                    if (result) {
                        this.requestedPath = result[1];
                    }
                };
                Home.prototype.login = function () {
                    this.oauthService.initImplicitFlow(this.requestedPath);
                };
                Home.prototype.logoff = function () {
                    this.oauthService.logOut();
                    this.message = "You're logged off now";
                };
                Object.defineProperty(Home.prototype, "isLoggedIn", {
                    get: function () {
                        return this.oauthService.hasValidAccessToken();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Home.prototype, "name", {
                    get: function () {
                        var claims = this.oauthService.getIdentityClaims();
                        if (!claims)
                            return null;
                        return claims.given_name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Home = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/home.html'
                    }), 
                    __metadata('design:paramtypes', [oauth_service_1.OAuthService, router_1.Location])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map