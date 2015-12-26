System.register(['angular2/core', 'angular2/router', '../services/flug-service', 'angular2/common', '../date-control/date-control'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_service_1, common_1, date_control_1;
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
            function (date_control_1_1) {
                date_control_1 = date_control_1_1;
            }],
        execute: function() {
            FlugEdit = (function () {
                function FlugEdit(params, flugService) {
                    this.info = "FlugEdit!";
                    this.flug = {};
                    this.id = params.get('id');
                    var that = this;
                    flugService
                        .findById(this.id)
                        .subscribe(function (f) {
                        that.flug = f;
                    });
                    this.flugService = flugService;
                }
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
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, date_control_1.DateControl]
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