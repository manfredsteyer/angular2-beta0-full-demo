import { it, inject, injectAsync, beforeEachProviders } from 'angular2/testing';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';

import {FlugSuchen} from './flug-suchen';
import {FlugManager} from './../services/flug-manager';
import {FlugService} from './../services/flug-service';
import {FlugEventService} from './../services/flug-event-service';
import {BASE_URL} from '../registry';
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Notwendig in Beta-0
import {BrowserDomAdapter} from 'angular2/src/platform/browser/browser_adapter';
BrowserDomAdapter.makeCurrent();

// Http-Mock-Bindings

var HTTP_MOCK_PROVIDERS = [
    BaseRequestOptions,
    MockBackend,
    provide(Http, { useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]})  
];

describe('FlugSuchen with Mock', () => {
 
    beforeEachProviders(() => [ 
        FlugSuchen,
        FlugManager,
        FlugService, 
        FlugEventService,
        provide(BASE_URL, {useValue: 'http://www.angular.at/api'}),
        HTTP_MOCK_PROVIDERS
    ]);
    
    it('should load flights', injectAsync([FlugSuchen, MockBackend], (flugSuchen: FlugSuchen, backend: MockBackend) => {
        return new Promise((resolve) => {

            var connection;
            backend.connections.subscribe(c => { connection = c; });
            
            flugSuchen.von = "Graz";
            flugSuchen.nach = "Hamburg";
            
            flugSuchen.suchen().then(() => { 
                expect(flugSuchen.fluege.length).toEqual(1);  
                resolve();  
            });
            
            connection.mockRespond(
                new Response(
                    new ResponseOptions(
                        {body: '[{"id": 1, "abflugort": "Graz", "zielort": "Hamburg", "datum": "2017-01-01"}]'})));
        
        });
    }));
    
});