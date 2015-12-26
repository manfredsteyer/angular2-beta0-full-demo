System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common', './services/flug-service', './registry', 'angular2/http', 'angular2/router', './app'], function(exports_1) {
    var browser_1, core_1, common_1, flug_service_1, registry_1, http_1, router_1, router_2, app_1;
    var service;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (registry_1_1) {
                registry_1 = registry_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            service = [
                core_1.provide(flug_service_1.FlugService, { useClass: flug_service_1.FlugService }),
                core_1.provide(registry_1.BASE_URL, { useValue: 'http://www.angular.at/api' }),
                http_1.HTTP_PROVIDERS,
                common_1.FORM_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
                router_2.Location
            ];
            browser_1.bootstrap(app_1.App, service);
        }
    }
});
//# sourceMappingURL=boot.js.map