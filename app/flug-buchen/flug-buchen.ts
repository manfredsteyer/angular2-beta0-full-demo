import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {FlugSuchen} from '../flug-suchen/flug-suchen';
import {FlugSuchen2} from '../flug-suchen2/flug-suchen2';
import {PassagierSuchen} from '../passagier-suchen/passagier-suchen';
import {Buchen} from '../buchen/buchen';
import {FlugEdit} from '../flug-edit/flug-edit';
import {FlugManager} from '../services/flug-manager';
import {provide} from 'angular2/core';

@Component({
    templateUrl: 'app/flug-buchen/flug-buchen.html',
    directives: [ROUTER_DIRECTIVES, FlugSuchen],
    providers: [FlugManager]
})
@RouteConfig([
	{ path: '/flug-suchen', component: FlugSuchen, name: 'FlugSuchen', useAsDefault: true },
	{ path: '/flug-suchen2', component: FlugSuchen2, name: 'FlugSuchen2' },    
    { path: '/passagier-suchen', component: PassagierSuchen, name: 'PassagierSuchen' },
    { path: '/buchen', component: Buchen, name: 'Buchen'},
    { path: '/flug-edit/:id', component: FlugEdit, name: 'FlugEdit' }
])
export class FlugBuchen {
    
    constructor(private location: Location, flugManager: FlugManager) {
        console.debug("flugManager");
        console.debug(<any>flugManager);
    }
    
    info = "FlugBuchen";
      
    isActive(path): boolean {
		return (this.location.path() == path);
	}  
}