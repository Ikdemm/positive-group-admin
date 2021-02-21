import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes("forgot") || req.url.includes("login")) {
            return next.handle(req);
        }
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.localStorageService.get("accessToken")}`,
            },
        });

        return next.handle(req);
    }
}