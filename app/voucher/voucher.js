System.register(['angular2/core', 'angular2/http', '../oauth2/oauth-service', '../oauth2/protected', '../services/configuration'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, oauth_service_1, protected_1, configuration_1;
    var Voucher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            },
            function (protected_1_1) {
                protected_1 = protected_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            }],
        execute: function() {
            Voucher = (function () {
                function Voucher(oauthService, http, config) {
                    this.oauthService = oauthService;
                    this.http = http;
                    this.config = config;
                    this.voucher = "";
                    this.message = "";
                }
                Voucher.prototype.buyVoucher = function () {
                    var _this = this;
                    var url = this.config.apiUrl + "/api/voucher?amount=150";
                    var headers = new http_1.Headers({
                        "Authorization": "Bearer " + this.oauthService.getAccessToken()
                    });
                    this.http
                        .post(url, "", { headers: headers })
                        .subscribe(function (response) {
                        _this.message = "Got voucher";
                        _this.voucher = response.text();
                    }, function (error) {
                        _this.message = "Error: "
                            + error.statusText + ", "
                            + error.text();
                        console.error(error);
                    });
                };
                Voucher = __decorate([
                    core_1.Component({
                        templateUrl: 'app/voucher/voucher.html'
                    }),
                    protected_1.Protected(), 
                    __metadata('design:paramtypes', [oauth_service_1.OAuthService, http_1.Http, configuration_1.Configuration])
                ], Voucher);
                return Voucher;
            })();
            exports_1("Voucher", Voucher);
        }
    }
});
//# sourceMappingURL=voucher.js.map