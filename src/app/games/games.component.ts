import { Component, OnInit } from '@angular/core';
import { Game } from '../classes';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {

  games: Array<Game>;

  constructor() {
    this.games = [
      { name: "Apophis", url: "https://apophis.dev", desc: "Dark mystery set in a sinister world, where you have to risk your life to gain even the smallest piece to a vast puzzle." },
      { name: "Project Urban", url: "", desc: "New, not presented game" },
    ];
  }

  ngOnInit(): void {
  }

}
