import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class GetPokeService {

  constructor(private http: Http) { }

  getPoke(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  }
}
