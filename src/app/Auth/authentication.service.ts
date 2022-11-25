import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Registro } from './Model/registro';
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
    
    return this.httpClient.post<Token>(url, user).pipe(

        tap((token) => this.doLoginUser(usuarioLogado, token) ),

        map( () => true),

        catchError(error => {

          alert(error.error);

          return of(false);

        }));

  }

  register(registro: {email: string, password: string, confirmPassword: string}): Observable<boolean> {

    const usuarioLogado =  new Usuario(registro.email);
    const url = this.api + '/registrar';
    
    return this.httpClient.post<any>(url, registro).pipe(

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
    
    console.log('do loginUser token: ' + tokens);

    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.storeTokens(tokens);

  }

  private storeTokens(tokens: Token) {

    console.log('storeTokens: ' + tokens);

    if (tokens !== undefined) {

      localStorage.setItem(this.JWT_TOKEN, tokens.jwt);

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

      this.storeJwtToken(tokens.jwt);

    }));
  }


  ValidarExisteToken() {

    let token = this.getJwtToken();

    if(token !== null) return true;

    return false;

  }

  getJwtToken()  {

    const token = localStorage.getItem(this.JWT_TOKEN);

    if(token !== null) return token;

    return "";
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

}
