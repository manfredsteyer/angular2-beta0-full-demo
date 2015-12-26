System.register(['angular2/core', 'angular2/common', '../pipes/ort-pipe', '../services/flug-service', '../validators/ort-validator', '../validators/show-error', 'angular2/router', '../flug-card/flug-card', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ort_pipe_1, flug_service_1, ort_validator_1, show_error_1, router_1, flug_card_1;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            function (show_error_1_1) {
                show_error_1 = show_error_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_card_1_1) {
                flug_card_1 = flug_card_1_1;
            },
            function (_1) {}],
        execute: function() {
            FlugSuchen = (function () {
                function FlugSuchen(flugService) {
                    this.von = "Graz";
                    this.nach = "Hamburg";
                    this.fluege = [];
                    this.flugService = flugService;
                }
                FlugSuchen.prototype.suchen = function (f) {
                    var _this = this;
                    this.flugService
                        .find(this.von, this.nach)
                        .subscribe(function (r) {
                        _this.fluege = r;
                    });
                };
                FlugSuchen.prototype.selectFlug = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ort_validator_1.OrtValidator, show_error_1.ShowError, router_1.ROUTER_DIRECTIVES, flug_card_1.FlugCard],
                        pipes: [ort_pipe_1.OrtPipe]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService])
                ], FlugSuchen);
                return FlugSuchen;
            })();
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.js.map