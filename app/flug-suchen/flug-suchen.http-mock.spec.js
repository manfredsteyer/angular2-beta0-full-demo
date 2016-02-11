System.register(['angular2/testing', 'angular2/core', './flug-suchen', './../services/flug-manager', './../services/flug-service', './../services/flug-event-service', '../registry', 'angular2/http', 'angular2/http/testing', 'rxjs/add/operator/publish', 'rxjs/add/operator/share', 'rxjs/add/operator/catch', 'rxjs/add/operator/subscribeOn', 'rxjs/add/observable/from', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', 'angular2/src/platform/browser/browser_adapter'], function(exports_1) {
    var testing_1, core_1, flug_suchen_1, flug_manager_1, flug_service_1, flug_event_service_1, registry_1, http_1, testing_2, browser_adapter_1;
    var HTTP_MOCK_PROVIDERS;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_suchen_1_1) {
                flug_suchen_1 = flug_suchen_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (flug_event_service_1_1) {
                flug_event_service_1 = flug_event_service_1_1;
            },
            function (registry_1_1) {
                registry_1 = registry_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (browser_adapter_1_1) {
                browser_adapter_1 = browser_adapter_1_1;
            }],
        execute: function() {
            browser_adapter_1.BrowserDomAdapter.makeCurrent();
            // Http-Mock-Bindings
            HTTP_MOCK_PROVIDERS = [
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                core_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] })
            ];
            describe('FlugSuchen with Mock', function () {
                testing_1.beforeEachProviders(function () { return [
                    flug_suchen_1.FlugSuchen,
                    flug_manager_1.FlugManager,
                    flug_service_1.FlugService,
                    flug_event_service_1.FlugEventService,
                    core_1.provide(registry_1.BASE_URL, { useValue: 'http://www.angular.at/api' }),
                    HTTP_MOCK_PROVIDERS
                ]; });
                testing_1.it('should load flights', testing_1.injectAsync([flug_suchen_1.FlugSuchen, testing_2.MockBackend], function (flugSuchen, backend) {
                    return new Promise(function (resolve) {
                        var connection;
                        backend.connections.subscribe(function (c) {
                            connection = c;
                        });
                        flugSuchen.von = "Graz";
                        flugSuchen.nach = "Hamburg";
                        flugSuchen.suchen().then(function () {
                            expect(flugSuchen.fluege.length).toEqual(1);
                        });
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '[{"id": 1, "abflugort": "Graz", "zielort": "Hamburg", "datum": "2017-01-01"}]' })));
                        flugSuchen.suchen().then(function () {
                            expect(flugSuchen.fluege.length).toEqual(1);
                        });
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '[{"id": 1, "abflugort": "Graz", "zielort": "Hamburg", "datum": "2017-01-01"}]' })));
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=flug-suchen.http-mock.spec.js.map