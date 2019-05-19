import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TiketService} from '../tiket.service';



@Component({
  selector: 'app-tiket-detil',
  templateUrl: './tiket-detil.component.html',
  styleUrls: ['./tiket-detil.component.css']
})
export class TiketDetilComponent implements OnInit {

	public nomorTiket;
	public detilTiket;

  constructor(private route: ActivatedRoute,
  			private tService: TiketService) { }

  ngOnInit() {
  	let nomor = parseInt(this.route.snapshot.paramMap.get('nomorTiket'));
  	this.nomorTiket = nomor;
  	this.detilTiket = this.tService.getTiketDetil();
  }

}
