System.register(['angular2/common'], function(exports_1) {
    var common_1;
    var MY_DIRECTIVES, BASE_URL;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            exports_1("MY_DIRECTIVES", MY_DIRECTIVES = [common_1.NgIf, common_1.NgFor]);
            exports_1("BASE_URL", BASE_URL = "BASE_URL");
        }
    }
});
//# sourceMappingURL=registry.js.map