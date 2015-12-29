System.register(['angular2/core', '../oauth2/oauth-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, oauth_service_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(oauthService) {
                    this.oauthService = oauthService;
                }
                Login.prototype.login = function () {
                    this.oauthService.initImplicitFlow();
                };
                Login = __decorate([
                    core_1.Component({
                        templateUrl: 'app/login/login.html'
                    }), 
                    __metadata('design:paramtypes', [oauth_service_1.OAuthService])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map