import {Injectable} from 'angular2/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlugEventService {

    flugSelected: Subject<any> = new Subject<any>();

}