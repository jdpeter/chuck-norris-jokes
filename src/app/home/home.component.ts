import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from "../chuck-norris.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chuckNorrisJoke:String="";
  constructor(private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit() {
    this.chuckNorrisService.getRandomJoke()
      .subscribe((data:String) => this.chuckNorrisJoke=data['value']['joke']);
  }

  newJoke(){
    this.chuckNorrisService.getRandomJoke()
      .subscribe((data:String) => this.chuckNorrisJoke=data['value']['joke']);
  }
}
