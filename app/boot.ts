import {bootstrap} from 'angular2/platform/browser';
import { provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import { FlugSuchen } from './flug-suchen/flug-suchen';
import { FlugService } from './services/flug-service';
import { BASE_URL } from './registry';
import { HTTP_PROVIDERS } from 'angular2/http';
import { BaseRequestOptions, RequestOptions } from 'angular2/http';

import { ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, CanActivate } from 'angular2/router';
import { Location, HashLocationStrategy, LocationStrategy } from 'angular2/router';
import { Home } from './home/home';
import { FlugEdit } from './flug-edit/flug-edit';
import { FlugEventService } from './services/flug-event-service';
import { App } from './app';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import {Injector} from 'angular2/core';
import {FlugManager} from './services/flug-manager';

import {OrtPipe} from './pipes/ort-pipe';
import {DateControl} from './date-control/date-control';
import {PLATFORM_DIRECTIVES, PLATFORM_PIPES} from 'angular2/core';

import {OAuthService} from './oauth2/oauth-service';
import {Configuration} from './services/configuration';

var options = new BaseRequestOptions();
options.headers.append("Authorization", "TEST 12345");

var services = [
	provide(FlugService, { useClass: FlugService }),
    FlugEventService,
	provide(BASE_URL, { useValue: 'http://www.angular.at/api'}),
	HTTP_PROVIDERS,
	// FORM_PROVIDERS,
	ROUTER_PROVIDERS,
    OAuthService,
    Configuration,
    //provide(RequestOptions, {useValue: options}),
	//provide(LocationStrategy, {useClass: HashLocationStrategy}),
	Location,
    provide(PLATFORM_DIRECTIVES, {useValue: DateControl, multi: true}),
    provide(PLATFORM_PIPES, {useValue: OrtPipe, multi: true})
];

bootstrap(App, services);


/*
var injector = Injector.resolveAndCreate(services);
var cache:FlugManager = injector.get(FlugManager);

cache.load("Graz", "Hamburg").subscribe((fluege) => {
    console.debug("got flights: " + fluege.length);
    
});
*/

/*
var promise = new Promise((resolve, reject) => {
   resolve(4711); 
   //reject("err!");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

var o = Observable.create((source) => {
    console.log("start producing ...");
    source.next(4711);
    source.next(815);
    //observer.error("err!");
    source.complete();
    return () => { console.log("dispose"); };
});

var abo = o.map(data => "!" + data + "!")
 .subscribe(
     data => {
         console.debug(data);
     },
     err => {
         console.debug(err);
     },
     () => {
         console.debug("done!");
     }
);

abo.unsubscribe();




*/


var o = Observable.create((observer) => {
   
   setTimeout(() => {
    observer.next(42);
    observer.error("err!");
   },0); 
    
}).publish().connect();

/*

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