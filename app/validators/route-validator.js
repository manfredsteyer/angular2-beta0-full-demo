System.register(['angular2/common', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1;
    var RouteValidatorDirective, RouteValidator;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RouteValidatorDirective = (function () {
                function RouteValidatorDirective() {
                }
                RouteValidatorDirective.prototype.validate = function (group) {
                    return RouteValidator.validate(group);
                };
                RouteValidatorDirective = __decorate([
                    core_1.Directive({
                        selector: '[route]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: RouteValidatorDirective, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RouteValidatorDirective);
                return RouteValidatorDirective;
            })();
            exports_1("RouteValidatorDirective", RouteValidatorDirective);
            RouteValidator = (function () {
                function RouteValidator() {
                }
                RouteValidator.validate = function (group) {
                    var von = group.find('von');
                    var nach = group.find('nach');
                    if (!von || !nach)
                        return {};
                    if (von.value == 'Graz' && nach.value == 'Hamburg') {
                        return {};
                    }
                    return {
                        route: true
                    };
                };
                return RouteValidator;
            })();
            exports_1("RouteValidator", RouteValidator);
        }
    }
});
//# sourceMappingURL=route-validator.js.map