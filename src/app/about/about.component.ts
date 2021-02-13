import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  team;

  constructor() { }

  ngOnInit(): void {
    this.team = [
      {"nick": "Jakub Głowacz", "work": "Project Manager, 3D Artist, CEO (Odpowiedzialny za zarządzanie całym zespołem, zajmowanie się marketingiem, tworzeniem modeli oraz jest jednym z członków zarządu)"},
      {"nick": "Krystian Pochopień", "work": "Technical Director, Level Designer, Programmer, CEO (Odpowiedzialny za integrowanie zasobów, projektowanie poziomów, tworzenie mechanik, jeden z członków zarządu)"},
      {"nick": "Piotr Kaniewski", "work": "Writer, Game Designer, Game Director, CEO (Odpowiedzialny za fabułę oraz dialogi w grze, jeden z członków zarządu)"},
      {"nick": "Konrad Tofil", "work": "Sound Designer, Game Designer, Art Director, CEO (Odpowiedzialny za tworzenie dźwięków, sprawuję pieczę nad oprawą graficzną całej gry, jeden z członków zarządu) "},
      {"nick": "Sebastian Wróblewski", "work": "Programmer, Web Developer (Odpowiedzialny za tworzenie mechanik oraz za strony internetowe)"},
      {"nick": "Patryk Jurecki", "work": "3D Artist, Game Tester (Odpowiedzialny za tworzenie modeli oraz testowanie gry)"},
      {"nick": "Karol Stolarczyk", "work": "Game Tester, Game Designer (Odpowiedzialny za testowanie gry oraz pomysłodawca)"},
      {"nick": "Nikola Wołodźko", "work": "3D Artist, Translator, Game Designer (Odpowiedzialna za tworzenie modeli, tłumaczenie tekstów, pomysłodawczyni)"},
      {"nick": "Mateusz Biłka", "work": "3D Artist (Odpowiedzialny za tworzenie modeli oraz ich teksturowanie)"},
      {"nick": "Bartek Bobowski", "work": "UI Designer, Game Designer (Odpowiedzialny za wygląd UI oraz za pomysły do gry)"},
      {"nick": "Hanna Kowalska", "work": "Concept Artist (Odpowiedzialna za wizualizowanie pomysłów Game Designerów)"}
    ];  
  }

}
