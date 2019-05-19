import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

	public chats = [
	{"nomor":"9999999", "status":"dibuka","last":"kamu dinmana ?", "tanggal":"29/03/2019"},
	{"nomor":"8594043", "status":"dibuka","last":"dengan siapa ?", "tanggal":"29/03/2019"},
	{"nomor":"9573942", "status":"dibuka","last":"semalam berbuat apa ?", "tanggal":"29/03/2019"}
	]

  constructor() { }

  getChatInfo(){
  	return this.chats;
  }
}
