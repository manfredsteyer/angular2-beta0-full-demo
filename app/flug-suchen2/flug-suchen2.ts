import { Component, Inject } from 'angular2/core';
import { NgIf, NgFor, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { OrtPipe } from '../pipes/ort-pipe';
import { FlugService } from '../services/flug-service';
import { ControlGroup, FormBuilder, Validators, Control} from 'angular2/common';
import { OrtValidator } from '../validators/ort-validator';
import { OrtAsyncValidator } from '../validators/ort-async-validator';
import { RangeValidator } from '../validators/range-validator';
import { RouteValidator } from '../validators/route-validator';

@Component({
	selector: 'flug-suchen',
	templateUrl: 'app/flug-suchen2/flug-suchen2.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	pipes: [OrtPipe]
})
export class FlugSuchen2 {
	
	fluege = [];
	selectedFlug;
	flugService: FlugService;
	filter: ControlGroup;
	
	constructor(flugService: FlugService, fb: FormBuilder) {
		this.flugService = flugService;
		
		this.filter = fb.group({
			von: [
				'Graz', 
				Validators.compose([
					Validators.required,
					OrtValidator.validate,
					Validators.minLength(2)
				]),
                Validators.composeAsync([
                    OrtAsyncValidator.validate
                ])
			],
			nach: ['Hamburg', Validators.required],
            maxSegmente: ['2', RangeValidator.create(1,5)]
		});
        
        this.filter.validator = RouteValidator.validate;
        
	}
	
	suchen() {
		
		var filterData = this.filter.value;
		
		this.flugService
			.find(filterData.von, filterData.nach)
			.subscribe((r) => {
				this.fluege = r;
			});
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}