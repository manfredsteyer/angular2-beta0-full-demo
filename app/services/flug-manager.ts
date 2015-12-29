import {FlugService} from './flug-service';
import {Injectable} from 'angular2/core';

import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { asap } from 'rxjs/scheduler/asap';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class FlugManager {
    
    private flugService: FlugService;

    selectedFlug;
    fluege = [];

    // events
    private fluegeSubscriber: Observer<any>;
    public fluegeStream: Observable<any>;
    
    constructor(flugService: FlugService) {
        this.flugService = flugService;
        
        // events
        var subj = new BehaviorSubject<any>([]);
        this.fluegeSubscriber = subj;
        this.fluegeStream = subj.subscribeOn(asap);
    }
    
    load(von: string, nach: string) {
        
        var o = this.flugService.find(von, nach).share();
        
        o.subscribe((loadedFluege) => { 
            this.fluege = loadedFluege;
            
            // events
            this.fluegeSubscriber.next(loadedFluege);
        });
        
        return o;
    }
    
}