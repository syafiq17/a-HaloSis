import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ready = "yes";
  public cards = [
  	{"nama":"haciko", "jenis":"anjing"},
  	{"nama":"bleky", "jenis":"anjing"},
  	{"nama":"kitty", "jenis":"kucing"},
  	{"nama":"fixy", "jenis":"kucing"},
  ];
}
