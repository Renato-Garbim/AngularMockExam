import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../Entidades/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  private heroesUrl = 'https://localhost:5001/api/hero';  // URL para web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl, this.httpOptions).pipe(     
      
      // caso falhe a comunicação com a api
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );

  }

  addHero(hero: Hero): Observable<Hero> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
     
      catchError(this.handleError<Hero>('addHero'))

    );
  }

  excluirHeroi(hero: Hero | number): Observable<Hero> {
    
    const id = typeof hero === 'number' ? hero : hero.Id;

    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(     
      
      // caso falhe a comunicação com a api
      catchError(this.handleError<Hero>('deleteHero'))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      
      console.log('${operation} failed: ${error.message}')
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}
