System.register([], function(exports_1) {
    function toTemplateUrl(componentFileName) {
        return componentFileName.replace(/\.ts$/, ".html");
    }
    exports_1("toTemplateUrl", toTemplateUrl);
    function toAssetUrl(componentFileName, fileName) {
        var parts = componentFileName.split(/\\|\//);
        parts[parts.length - 1] = fileName;
        var result = parts.join("/");
        return result;
    }
    exports_1("toAssetUrl", toAssetUrl);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=url-tools.js.map