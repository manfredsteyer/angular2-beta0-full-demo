import {Component} from 'angular2/core';
import {FlugEventService} from '../services/flug-event-service';

@Component({
    selector: 'warenkorb',
    templateUrl: 'app/warenkorb/warenkorb.html'
})
export class Warenkorb {
    
    flugEventService: FlugEventService;
    fluege = [];
    
    constructor(flugEventService: FlugEventService) {
        this.flugEventService = flugEventService;    
        flugEventService.flugSelected.subscribe(flug => {
           
           if (this.fluege.length >= 3) {
               this.fluege.splice(0, 1);
           }
           
           this.fluege.push(flug); 
        });
    }

    remove(f) {
        var idx = this.fluege.findIndex(flug => flug == f);
        this.fluege.splice(idx,1);
    }
}