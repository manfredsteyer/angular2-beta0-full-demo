import { it, inject, injectAsync, beforeEachProviders } from 'angular2/testing';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';

import {FlugSuchen} from './flug-suchen';
import {FlugManager} from './../services/flug-manager';
import {FlugService} from './../services/flug-service';
import {FlugEventService} from './../services/flug-event-service';
import {BASE_URL} from '../registry';
import {BaseRequestOptions, Http} from 'angular2/http';
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

class FlugServiceMock {
    findById(id) { return null; }
    find(von, nach) { 
        return Observable.from([[{id: 1, abflugort: 'Graz', zielort: 'Hamburg', datum: '2017-01-01'}]]);
    }
    save(flug) { return null; }
}

describe('FlugSuchen', () => {
 
    beforeEachProviders(() => [ 
        FlugSuchen,
        FlugManager,
        provide(FlugService, { useClass: FlugServiceMock }),
        FlugEventService
    ]);
    
    it('should show no flights initially', inject([FlugSuchen], (flugSuchen: FlugSuchen) => {
        expect(flugSuchen.fluege.length).toEqual(0);
    }));
    
    it('should load flights', injectAsync([FlugSuchen], (flugSuchen: FlugSuchen) => {
        
        flugSuchen.von = "Graz";
        flugSuchen.nach = "Hamburg";
        
        return flugSuchen.suchen().then(() => { 
            expect(flugSuchen.fluege.length).toEqual(1);    
        })
        
    }));
    
});