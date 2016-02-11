describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('http://127.0.0.1:8080'); 
    });

    it('should load page and read title', function() {

        var link = element(by.linkText("Buchen"));
        link.click();

        var vonFilter = element(by.name("von"));
        var nachFilter = element(by.name("nach"));
        var suchen = element(by.css("input[type=button]"));

        vonFilter.clear();
        nachFilter.clear();
       
        vonFilter.sendKeys("Graz");
        nachFilter.sendKeys("Ham");
        nachFilter.sendKeys("burg");
        
        suchen.click();
        
        browser.sleep(4000);
        
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'info.png');
        });
        
        var table = element(by.tagName("table"));
        var trs = table.all(by.tagName("tr"));
        
        var firstRow = trs.get(1);
        var tds = firstRow.all(by.tagName("td"));
        var firstTd_Id = tds.first();        

        expect(trs.count()).toBe(4);
        expect(firstTd_Id.getText()).toBe("1");
 
    });
    
    function writeScreenShot(data, filename) {
        
        var fs = require("fs");
        
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
});


