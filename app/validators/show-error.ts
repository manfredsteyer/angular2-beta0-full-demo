import { Component, View, Host } from 'angular2/core';
import { CORE_DIRECTIVES, NgForm } from 'angular2/common';

@Component({selector: 'show-error', inputs: ['controlPath: control', 'errorTypes: errors']}) 
@View({ 
  template: ` 
    <span *ngIf="errorMessage !== null">{{errorMessage}}</span> 
  `, 
  directives: [CORE_DIRECTIVES] 
}) 
export class ShowError { 
  formDir; 
  controlPath: string; 
  errorTypes: string[]; 

  constructor(@Host() formDir: NgForm) { this.formDir = formDir; } 

  get errorMessage(): string { 
    var control = this.formDir.form.find(this.controlPath); 
    if (control != null && control.touched) { 
      for (var i = 0; i < this.errorTypes.length; ++i) { 
        if (control.hasError(this.errorTypes[i])) { 
          return this._errorMessage(this.errorTypes[i]); 
        } 
      } 
    } 
    return null; 
  } 

  _errorMessage(code: string): string { 
    var config = {'required': 'Pflichtfeld!', 'ort': 'Unbekannte Stadt!'}; 
    return config[code]; 
  } 
} 
 
