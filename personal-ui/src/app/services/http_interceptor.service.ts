import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const isLogged = !!token;
    
        if(isLogged){
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 
                Accept: 'application/json'},
            });
        }
        return next.handle(req);
    }
}