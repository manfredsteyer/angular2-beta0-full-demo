System.register(['angular2/core', '../registry', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, registry_1, http_1;
    var FlugService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (registry_1_1) {
                registry_1 = registry_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FlugService = (function () {
                function FlugService(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                }
                FlugService.prototype.findById = function (id) {
                    var url = this.baseUrl + "/flug";
                    var params = new http_1.URLSearchParams();
                    params.append('flugNummer', id);
                    return this
                        .http
                        .get(url, { search: params })
                        .map(function (r) { return r.json(); });
                };
                FlugService.prototype.save = function (flug) {
                    var url = this.baseUrl + "/flug";
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'text/json');
                    return this
                        .http
                        .post(url, JSON.stringify(flug), { headers: headers });
                };
                FlugService.prototype.find = function (von, nach) {
                    /*
                    var url = this.baseUrl + "/flug"
                            + "?abflugOrt="
                            + encodeURIComponent(von)
                            + "&zielOrt="
                            + encodeURIComponent(nach);
                
                    return fetch(url)
                              .then((r) => r.json());
                    */
                    var url = this.baseUrl + "/flug";
                    var params = new http_1.URLSearchParams();
                    params.append('abflugOrt', von);
                    params.append('zielOrt', nach);
                    return this
                        .http
                        .get(url, { search: params })
                        .map(function (r) { return r.json(); });
                };
                FlugService = __decorate([
                    __param(0, core_1.Inject(registry_1.BASE_URL)), 
                    __metadata('design:paramtypes', [String, http_1.Http])
                ], FlugService);
                return FlugService;
            })();
            exports_1("FlugService", FlugService);
        }
    }
});
//# sourceMappingURL=flug-service.js.map