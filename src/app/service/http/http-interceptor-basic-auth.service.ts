import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    let username = 'in28Minutes'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':' +password )
    request = request.clone(
      {
        setHeaders:
          {
            Authorization : basicAuthHeaderString
          }
        
      }
    )
    return next.handle(request);

  }
}
