import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public katPers = ["option", "layanan", "permintaan"];
	public topBans = ["option1", "option2", "option3"];
	public hasils = [
	{"judul":"Hasil 1", "penyebab":"Kuota email dari si pengirim email telah penuh. Solusi 1: 1. Cek kuota dari si pengirim email, dengan cara mengarahkan kursor ke 'nama Anda' disebelah pojok kanan atas"},
	{"judul":"Hasil 2", "penyebab":"Kuota email dari si pengirim email telah penuh. Solusi 1: 1. Cek kuota dari "}
	];

  constructor() { }

  ngOnInit() {
  }

}
