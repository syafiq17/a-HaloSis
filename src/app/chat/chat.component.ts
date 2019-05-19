import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ChatService} from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chats = [];

  constructor(private router : Router,
              private route: ActivatedRoute,
              private cService: ChatService) { }

  ngOnInit() {
    this.chats = this.cService.getChatInfo()
  }

  onSelect(chat) {
    console.log("nomor chat :",chat.nomor);
    this.router.navigate([chat.nomor],{relativeTo: this.route});
  }


}
