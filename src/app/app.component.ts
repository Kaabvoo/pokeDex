import { Component, Input } from '@angular/core';
import { GetPokeService } from '../services/get-poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serv: GetPokeService){}
  
  repo: any

  ngOnInit(){
    this.serv.getPoke().subscribe(ret => this.repo = ret.json())
  }


  clic(){
    console.log("Hello");
  }
}
