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
      { name: "Apophis", url: "", desc: "xD" },
      { name: "Project Urban", url: "", desc: "xD" },
    ];
  }

  ngOnInit(): void {
  }

}
