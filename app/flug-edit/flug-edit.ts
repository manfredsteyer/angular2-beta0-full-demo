import {Component, OnInit} from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { DateControl } from '../date-control/date-control';

import { CanActivate, CanDeactivate, OnActivate, OnDeactivate, ComponentInstruction } from 'angular2/router';

var mayCurrentUserAccessProtectedRoute = true;

@Component({
	templateUrl: 'app/flug-edit/flug-edit.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, DateControl]
})
@CanActivate((next, prev) => {
    console.debug('CanActivate');
    return mayCurrentUserAccessProtectedRoute;
})
export class FlugEdit implements CanDeactivate, OnActivate, OnDeactivate, OnInit {
	
	info = "FlugEdit!";
	id;
	flug = {};
	flugService: FlugService;
	message;
    f;
        
	constructor(params: RouteParams, flugService: FlugService) {
		this.id = params.get('id');
		this.flugService = flugService;	
	}
    
    ngOnInit() {
		this.flugService
			.findById(this.id)
			.subscribe(f => {
			     this.flug = f;
            });
    }
    
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
        console.debug("routerCanDeactivate");
        return confirm("Verlassen?");
    }
    
    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
        console.debug("routerOnActivate");
    }
    
    routerOnDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
        console.debug("routerOnDeactivate");
    }
	
	save() {
		this
			.flugService
			.save(this.flug)
			.subscribe(r => {
				if (r.status >= 400) {
					this.message = r.text();
				}
				else {
					this.message = "Flug gespeichert!";				
				}
			},
			err => {
				this.message = err.text();
			})
	}
	
}