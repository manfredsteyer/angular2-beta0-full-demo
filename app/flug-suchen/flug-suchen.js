System.register(['angular2/core', '../validators/ort-validator', '../validators/show-error', 'angular2/router', '../flug-card/flug-card', '../services/flug-manager', '../validators/ort-async-validator', '../services/flug-event-service', '../validators/range-validator', '../validators/route-validator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ort_validator_1, show_error_1, router_1, flug_card_1, flug_manager_1, ort_async_validator_1, flug_event_service_1, range_validator_1, route_validator_1;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ort_validator_1_1) {
                ort_validator_1 = ort_validator_1_1;
            },
            function (show_error_1_1) {
                show_error_1 = show_error_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_card_1_1) {
                flug_card_1 = flug_card_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (ort_async_validator_1_1) {
                ort_async_validator_1 = ort_async_validator_1_1;
            },
            function (flug_event_service_1_1) {
                flug_event_service_1 = flug_event_service_1_1;
            },
            function (range_validator_1_1) {
                range_validator_1 = range_validator_1_1;
            },
            function (route_validator_1_1) {
                route_validator_1 = route_validator_1_1;
            }],
        execute: function() {
            FlugSuchen = (function () {
                function FlugSuchen(flugManager, flugEventService) {
                    this.von = "Graz";
                    this.nach = "Hamburg";
                    this.maxSegmente = 2;
                    this.fluege = [];
                    //this.flugService = flugService;
                    this.flugManager = flugManager;
                    this.flugEventService = flugEventService;
                }
                FlugSuchen.prototype.suchen = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.flugManager
                            .load(_this.von, _this.nach)
                            .subscribe(function (fluege) {
                            _this.message = "Flüge geladen!";
                            _this.fluege = fluege;
                            resolve();
                        }, function (err) {
                            console.error(err);
                            _this.message = "Fehler beim Laden von Flügen!";
                            reject();
                        });
                    });
                };
                FlugSuchen.prototype.selectFlug = function (flug) {
                    this.flugManager.selectedFlug = flug;
                    this.flugEventService.flugSelected.next(flug);
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.html',
                        directives: [
                            ort_validator_1.OrtValidatorDirective,
                            ort_async_validator_1.OrtAsyncValidatorDirective,
                            show_error_1.ShowError,
                            router_1.ROUTER_DIRECTIVES,
                            flug_card_1.FlugCard,
                            range_validator_1.RangeValidatorDirective,
                            route_validator_1.RouteValidatorDirective
                        ],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [flug_manager_1.FlugManager, flug_event_service_1.FlugEventService])
                ], FlugSuchen);
                return FlugSuchen;
            })();
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.js.map