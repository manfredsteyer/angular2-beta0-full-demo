System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var OrtAsyncValidator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            OrtAsyncValidator = (function () {
                function OrtAsyncValidator() {
                }
                OrtAsyncValidator.validate = function (ctrl) {
                    // Im Gegensatz zum synchronen Gegenstück, erlaubt dieser asynchrone Validator
                    // mit einer Verzögerung von 3 Sekunden nicht den Ort 'Wien' !!
                    var orte = ["Graz", "München", "Hamburg", "Berlin"];
                    return new Promise(function (accept) {
                        window.setTimeout(function () {
                            if (!ctrl.value)
                                return {};
                            if (orte.find(function (o) { return o == ctrl.value; })) {
                                accept({});
                                return;
                            }
                            accept({
                                ortAsync: true
                            });
                        }, 3000);
                    });
                };
                OrtAsyncValidator = __decorate([
                    core_1.Directive({
                        selector: '[ort-async]',
                        bindings: [new core_1.Provider(common_1.NG_ASYNC_VALIDATORS, { useValue: OrtAsyncValidator.validate, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrtAsyncValidator);
                return OrtAsyncValidator;
            })();
            exports_1("OrtAsyncValidator", OrtAsyncValidator);
        }
    }
});
//# sourceMappingURL=ort-async-validator.js.map