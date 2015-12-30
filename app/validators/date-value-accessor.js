System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/lang'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, lang_1;
    var PROVIDER, DateValueAccessor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            PROVIDER = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return DateValueAccessor; }), multi: true }));
            DateValueAccessor = (function (_super) {
                __extends(DateValueAccessor, _super);
                function DateValueAccessor(_renderer, _elementRef) {
                    _super.call(this, _renderer, _elementRef);
                }
                DateValueAccessor.prototype.blur = function () {
                    this.onTouched();
                };
                DateValueAccessor.prototype.input = function (value) {
                    // Write back to model   
                    if (value) {
                        value = value.split(/\./);
                        value = value[2] + "-" + value[1] + "-" + value[0];
                    }
                    this.onChange(value);
                };
                DateValueAccessor.prototype.writeValue = function (value) {
                    // Write to view
                    if (value) {
                        var date = new Date(value);
                        value = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                    }
                    _super.prototype.writeValue.call(this, value);
                };
                DateValueAccessor = __decorate([
                    core_1.Directive({
                        selector: 'input[date]',
                        host: { '(input)': 'input($event.target.value)', '(blur)': 'blur()' },
                        bindings: [PROVIDER]
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
                ], DateValueAccessor);
                return DateValueAccessor;
            })(common_1.DefaultValueAccessor);
            exports_1("DateValueAccessor", DateValueAccessor);
        }
    }
});
//# sourceMappingURL=date-value-accessor.js.map