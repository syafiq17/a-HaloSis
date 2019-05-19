import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-chat-detil',
  templateUrl: './chat-detil.component.html',
  styleUrls: ['./chat-detil.component.css']
})
export class ChatDetilComponent implements OnInit {

	public nomor;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	let no = parseInt(this.route.snapshot.paramMap.get('nomorChat'));
  	console.log("no :",no);
  	this.nomor=no;
  }

}
