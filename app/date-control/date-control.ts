import { Component, Input, Output } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { EventEmitter, OnChanges } from 'angular2/core';

// <data-control 
//		[date]="flug.datum" 
//      (date-change)="flug.datum = $event">
@Component({
	selector: 'date-control',
	templateUrl: 'app/date-control/date-control.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DateControl implements OnChanges {
	
	@Input()  date;
	@Output() dateChange = new EventEmitter();
	
	day;
	month;
	year;
	hour;
	minute;
	
	ngOnChanges() {
		
		var date = new Date(this.date);
		
		this.day = date.getDate();
		this.month = date.getMonth() + 1;
		this.year = date.getFullYear();
		this.hour = date.getHours();
		this.minute = date.getMinutes();
	}
	
	apply() {
		
		var date = new Date();
		
		date.setDate(this.day);
		date.setMonth(this.month -1);
		date.setFullYear(this.year);
		date.setHours(this.hour);
		date.setMinutes(this.minute);
                date.setSeconds(0);
		date.setMilliseconds(0);
		
		this.dateChange.next(date.toISOString());
	}
	
	
}