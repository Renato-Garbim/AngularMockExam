import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { AuthenticationService } from '../Auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  private IsRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthenticationService) { }


  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    if (this.authService.ValidarExisteToken()) {  
      
      console.log('Existe o Token e a request foi interceptada');

      request = this.addToken(request, this.authService.getJwtToken());

    }

    return next.handle(request).pipe(

      catchError(error => {
        
        // implementar tratamento do erro 401.

        return throwError(() => error);

      }));              
  }

  private addToken(request: HttpRequest<any>, token: string) {

    console.log('O token do parametro é' + token);

    return request.clone({
      setHeaders: {

        Authorization: `Bearer ${token}`

      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.IsRefreshing) {
      this.IsRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        // switchMap((token: any) => {
        //   this.IsRefreshing = false;
        //   this.refreshTokenSubject.next(token.jwt);
        //   return next.handle(this.addToken(request, token.jwt));
        // })
        );

    } else {
      return this.refreshTokenSubject.pipe(
        // filter(token => token != null),
        // take(1),
        // switchMap(jwt => {
        //   return next.handle(this.addToken(request, jwt));
        // })
        );
    }
  }
}
