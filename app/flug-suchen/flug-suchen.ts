import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { NgIf, NgFor, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { OrtPipe } from '../pipes/ort-pipe';
import { FlugService } from '../services/flug-service';
import { Inject} from 'angular2/core';
import { OrtValidator } from '../validators/ort-validator';
import { ShowError } from '../validators/show-error';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { FlugCard } from '../flug-card/flug-card';
import {FlugManager} from '../services/flug-manager';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import { OrtAsyncValidator } from '../validators/ort-async-validator';
import {FlugEventService} from '../services/flug-event-service';
import {AfterContentChecked } from 'angular2/core';

@Component({ 
	selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen/flug-suchen.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, OrtValidator, OrtAsyncValidator, ShowError, ROUTER_DIRECTIVES, FlugCard],
	pipes: [ /*OrtPipe*/ ]
})
export class FlugSuchen {
	
	von: string = "Graz";
	nach: string = "Hamburg";
	fluege = [];
	// selectedFlug;
	//flugService: FlugService;
	flugManager: FlugManager;
    flugEventService: FlugEventService;
    message: string;
    
	constructor(flugManager: FlugManager, flugEventService: FlugEventService) {
		//this.flugService = flugService;
        this.flugManager = flugManager;
        this.flugEventService = flugEventService;
	}
    
	suchen() {
		return new Promise((resolve, reject) => { 
            this.flugManager
                .load(this.von, this.nach)
                .subscribe(
                    (fluege) => { 
                        this.message = "Flüge geladen!";
                        this.fluege = fluege;
                        resolve();
                    }, 
                    (err) => {
                        console.error(err);
                        this.message = "Fehler beim Laden von Flügen!";
                        reject();
                    });
        });                
	}
	
	selectFlug(flug) {
		this.flugManager.selectedFlug = flug;
        this.flugEventService.flugSelected.next(flug);
	}
	
}