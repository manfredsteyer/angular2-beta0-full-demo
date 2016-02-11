System.register(['angular2/core', 'angular2/router', '../services/flug-service', 'angular2/common', '../validators/date-value-accessor', '../validators/range-validator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_service_1, common_1, date_value_accessor_1, range_validator_1;
    var FlugEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (date_value_accessor_1_1) {
                date_value_accessor_1 = date_value_accessor_1_1;
            },
            function (range_validator_1_1) {
                range_validator_1 = range_validator_1_1;
            }],
        execute: function() {
            FlugEdit = (function () {
                function FlugEdit(params, flugService) {
                    this.info = "FlugEdit!";
                    this.flug = {};
                    this.exitWarning = {
                        show: false,
                        resolve: null
                    };
                    this.id = params.get('id');
                    this.flugService = flugService;
                }
                FlugEdit.prototype.ngOnInit = function () {
                    var _this = this;
                    this.flugService
                        .findById(this.id)
                        .subscribe(function (f) {
                        _this.flug = f;
                    });
                };
                FlugEdit.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    var _this = this;
                    console.debug("routerCanDeactivate");
                    //return confirm("Verlassen?");
                    this.exitWarning.show = true;
                    return new Promise(function (resolve) {
                        _this.exitWarning.resolve = resolve;
                    }).then(function (result) {
                        _this.exitWarning.show = false;
                        return result;
                    });
                };
                FlugEdit.prototype.routerOnActivate = function (nextInstruction, prevInstruction) {
                    console.debug("routerOnActivate");
                };
                FlugEdit.prototype.routerOnDeactivate = function (nextInstruction, prevInstruction) {
                    console.debug("routerOnDeactivate");
                };
                FlugEdit.prototype.save = function () {
                    var _this = this;
                    this
                        .flugService
                        .save(this.flug)
                        .subscribe(function (r) {
                        if (r.status >= 400) {
                            _this.message = r.text();
                        }
                        else {
                            _this.message = "Flug gespeichert!";
                        }
                    }, function (err) {
                        _this.message = err.text();
                    });
                };
                FlugEdit = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-edit/flug-edit.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, date_value_accessor_1.DateValueAccessor, range_validator_1.RangeValidatorDirective]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, flug_service_1.FlugService])
                ], FlugEdit);
                return FlugEdit;
            })();
            exports_1("FlugEdit", FlugEdit);
        }
    }
});
//# sourceMappingURL=flug-edit.js.map