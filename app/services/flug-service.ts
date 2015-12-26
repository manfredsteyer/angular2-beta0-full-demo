import { Inject} from 'angular2/core';
import { BASE_URL } from '../registry';
import { Http, URLSearchParams, Headers } from 'angular2/http';

declare function fetch(url:string): any;

export class FlugService {
	
	private baseUrl: string;
	private http: Http;
	
	constructor(@Inject(BASE_URL) baseUrl: string, http: Http) {
		this.baseUrl = baseUrl;
		this.http = http;	
	}
	
	findById(id) {
		
		var url = this.baseUrl + "/flug";
		
		var params = new URLSearchParams();
		params.append('flugNummer', id);
		
		return this
				.http
				.get(url, { search: params})
				.map(r => r.json());
	}
	
	save(flug) {
		
		var url = this.baseUrl + "/flug";
		var headers = new Headers();
		headers.append('Content-Type', 'text/json');
		
		return this
				.http
				.post(url, JSON.stringify(flug), {headers:headers } );
	}
	
	find(von, nach) {
		
		/*
		var url = this.baseUrl + "/flug"
				+ "?abflugOrt=" 
				+ encodeURIComponent(von) 
				+ "&zielOrt=" 
				+ encodeURIComponent(nach);
	
		return fetch(url)
			      .then((r) => r.json());
		*/
		
		var url = this.baseUrl + "/flug";
		
		var params = new URLSearchParams();
		params.append('abflugOrt', von);
		params.append('zielOrt', nach);
		
		return this
				.http
				.get(url, { search: params})
				.map(r => r.json());
		
	}
	
} 