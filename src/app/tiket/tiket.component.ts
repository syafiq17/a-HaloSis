import { Component, OnInit } from '@angular/core';
import { TiketService} from '../tiket.service';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.component.html',
  styleUrls: ['./tiket.component.css']
})
export class TiketComponent implements OnInit {

  public tikets = [];

	// public tikets = [
	// {"nomor":"#8392942", "status":"Dibuka", "tanggal":"27/05/2019"},
	// {"nomor":"#3904232", "status":"Dibuka", "tanggal":"23/05/2019"},
	// {"nomor":"#9475023", "status":"Ditutup", "tanggal":"26/05/2019"}
	// ];

  constructor(private tService : TiketService,
              private router : Router,
              private route: ActivatedRoute) {}
  // constructor() { }

  ngOnInit() {
    this.tikets = this.tService.getTiketInfo()
  }

  onSelect(tiket) {
    // this.router.navigate(['/tiket', tiket.ticket_number])
    this.router.navigate([tiket.ticket_number],{relativeTo: this.route});
  }

}
