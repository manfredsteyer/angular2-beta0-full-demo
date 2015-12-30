import {Directive, Renderer, ElementRef, Self, forwardRef, Provider} from 'angular2/core';

import {NG_VALUE_ACCESSOR, DefaultValueAccessor } from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';

const PROVIDER = CONST_EXPR(new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => DateValueAccessor), multi: true}));
    
@Directive({
  selector:
      'input[date]',
  host: {'(input)': 'input($event.target.value)', '(blur)': 'blur()'},
  bindings: [PROVIDER]
})
export class DateValueAccessor extends DefaultValueAccessor {
   
    constructor(_renderer: Renderer, _elementRef: ElementRef) {
       super(_renderer, _elementRef);
    }
    
    blur() {
        this.onTouched();
    }
    
    input(value) {
    
        // Write back to model   
        if (value) {
            value = value.split(/\./);
            value = value[2] + "-" + value[1] + "-" + value[0];
        }
        
        this.onChange(value);
    }
    
    writeValue(value: any): void {
        
        // Write to view
        if (value) {
            var date = new Date(value);
            value = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear(); 
        }
        
        super.writeValue(value);
        
    }

} 