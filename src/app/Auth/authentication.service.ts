import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Token } from './Model/token';
import { Usuario } from './Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private httpClient: HttpClient) {}

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';  

  private api = 'https://localhost:5001/api/auth';


   login(user: {email: string, password: string}): Observable<boolean> {

    const usuarioLogado =  new Usuario(user.email);
    const url = this.api + '/login';
    
    return this.httpClient.post<any>(url, user).pipe(

        tap(token => this.doLoginUser(usuarioLogado, token) ),

        map( () => true),

        catchError(error => {

          alert(error.error);

          return of(false);

        }));

  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  private doLoginUser(usuario: Usuario, tokens: Token) {

    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.storeTokens(tokens);

  }

  private storeTokens(tokens: Token) {

    if (tokens.Jwt !== undefined) {

      localStorage.setItem(this.JWT_TOKEN, tokens.Jwt);

    } else {

      console.error('Token não definido');

    }
    // localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);

  }

  refreshToken() {

    const url = this.api + '/Refresh';

    return this.httpClient.post<any>(url, {

      refreshToken: this.getRefreshToken()

    }).pipe(tap((tokens: Token) => {

      this.storeJwtToken(tokens.Jwt);

    }));
  }


  ValidarExisteToken() {

    let token = this.getJwtToken();

    if(token !== null) return true;

    return false;

  }

  getJwtToken()  {

    var token = localStorage.getItem(this.JWT_TOKEN);

    if(token !== null) return token[0];

    return "";
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

}
