import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class GetPokeService {

  constructor(private http: Http) { }

  getPoke(i: string){
    var url: string = "https://pokeapi.co/api/v2/pokemon/" + i;
    //return this.http.get(url);
  }
}
