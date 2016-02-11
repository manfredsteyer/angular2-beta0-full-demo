import {ControlGroup, Control, NG_VALIDATORS, Validator} from 'angular2/common';
import {Directive, provide} from 'angular2/core';

@Directive({
	selector: '[route]', 
	providers: [provide(NG_VALIDATORS, {useExisting: RouteValidatorDirective, multi: true})]
})
export class RouteValidatorDirective {
    
    validate(group: ControlGroup) {
        return RouteValidator.validate(group);
    }
} 

export class RouteValidator {
    
    static validate(group: ControlGroup): any {
        
        var von = group.find('von');
        var nach = group.find('nach');
        
        if (!von || !nach) return {};
        
        if (von.value == 'Graz' && nach.value == 'Hamburg') {
            return {};
        }
        return {
            route: true
        }        
    }
    
}