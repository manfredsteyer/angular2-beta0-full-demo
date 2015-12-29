import {Injectable} from 'angular2/core';

@Injectable()
export class Configuration { 
    apiUrl = "https://steyer-api.azurewebsites.net";
    loginUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize";
    issuerUri = "https://steyer-identity-server.azurewebsites.net/identity";
};
