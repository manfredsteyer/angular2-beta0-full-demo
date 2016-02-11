import {Directive, provide, Attribute} from 'angular2/core';
import {Control, NG_VALIDATORS, 
    Validator} from 'angular2/common';

export class RangeValidator {
    
    static create(min: number, max: number): Function {
        return (c: Control): any => {
            if (!c.value) return {};
            
            var value = Number(c.value);
            
            if (isNaN(value)) return {'range': true};
            if (value >= min && value <= max) return {};
            
            return {'range': true};
        };
    }
    
}

@Directive({
  selector: '[min][max]',
  providers: [provide(NG_VALIDATORS, {useExisting: RangeValidatorDirective, multi: true})]
})
export class RangeValidatorDirective implements Validator {
    
    validator: Function;
    
    constructor(@Attribute('min') min: number, @Attribute('max') max: number) {
        this.validator = RangeValidator.create(min, max);
    }
    
    validate(c: Control) {
        return this.validator(c);
    }
    
}