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

  constructor(private tService : TiketService,
              private router : Router,
              private route: ActivatedRoute) {}
  // constructor() { }

  ngOnInit() {
    // this.tikets = this.tService.getTiketInfo();
    this.tService.getTiketInfo().subscribe(data=> this.tikets=data.tickets);
  }

  onSelect(tiket) {
    this.router.navigate([tiket.ticket_number],{relativeTo: this.route});
    // this.tService.getTiketServer().subscribe(data => console.log(data));
    this.tService.setTiket([tiket])
  }

}
