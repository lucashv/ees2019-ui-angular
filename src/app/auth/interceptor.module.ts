import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../utils/AppSettings';
import { Injectable, NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthGuard
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            headers: req.headers.set(AppSettings.authorizationHeader, this.auth.getLoginToken()),
        });
        return next.handle(dupReq);
    }
}

@NgModule({
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpRequestInterceptor,
        multi: true
    }]
})
export class InterceptorModule { }
