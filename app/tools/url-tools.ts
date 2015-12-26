
export function toTemplateUrl(componentFileName: string) {
    
    return componentFileName.replace(/\.ts$/, ".html");
    
}

export function toAssetUrl(componentFileName: string, fileName: string) {

    var parts = componentFileName.split(/\\|\//);
    parts[parts.length-1] = fileName;
    var result = parts.join("/");
    return result;

}