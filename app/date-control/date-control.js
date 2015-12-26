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
    var core_1, common_1, core_2;
    var DateControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            // <data-control 
            //		[date]="flug.datum" 
            //      (date-change)="flug.datum = $event">
            DateControl = (function () {
                function DateControl() {
                    this.dateChange = new core_2.EventEmitter();
                }
                DateControl.prototype.ngOnChanges = function () {
                    var date = new Date(this.date);
                    this.day = date.getDate();
                    this.month = date.getMonth() + 1;
                    this.year = date.getFullYear();
                    this.hour = date.getHours();
                    this.minute = date.getMinutes();
                };
                DateControl.prototype.apply = function () {
                    var date = new Date();
                    date.setDate(this.day);
                    date.setMonth(this.month - 1);
                    date.setFullYear(this.year);
                    date.setHours(this.hour);
                    date.setMinutes(this.minute);
                    date.setSeconds(0);
                    date.setMilliseconds(0);
                    this.dateChange.next(date.toISOString());
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DateControl.prototype, "date", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DateControl.prototype, "dateChange", void 0);
                DateControl = __decorate([
                    core_1.Component({
                        selector: 'date-control',
                        templateUrl: 'app/date-control/date-control.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DateControl);
                return DateControl;
            })();
            exports_1("DateControl", DateControl);
        }
    }
});
//# sourceMappingURL=date-control.js.map