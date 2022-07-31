import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../Entidades/Hero';


@Injectable({
  providedIn: 'root'
})
export class HeroFormService {

  constructor(httpService:HttpClient) { }

  formData!: Hero;


}
