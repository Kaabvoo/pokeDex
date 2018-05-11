import { Component, Input } from '@angular/core';
import { GetPokeService } from '../services/get-poke.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serv: GetPokeService){}
  
  repo: any

  ngOnInit(){
    this.serv.getPoke("1").subscribe(ret => this.repo = ret.json())
  }


  updat(val){
    this.serv.getPoke(val.target.value).subscribe(ret => this.repo = ret.json());
    console.log(val.target.value);
  }
}
