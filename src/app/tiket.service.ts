import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { ITiket } from './tiket';
import { AuthService } from './auth.service';

interface pesan {
	message: string
};


@Injectable(
{providedIn: 'root'}
)
export class TiketService {

	public simulasi = false;
  private isStaff = false;

  private persiapanTiket;
	private dataUser;

	public tiket=[];

	public url1 = "/api/data_tiket.php";

	public dataReply = {
  		"ticketNumber"    : "606806",
			"msgId"           : "",
			"a"               : "reply",
			"emailreply"      : "0",
			"emailcollab"     : "1",
			"cannedResp"      : "0",
			"draft_id"        : "",
			"response"        : "ticket issue is resolved !",  //isi pesan yang dikirm
			"signature"       : "none",
			"reply_status_id" : "1",//status tiket
			"staffUserName"   : "wahyu",//staff yang mengatur
			"clientUserName"  : "",
			"ip_address"      : "::1",
      "attachments"      :null,
			"cannedattachments" : ""
		};

	private head2 = new HttpHeaders().set('X-API-Key','23A83643930D36EBFCFE90428CAA9E9A');

  constructor(private http: HttpClient, private auth : AuthService) { }

  getTiketInfo(){
  		this.dataUser = this.auth.getDataUser();
      this.simulasi = this.auth.getSimulasi();
  		if (this.simulasi) { 
  			return this.http.get<ITiket>('api/data_tiket.json');
  			// return this.http.get<ITiket>('api/osTicket-d/api/http.php/tickets/clientTickets?clientUserMail=john@gmail.com',{headers: this.head2});
  		}
  		else{
  		if (this.dataUser.status == "staff"){
        this.isStaff = true;
        this.setPersiapan();
  			return this.http.get<ITiket>('api/osTicket-d/api/http.php/tickets/staffTickets?staffUserName='+this.dataUser.username,{headers: this.head2})
  		}else if(this.dataUser.status == "client"){
  			return this.http.get<ITiket>('api/osTicket-d/api/http.php/tickets/clientTickets?clientUserMail='+this.dataUser.useremail,{headers: this.head2});
  		}
  		}
  }

  setTiket(tiket){
  	this.tiket = tiket;
  }

  getTiket(){
  	return this.tiket;
  }


  getTiketServer(){
  		return this.http.get<pesan>(this.url1)
  }

  pushTiket(dataa){

  		this.dataReply.ticketNumber=dataa.ticketNumber;
  		this.dataReply.response=dataa.response;
      this.dataReply.attachments = dataa.attachments;
      this.dataReply.reply_status_id = dataa.reply_status_id;

      // let cfile = {'dataa.name' : 'data:'+dataa.type+';base64,'+btoa("dhjks")};
  		if (this.dataUser.status == "staff"){
  			this.dataUser.clientUserName=null;
  			this.dataReply.staffUserName=this.dataUser.username;
  		}else if(this.dataUser.status == "client"){
  			this.dataUser.staffUserName=null;
  			this.dataReply.clientUserName=this.dataUser.useremail;
  		}
      console.log(this.dataReply);
  		this.http.post('api/osTicket-d/api/http.php/tickets/replyM.json',this.dataReply,{headers: this.head2})
  		.subscribe	(data=> console.log	(data));
  }

  getFile(url){
    return this.http.get(url,{responseType: 'blob' ,headers: this.head2})
  }

  setPersiapan(){
    this.http.get('api/osTicket-d/api/http.php/status?',{headers: this.head2}).subscribe(data=>{
      this.persiapanTiket = data;
    });
  }

  getIsStaff(){
    return this.isStaff;
  }

  getPersiapanTiket(){
    return this.persiapanTiket;
  }


}
