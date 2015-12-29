System.register(['./flug-service', 'angular2/core', 'rxjs/subject/BehaviorSubject', 'rxjs/scheduler/asap'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var flug_service_1, core_1, BehaviorSubject_1, asap_1;
    var FlugManager;
    return {
        setters:[
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (asap_1_1) {
                asap_1 = asap_1_1;
            }],
        execute: function() {
            FlugManager = (function () {
                function FlugManager(flugService) {
                    this.fluege = [];
                    this.flugService = flugService;
                    // events
                    var subj = new BehaviorSubject_1.BehaviorSubject([]);
                    this.fluegeSubscriber = subj;
                    this.fluegeStream = subj.subscribeOn(asap_1.asap);
                }
                FlugManager.prototype.load = function (von, nach) {
                    var _this = this;
                    var o = this.flugService.find(von, nach).share();
                    o.subscribe(function (loadedFluege) {
                        _this.fluege = loadedFluege;
                        // events
                        _this.fluegeSubscriber.next(loadedFluege);
                    });
                    return o;
                };
                FlugManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService])
                ], FlugManager);
                return FlugManager;
            })();
            exports_1("FlugManager", FlugManager);
        }
    }
});
//# sourceMappingURL=flug-manager.js.map