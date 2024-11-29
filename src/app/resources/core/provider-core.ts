import { inject } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';


export abstract class HttpProvider {

  protected http = inject(HttpClient);

  constructor(
    private readonly route: string = ''
  ) {}


  protected get<T>(sub_route: string = '', params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(environment.microservices[this.route] + this.route + sub_route, { params });
  }

  protected post<T>(sub_route: string = '', body: any = {}): Observable<T> {
    return this.http.post<T>(environment.microservices[this.route] + this.route + sub_route, body);
  }

  protected postHeader<T>(sub_route: string = '', body: any = {}, headers: any): Observable<T> {
    console.log("route", environment.microservices[this.route] + this.route + sub_route)
    return this.http.post<T>(environment.microservices[this.route] + this.route + sub_route, body, { headers : {
        'Content-Type': 'application/json',
        ...headers,
      }});
  }

  protected put<T>(sub_route: string = '', body: any = {}): Observable<T> {
    return this.http.put<T>(environment.microservices[this.route] + this.route + sub_route, body);
  }

  protected delete<T>(sub_route: string = '', params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.delete<T>(environment.microservices[this.route] + this.route + sub_route, { params });
  }

  protected patch<T>(sub_route: string = '', body: any = {}): Observable<T> {
    return this.http.patch<T>(environment.microservices[this.route] + this.route + sub_route, body);
  }

  protected download<T>(sub_route: string = '', body: any = {}): Observable<HttpEvent<T>> {
    return this.http.post<T>(environment.microservices[this.route] + this.route + sub_route, body, {
      reportProgress: true,
      observe: 'events',
    });
  }




}
