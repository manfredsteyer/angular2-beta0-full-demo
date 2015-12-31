System.register(['angular2/testing', 'angular2/core', './flug-suchen', './../services/flug-manager', './../services/flug-service', './../services/flug-event-service', 'rxjs/Observable', 'rxjs/add/operator/publish', 'rxjs/add/operator/share', 'rxjs/add/operator/catch', 'rxjs/add/operator/subscribeOn', 'rxjs/add/observable/from', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', 'angular2/src/platform/browser/browser_adapter'], function(exports_1) {
    var testing_1, core_1, flug_suchen_1, flug_manager_1, flug_service_1, flug_event_service_1, Observable_1, browser_adapter_1;
    var FlugServiceMock;
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
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
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
            FlugServiceMock = (function () {
                function FlugServiceMock() {
                }
                FlugServiceMock.prototype.findById = function (id) { return null; };
                FlugServiceMock.prototype.find = function (von, nach) {
                    return Observable_1.Observable.from([[{ id: 1, abflugort: 'Graz', zielort: 'Hamburg', datum: '2017-01-01' }]]);
                };
                FlugServiceMock.prototype.save = function (flug) { return null; };
                return FlugServiceMock;
            })();
            describe('FlugSuchen', function () {
                testing_1.beforeEachProviders(function () { return [
                    flug_suchen_1.FlugSuchen,
                    flug_manager_1.FlugManager,
                    core_1.provide(flug_service_1.FlugService, { useClass: FlugServiceMock }),
                    flug_event_service_1.FlugEventService
                ]; });
                testing_1.it('should show no flights initially', testing_1.inject([flug_suchen_1.FlugSuchen], function (flugSuchen) {
                    expect(flugSuchen.fluege.length).toEqual(0);
                }));
                testing_1.it('should load flights', testing_1.injectAsync([flug_suchen_1.FlugSuchen], function (flugSuchen) {
                    flugSuchen.von = "Graz";
                    flugSuchen.nach = "Hamburg";
                    return flugSuchen.suchen().then(function () {
                        expect(flugSuchen.fluege.length).toEqual(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=flug-suchen.spec.js.map