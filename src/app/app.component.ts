import { Component } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ready = "yes";
  public subs =["option 1"," option 2","option 3","option 4"];
  public cards1 = [
    ["nama","haciko","jenis","anjing"],
    ["nama","bleky","jenis","anjing"],
    ["nama","kitty","jenis","kucing"],
    ["nama","fixy","jenis","kucing"],
  ];
  public cards = [
  	{"nama":"haciko", "jenis":"anjing"},
  	{"nama":"bleky", "jenis":"anjing"},
  	{"nama":"kitty", "jenis":"kucing"},
  	{"nama":"fixy", "jenis":"kucing"},
  ];

  
}
