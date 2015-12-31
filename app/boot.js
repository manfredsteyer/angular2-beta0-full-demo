System.register(['angular2/platform/browser', 'angular2/core', './services/flug-service', './registry', 'angular2/http', 'angular2/router', './services/flug-event-service', './app', 'rxjs/add/operator/publish', 'rxjs/add/operator/share', 'rxjs/add/operator/catch', 'rxjs/add/operator/subscribeOn', 'rxjs/add/observable/from', 'rxjs/add/operator/map', './pipes/ort-pipe', './date-control/date-control', './oauth2/oauth-service', './services/configuration'], function(exports_1) {
    var browser_1, core_1, flug_service_1, registry_1, http_1, router_1, router_2, flug_event_service_1, app_1, ort_pipe_1, date_control_1, core_2, oauth_service_1, configuration_1;
    var services;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
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
            function (flug_event_service_1_1) {
                flug_event_service_1 = flug_event_service_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (date_control_1_1) {
                date_control_1 = date_control_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            }],
        execute: function() {
            services = [
                core_1.provide(flug_service_1.FlugService, { useClass: flug_service_1.FlugService }),
                flug_event_service_1.FlugEventService,
                core_1.provide(registry_1.BASE_URL, { useValue: 'http://www.angular.at/api' }),
                http_1.HTTP_PROVIDERS,
                // FORM_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                oauth_service_1.OAuthService,
                configuration_1.Configuration,
                //provide(LocationStrategy, {useClass: HashLocationStrategy}),
                router_2.Location,
                core_1.provide(core_2.PLATFORM_DIRECTIVES, { useValue: date_control_1.DateControl, multi: true }),
                core_1.provide(core_2.PLATFORM_PIPES, { useValue: ort_pipe_1.OrtPipe, multi: true })
            ];
            browser_1.bootstrap(app_1.App, services);
        }
    }
});
/*
var injector = Injector.resolveAndCreate(services);
var cache:FlugManager = injector.get(FlugManager);

cache.load("Graz", "Hamburg").subscribe((fluege) => {
    console.debug("got flights: " + fluege.length);
    
});
*/
/*
var o = Observable.create((observer) => {
   
   setTimeout(() => {
    observer.next(42);
    observer.error("err!");
   },0);
    
}).publish().connect();



o.map(data => "!" + data + "!")
 .subscribe(
     data => {
         console.debug(data);
     },
     err => {
         console.debug(err);
     }
 );
*/
/*
var o = new Subject();

o.map(data => "*" + data + "*")
 .catch(err => {
     return Observable.from([err]);
 })
 .subscribe(
     data => {
         console.debug(data);
     },
     err => {
         console.debug(err);
     }
 );
 
o.map(data => "!" + data + "!")
 .subscribe(
     data => {
         console.debug(data);
     },
     err => {
         console.debug(err);
     }
 );
 
 o.next(42);
 o.error("err!");
 */ 
//# sourceMappingURL=boot.js.map