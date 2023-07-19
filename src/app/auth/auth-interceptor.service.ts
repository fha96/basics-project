import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string = null;
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      // take will inform user observable to get the response of user observable one time, and unsubscribed of this observable by it self
      take(1),
      // exhaustedMap Automaticaly replace the previous observable -user- with the next one -http-
      exhaustMap((user) => {
        if(!user){
            return next.handle(req);
        }
        const modefiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modefiedReq);
      })
    );
  }
}
