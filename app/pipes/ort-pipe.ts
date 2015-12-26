import {Pipe} from 'angular2/core';

@Pipe({
	name: 'ort'
})
export class OrtPipe {
	
	// {{ f.abflugort | ort:'long' }}
	transform(value: any, args: Array<any>) {
		
		var fmt = args[0];
		var long, short;
		
		switch(value) {
			
			case "Graz":
				short = "GRZ";
				long = "Graz Thalerhof";
			break;
			case "München":
				short = "MUC";
				long = "München Franz-Josef-Strauss";
			break;
			case "Hamburg":
				short = "HAM";
				long = "Hamburg Fuhlsbüttel";
			break;
			default:
				short = "ROM";
				long = "ROM";
			
		}
		
		if (fmt == 'long') return long;
		return short;
		
	}
	
}