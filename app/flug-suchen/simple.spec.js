System.register(['angular2/testing'], function(exports_1) {
    var testing_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            testing_1.describe('1st tests', function () {
                testing_1.it('true is true', function () {
                    expect(true).toEqual(true);
                });
                testing_1.it('null is not the same thing as undefined', function () {
                    expect(null).not.toEqual(undefined);
                });
            });
        }
    }
});
//# sourceMappingURL=simple.spec.js.map