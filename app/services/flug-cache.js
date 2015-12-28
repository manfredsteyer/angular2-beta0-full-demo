System.register(['./flug-service', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var flug_service_1, core_1;
    var FlugCache;
    return {
        setters:[
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlugCache = (function () {
                function FlugCache(flugService) {
                    this.fluege = [];
                    this.flugService = flugService;
                }
                FlugCache.prototype.load = function (von, nach) {
                    var _this = this;
                    var o = this.flugService.find(von, nach);
                    var hot = o.publish();
                    hot.connect();
                    hot.subscribe(function (fluege) {
                        _this.fluege = fluege;
                        console.debug("inner!");
                    });
                    return hot;
                };
                FlugCache = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService])
                ], FlugCache);
                return FlugCache;
            })();
            exports_1("FlugCache", FlugCache);
        }
    }
});
//# sourceMappingURL=flug-cache.js.map