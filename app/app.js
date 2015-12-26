System.register(['angular2/core', './flug-suchen/flug-suchen', 'angular2/router', './home/home', './flug-edit/flug-edit'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, flug_suchen_1, router_1, router_2, home_1, flug_edit_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_suchen_1_1) {
                flug_suchen_1 = flug_suchen_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (flug_edit_1_1) {
                flug_edit_1 = flug_edit_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(location) {
                    this.title = "Flug-Demo-App";
                    this.location = location;
                }
                App.prototype.isActive = function (path) {
                    return (this.location.path() == path);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.Home, as: 'Home' },
                        { path: '/flug-suchen', component: flug_suchen_1.FlugSuchen, as: 'FlugSuchen' },
                        { path: '/flug-edit/:id', component: flug_edit_1.FlugEdit, as: 'FlugEdit' }
                    ]),
                    router_1.CanActivate(function (next, prev) {
                        return true;
                    }), 
                    __metadata('design:paramtypes', [router_2.Location])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map