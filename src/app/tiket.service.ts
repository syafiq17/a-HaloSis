import { Injectable } from '@angular/core';

@Injectable(
{providedIn: 'root'}
)
export class TiketService {

	public tiketDetil = [ //paramater tiket number 849510
	{ "ticket": { "ticket_number": "849510", 
				"subject": "issue subject", 
				"ticket_status": "Open", 
				"statusId": 1, 
				"priority": "Normal", 
				"department": "Sales", 
				"create_timestamp": "2018-06-26 17:36:18", 
				"user_name": "rrrrrrrrr", 
				"user_email": { "address": "xxxxxx@xxxxx.com" }, 
				"user_phone": "0159347644648", 
				"source": "API", 
				"due_timestamp": "2018-06-28 17:36:18", 
				"close_timestamp": null, 
				"help_topic": "Issue topic", 
				"last_message_timestamp": "2018-06-26 17:36:19", 
				"last_response_timestamp": null, 
				"thread_entries": [ { "model": 
										{ "id": 16, 
										"pid": 0, 
										"thread_id": 14, 
										"staff_id": null, 
										"user_id": 6, 
										"type": "M", 
										"poster": "retail shoubra", 
										"editor": null, 
										"source": "API", 
										"title": "issue subject", 
										"body": " issue message ---------------", 
										"message": 
											{ "body": " issue message ---------------", 
											"type": "text", 
											"stripped_images": [], 
											"embedded_images": [], 
											"options": { "strip-embedded": true } }, 
										"format": "text", 
										"created": "2018-06-26 17:36:19", 
										"updated": "0000-00-00 00:00:00", 
										"staff_name": null, 
										"user_name": 
											{ "format": "original", 
											"parts": 
												{ "salutation": "", 
												"first": "xxxx", 
												"suffix": "", 
												"last": "xxxx", 
												"middle": "" }, 
											"name": "xxxxxx" } 
										}, 
									"annotations": { "has_attachments": 0 } 
								} 
								] 
				}, 
		"status_code": "0", 
		"status_msg": "ticket details retrieved successfully" }
  	];

  	public tiketClient = { "tickets": [ 
  							{ "ticket_number": "326386", 
  							"subject": "issue 1", 
  							"status": "Open"} , 
  							{ "ticket_number": "326387", 
  							"subject": " issue 2", 
  							"status": "Open"} ], 
  						"status_code": "0", 
  						"status_msg": "success" };

  	public tiketStaff = { "tickets": [ 
  							{ "ticket_number": "326386", 
  							"subject": "issue 1", 
  							"status": "Open"} , 
  							{ "ticket_number": "326387", 
  							"subject": " issue 2", 
  							"status": "Open"} ], 
  						"status_code": "0",
  						"status_msg": "success" }

  	public tiketPushInfo = { "status_code": "0", 
  							"status_msg": "success" }


  constructor() { }

  getTiketInfo(){
		return	this.tiketClient.tickets;
  }

  getTiketDetil(){
  	var tiketNumber = this.tiketDetil[0].ticket.ticket_number ;
	var tiketStatus = this.tiketDetil[0].ticket.ticket_status ;
	var tiketTanggal = this.tiketDetil	[0].ticket.last_message_timestamp;
	var subjek = this.tiketDetil[0].ticket.subject;

	var aa = {"nomor": tiketNumber, "status": tiketStatus, "subjek": subjek,"tanggal": tiketTanggal};

	// return aa;
	return this.tiketDetil[0].ticket;
  }
}
