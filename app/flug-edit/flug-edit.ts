import {Component, OnInit} from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { DateControl } from '../date-control/date-control';
import { DateValueAccessor } from '../validators/date-value-accessor';
import {RangeValidatorDirective} from '../validators/range-validator';
import { CanActivate, CanDeactivate, OnActivate, OnDeactivate, ComponentInstruction } from 'angular2/router';

@Component({
	templateUrl: 'app/flug-edit/flug-edit.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, DateValueAccessor, RangeValidatorDirective]
})
export class FlugEdit implements CanDeactivate, OnActivate, OnDeactivate, OnInit {
	
	info = "FlugEdit!";
	id;
	flug = {};
	flugService: FlugService;
	message;
    f;
        
    exitWarning = {
        show: false,
        resolve: null   
    }; 
        
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
        //return confirm("Verlassen?");
        
        this.exitWarning.show = true;
        
        return new Promise((resolve) => {
           this.exitWarning.resolve = resolve;
        }).then((result) => {
            this.exitWarning.show = false;
            return result;
        });
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