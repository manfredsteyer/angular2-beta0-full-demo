System.register(['angular2/core', 'angular2/router', '../flug-suchen/flug-suchen', '../passagier-suchen/passagier-suchen', '../buchen/buchen', '../flug-edit/flug-edit', '../services/flug-manager'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_suchen_1, passagier_suchen_1, buchen_1, flug_edit_1, flug_manager_1;
    var FlugBuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_suchen_1_1) {
                flug_suchen_1 = flug_suchen_1_1;
            },
            function (passagier_suchen_1_1) {
                passagier_suchen_1 = passagier_suchen_1_1;
            },
            function (buchen_1_1) {
                buchen_1 = buchen_1_1;
            },
            function (flug_edit_1_1) {
                flug_edit_1 = flug_edit_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            }],
        execute: function() {
            FlugBuchen = (function () {
                function FlugBuchen(location, flugManager) {
                    this.location = location;
                    this.info = "FlugBuchen";
                    console.debug("flugManager");
                    console.debug(flugManager);
                }
                FlugBuchen.prototype.isActive = function (path) {
                    return (this.location.path() == path);
                };
                FlugBuchen = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-buchen/flug-buchen.html',
                        directives: [router_1.ROUTER_DIRECTIVES, flug_suchen_1.FlugSuchen],
                        providers: [flug_manager_1.FlugManager]
                    }),
                    router_1.RouteConfig([
                        { path: '/flug-suchen', component: flug_suchen_1.FlugSuchen, as: 'FlugSuchen', useAsDefault: true },
                        { path: '/passagier-suchen', component: passagier_suchen_1.PassagierSuchen, as: 'PassagierSuchen' },
                        { path: '/buchen', component: buchen_1.Buchen, as: 'Buchen' },
                        { path: '/flug-edit/:id', component: flug_edit_1.FlugEdit, as: 'FlugEdit' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location, flug_manager_1.FlugManager])
                ], FlugBuchen);
                return FlugBuchen;
            })();
            exports_1("FlugBuchen", FlugBuchen);
        }
    }
});
//# sourceMappingURL=flug-buchen.js.map