import { Directive, Provider } from 'angular2/core';
import { NG_VALIDATORS, Control, Validator } from 'angular2/common';

@Directive({
	selector: '[ort]',  // <input ort
	bindings: [new Provider(NG_VALIDATORS, {useExisting: OrtValidatorDirective, multi: true})]
})
export class OrtValidatorDirective implements Validator {
    
    validate(c: Control) {
        return OrtValidator.validate(c);
    }
}
 
export class OrtValidator {
	
	static validate(ctrl: Control): any {
		
		var orte = ["Graz", "München", "Wien", "Hamburg", "Berlin"];

		if (!ctrl.value) return { };

		if (orte.find(o => o == ctrl.value)) {
			return { }
		}
		
		return {
			ort: true
		};
		
	}
	
}