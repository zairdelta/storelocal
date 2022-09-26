import { HttpHandler, HttpRequest,HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  

      let request = req;
  
    
        request = req.clone({
          setHeaders: {
            'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'my-store33.p.rapidapi.com'
          }
        });
      
  
      return next.handle(request);
    }}

