import {FlugService} from './flug-service';
import {Injectable} from 'angular2/core';

import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';

@Injectable()
export class FlugManager {
    
    private flugService: FlugService;
    fluegeEvents = new BehaviorSubject<any>([]);
    selectedFlug;
    fluege = [];
    
    constructor(flugService: FlugService) {
        this.flugService = flugService;
    }
    
    load(von: string, nach: string) {
        
        var o = this.flugService.find(von, nach).share();
        
        o.subscribe((loadedFluege) => {
            this.fluegeEvents.next(loadedFluege);
            this.fluege = loadedFluege;
        });
        
        return o;
    }
    
}