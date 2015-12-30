System.register(['angular2/core', 'angular2/common', '../pipes/ort-pipe', '../services/flug-service', '../validators/ort-validator', '../validators/ort-async-validator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ort_pipe_1, flug_service_1, common_2, ort_validator_1, ort_async_validator_1;
    var FlugSuchen2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (ort_validator_1_1) {
                ort_validator_1 = ort_validator_1_1;
            },
            function (ort_async_validator_1_1) {
                ort_async_validator_1 = ort_async_validator_1_1;
            }],
        execute: function() {
            FlugSuchen2 = (function () {
                function FlugSuchen2(flugService, fb) {
                    this.fluege = [];
                    this.flugService = flugService;
                    this.filter = fb.group({
                        von: [
                            'Graz',
                            common_2.Validators.compose([
                                common_2.Validators.required,
                                ort_validator_1.OrtValidator.validate,
                                common_2.Validators.minLength(2)
                            ]),
                            common_2.Validators.composeAsync([
                                ort_async_validator_1.OrtAsyncValidator.validate
                            ])
                        ],
                        nach: ['Hamburg', common_2.Validators.required]
                    });
                    // Async-Validator-Demo
                    /*
                    this.filter.find("von").asyncValidator = Validators.composeAsync([
                        OrtAsyncValidator.validate
                    ]);
                    */
                }
                FlugSuchen2.prototype.suchen = function () {
                    var _this = this;
                    var filterData = this.filter.value;
                    this.flugService
                        .find(filterData.von, filterData.nach)
                        .subscribe(function (r) {
                        _this.fluege = r;
                    });
                };
                FlugSuchen2.prototype.selectFlug = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchen2 = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen2/flug-suchen2.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ort_validator_1.OrtValidator],
                        pipes: [ort_pipe_1.OrtPipe]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService, common_2.FormBuilder])
                ], FlugSuchen2);
                return FlugSuchen2;
            })();
            exports_1("FlugSuchen2", FlugSuchen2);
        }
    }
});
//# sourceMappingURL=flug-suchen2.js.map