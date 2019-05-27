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
  public threads;
  public value = "";

  constructor(private route: ActivatedRoute,
  			private tService: TiketService) { }

  ngOnInit() {
  	let nomor = parseInt(this.route.snapshot.paramMap.get('nomorTiket'));
  	this.nomorTiket = nomor;
  	// this.detilTiket = this.tService.getTiketDetil(this.nomorTiket);
    this.detilTiket = this.tService.getTiket()[0];
    this.threads=this.detilTiket.thread_entries;
  }

  postClick(){
    if(!(this.value==="")){
    // if(empty(this.value)){
    let date = new Date();
    let create = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    let newThread = {model:{
                            "poster":this.detilTiket.user_name,
                            "created": create, 
                            "body": this.value
                      }}
    this.threads.push(newThread);
    let dataa={
      "ticketNumber":this.nomorTiket,
      "response":this.value
    }
    this.tService.pushTiket(dataa);
    this.value="";
    }
  }

}
