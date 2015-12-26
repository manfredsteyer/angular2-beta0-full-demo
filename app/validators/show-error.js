System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1;
    var ShowError;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShowError = (function () {
                function ShowError(formDir) {
                    this.formDir = formDir;
                }
                Object.defineProperty(ShowError.prototype, "errorMessage", {
                    get: function () {
                        var control = this.formDir.form.find(this.controlPath);
                        if (control != null && control.touched) {
                            for (var i = 0; i < this.errorTypes.length; ++i) {
                                if (control.hasError(this.errorTypes[i])) {
                                    return this._errorMessage(this.errorTypes[i]);
                                }
                            }
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                ShowError.prototype._errorMessage = function (code) {
                    var config = { 'required': 'Pflichtfeld!', 'ort': 'Unbekannte Stadt!' };
                    return config[code];
                };
                ShowError = __decorate([
                    core_1.Component({ selector: 'show-error', inputs: ['controlPath: control', 'errorTypes: errors'] }),
                    core_1.View({
                        template: " \n    <span *ngIf=\"errorMessage !== null\">{{errorMessage}}</span> \n  ",
                        directives: [common_1.CORE_DIRECTIVES]
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [common_1.NgForm])
                ], ShowError);
                return ShowError;
            })();
            exports_1("ShowError", ShowError);
        }
    }
});
//# sourceMappingURL=show-error.js.map