import { Directive, Provider } from 'angular2/core';
import { NG_ASYNC_VALIDATORS, Control } from 'angular2/common';

@Directive({
	selector: '[ort-async]',  // <input ort
	bindings: [new Provider(NG_ASYNC_VALIDATORS , {useValue: OrtAsyncValidator.validate, multi: true})]
}) 
export class OrtAsyncValidator {
	
	static validate(ctrl: Control): any {
		
        // Im Gegensatz zum synchronen Gegenstück, erlaubt dieser asynchrone Validator
        // mit einer Verzögerung von 3 Sekunden nicht den Ort 'Wien' !!
		var orte = ["Graz", "München", "Hamburg", "Berlin"];

        return new Promise((accept) => { 
            
            window.setTimeout(() => {
            
                if (!ctrl.value) return { };

                if (orte.find(o => o == ctrl.value)) {
                    accept({});
                    return;
                }
                
                accept({
                    ortAsync: true
                });
            
            }, 3000);
        });
		
	}
	
}