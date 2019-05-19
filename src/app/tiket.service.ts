import { Injectable } from '@angular/core';

@Injectable(
{providedIn: 'root'}
)
export class TiketService {

	public tiketDetil = [ //paramater tiket number 849510
	{ "ticket": { "ticket_number": "849510", 
				"subject": "issue subject", //judul tiketnya
				"ticket_status": "Open", //status tiket
				"statusId": 1, 
				"priority": "Normal", 
				"department": "Sales", //dari bagian apa
				"create_timestamp": "2018-06-26 17:36:18", //waktu tiket dibuat
				"user_name": "rrrrrrrrr", //user yang buat
				"user_email": { "address": "xxxxxx@xxxxx.com" }, //email user
				"user_phone": "0159347644648", //nomor telfon user
				"source": "API", 
				"due_timestamp": "2018-06-28 17:36:18", //waktu tiket nya berlaku
				"close_timestamp": null, //waktu tiket ditutup
				"help_topic": "Issue topic", //topik tiket
				"last_message_timestamp": "2018-06-26 17:36:19", //waktu terakhir
				"last_response_timestamp": null, //waktu terkhir memberikan respon
				"thread_entries": [ { "model": //adalah timeline dari tiket apa yang di lakukan
										{ "id": 16, 
										"pid": 0, 
										"thread_id": 14, 
										"staff_id": null, 
										"user_id": 6, 
										"type": "M", //tipenya pesan
										"poster": "retail shoubra", //yang mempost tiket
										"editor": null, //editor dari thread
										"source": "API", 
										"title": "issue subject", //judul theread
										"body": " issue message ---------------", //pesan theread 
										"message": //objek pesan, text, tipe txet, gambar dll
											{ "body": " issue message ---------------", 
											"type": "text", 
											"stripped_images": [], 
											"embedded_images": [], 
											"options": { "strip-embedded": true } }, 
										"format": "text", 
										"created": "2018-06-26 17:36:19", //waktu thread dibuat
										"updated": "0000-00-00 00:00:00", 
										"staff_name": null, //detil staff
										"user_name": //detil user client
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

  	public tiketDetil1= 
  	{"ticket":{"ticket_number":"736639",
			"subject":"Test API message",
			"ticket_status":"Open",
			"statusId":1,
			"priority":"Normal",
			"department":"Support",
			"create_timestamp":"2019-04-29 20:35:07",
			"user_name":"John Doe",
			"user_email":{"address":"john@gmail.com"},
			"user_phone":"(123) 456-7890",
			"source":"API",
			"due_timestamp":"2019-05-01 20:35:07",
			"close_timestamp":null,
			"help_topic":"General Inquiry",
			"last_message_timestamp":"2019-04-29 20:35:08",
			"last_response_timestamp":"2019-05-20 05:41:59",
			"assigned_to":[{"format":"full",
							"parts":{"first":"syafiq","last":"hidayat"},
									"name":"syafiq hidayat"}],
			"thread_entries":[
							{"model":{"id":7,
									"pid":0,
									"thread_id":6,
									"staff_id":null,
									"user_id":4,
									"type":"M",
									"poster":"John Doe",
									"editor":null,
									"source":"API",
									"title":"Test API message",
									"body":"This is a test of the osTicket API",
									"message":{"body":"This is a test of the osTicket API",
												"type":"text",
												"stripped_images":[],
												"embedded_images":[],
												"options":{"strip-embedded":true}},
									"format":"text",
									"created":"2019-04-29 20:35:07",
									"updated":"0000-00-00 00:00:00",
									"staff_name":null,
									"user_name":{"format":"original",
												"parts":{"salutation":"",
														"first":"John",
														"suffix":"",
														"last":"Doe",
														"middle":""},
														"name":"John Doe"}
									},
							"annotations":{"has_attachments":0}},
							{"model":{"id":21,
									"pid":0,
									"thread_id":6,
									"staff_id":1,
									"user_id":null,
									"type":"R",
									"poster":"syafiq hidayat",
									"editor":null,
									"source":"",
									"title":null,
									"body":"ini adalah pesan yang dikirim oleh syafiq",
									"message":{"body":"ini adalah pesan yang dikirim oleh syafiq",
											"type":"html",
											"stripped_images":[],
											"embedded_images":[],
											"options":{"strip-embedded":false,"balanced":true}},
									"format":"html",
									"created":"2019-05-20 05:41:59",
									"updated":"0000-00-00 00:00:00",
									"staff_name":{"format":"full",
												"parts":{"first":"syafiq",
														"last":"hidayat"},
												"name":"syafiq hidayat"},
									"user_name":null},
								"annotations":{"has_attachments":1}}
							]},
			"status_code":"0",
			"status_msg":"ticket details retrieved successfully"}

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

  	public tiketByUser = 
  	{"tickets":[
	{"ticket_number":"747869",
	"subject":"Test API message",
	"ticket_status":"Open",
	"statusId":1,
	"priority":"Normal",
	"department":"Support",
	"create_timestamp":"2019-04-29 20:34:11",
	"user_name":"John Doe",
	"user_email":{"address":"john@gmail.com"},
	"user_phone":"(123) 456-7890",
	"source":"API",
	"due_timestamp":"2019-05-01 20:34:11",
	"close_timestamp":null,
	"help_topic":"General Inquiry",
	"last_message_timestamp":"2019-04-29 20:34:12",
	"last_response_timestamp":null,
	"assigned_to":[
		{"format":"full",
		"parts":{"first":"wahyu",
			"last":"hidayat"},
		"name":"wahyu hidayat"}],
	"thread_entries":[
		{"model":
			{"id":5,
			"pid":0,
			"thread_id":5,
			"staff_id":null,
			"user_id":null,
			"type":"N",
			"poster":"SYSTEM",
			"editor":null,
			"source":"",
			"title":"File Import Error",
			"body":"file.txt: Unable to save file",
			"message":
				{"body":"file.txt: Unable to save file",
				"type":"text",
				"stripped_images":[],
				"embedded_images":[],
				"options":
					{"strip-embedded":true}},
				"format":"text",
				"created":"2019-04-29 20:34:11",
				"updated":"0000-00-00 00:00:00",
				"staff_name":null,"user_name":null},
		"annotations":{"has_attachments":0}},
		{"model":
			{"id":6,
			"pid":0,
			"thread_id":5,
			"staff_id":null,
			"user_id":4,
			"type":"M",
			"poster":"John Doe",
			"editor":null,
			"source":"API",
			"title":"Test API message",
			"body":"This is a test of the osTicket API",
			"message":
				{"body":"This is a test of the osTicket API",
				"type":"text",
				"stripped_images":[],
				"embedded_images":[],
				"options":{"strip-embedded":true}},
			"format":"text",
			"created":"2019-04-29 20:34:11",
			"updated":"0000-00-00 00:00:00",
			"staff_name":null,
			"user_name":
				{"format":"original",
				"parts":
					{"salutation":"",
					"first":"John",
					"suffix":"",
					"last":"Doe",
					"middle":""},
				"name":"John Doe"}},
		"annotations":{"has_attachments":0}},
		{"model":
			{"id":19,
			"pid":0,
			"thread_id":5,
			"staff_id":1,
			"user_id":null,
			"type":"N",
			"poster":"syafiq hidayat",
			"editor":null,
			"source":"",
			"title":"Ticket Assigned to wahyu hidayat",
			"body":"tiket ini kami percayakan kepada mu",
			"message":
				{"body":"tiket ini kami percayakan kepada mu",
				"type":"html",
				"stripped_images":[],
				"embedded_images":[],
				"options":
					{"strip-embedded":false,
					"balanced":true}},
				"format":"html",
				"created":"2019-05-01 02:15:01",
				"updated":"0000-00-00 00:00:00",
				"staff_name":
					{"format":"full",
					"parts":
						{"first":"syafiq",
						"last":"hidayat"},
					"name":"syafiq hidayat"},
				"user_name":null},
		"annotations":{"has_attachments":0}}
		]},
	{"ticket_number":"736639",
	"subject":"Test API message",
	"ticket_status":"Open",
	"statusId":1,
	"priority":"Normal",
	"department":"Support",
	"create_timestamp":"2019-04-29 20:35:07",
	"user_name":"John Doe",
	"user_email":{"address":"john@gmail.com"},
	"user_phone":"(123) 456-7890",
	"source":"API",
	"due_timestamp":"2019-05-01 20:35:07",
	"close_timestamp":null,
	"help_topic":"General Inquiry",
	"last_message_timestamp":"2019-04-29 20:35:08",
	"last_response_timestamp":"2019-05-20 05:41:59",
	"assigned_to":[
		{"format":"full",
		"parts":
			{"first":"syafiq",
			"last":"hidayat"},
		"name":"syafiq hidayat"}],
	"thread_entries":[
		{"model":
			{"id":7,
			"pid":0,
			"thread_id":6,
			"staff_id":null,
			"user_id":4,
			"type":"M",
			"poster":"John Doe",
			"editor":null,
			"source":"API",
			"title":"Test API message",
			"body":"This is a test of the osTicket API",
			"message":
				{"body":"This is a test of the osTicket API",
				"type":"text",
				"stripped_images":[],
				"embedded_images":[],
				"options":
					{"strip-embedded":true}},
			"format":"text",
			"created":"2019-04-29 20:35:07",
			"updated":"0000-00-00 00:00:00",
			"staff_name":null,
			"user_name":
				{"format":"original",
				"parts":
					{"salutation":"",
					"first":"John",
					"suffix":"",
					"last":"Doe",
					"middle":""},
				"name":"John Doe"}},
			"annotations":
				{"has_attachments":0}},
		{"model":
			{"id":21,
			"pid":0,
			"thread_id":6,
			"staff_id":1,
			"user_id":null,
			"type":"R",
			"poster":"syafiq hidayat",
			"editor":null,
			"source":"",
			"title":null,
			"body":"ini adalah pesan yang dikirim oleh syafiq",
			"message":
				{"body":"ini adalah pesan yang dikirim oleh syafiq",
				"type":"html",
				"stripped_images":[],
				"embedded_images":[],
				"options":{"strip-embedded":false,"balanced":true}},
			"format":"html",
			"created":"2019-05-20 05:41:59",
			"updated":"0000-00-00 00:00:00",
			"staff_name":
				{"format":"full",
				"parts":
					{"first":"syafiq",
					"last":"hidayat"},
				"name":"syafiq hidayat"},
			"user_name":null},
		"annotations":
			{"has_attachments":1}}]},
	{"ticket_number":"426384",
	"subject":"Test API message",
	"ticket_status":"Open",
	"statusId":1,
	"priority":"Normal",
	"department":"Support",
	"create_timestamp":"2019-05-20 04:38:11",
	"user_name":"John Doe",
	"user_email":{"address":"john@gmail.com"},
	"user_phone":"(123) 456-7890",
	"source":"API",
	"due_timestamp":"2019-05-22 04:38:11",
	"close_timestamp":null,
	"help_topic":"General Inquiry",
	"last_message_timestamp":"2019-05-20 04:38:12",
	"last_response_timestamp":null,
	"assigned_to":[],
	"thread_entries":[
		{"model":
			{"id":20,
			"pid":0,
			"thread_id":7,
			"staff_id":null,
			"user_id":4,
			"type":"M",
			"poster":"John Doe",
			"editor":null,
			"source":"API",
			"title":"Test API message",
			"body":"This is a test of the osTicket API",
			"message":
				{"body":"This is a test of the osTicket API",
				"type":"text",
				"stripped_images":[],
				"embedded_images":[],
				"options":
					{"strip-embedded":true}},
				"format":"text",
				"created":"2019-05-20 04:38:12",
				"updated":"0000-00-00 00:00:00",
				"staff_name":null,
				"user_name"
					:{"format":"original",
					"parts":
						{"salutation":"",
						"first":"John",
						"suffix":"",
						"last":"Doe",
						"middle":""},
					"name":"John Doe"}},
			"annotations":
				{"has_attachments":0}}]}],
		"status_code":"0","status_msg":"success"}


  constructor() { }

  getTiketInfo(){
		return	this.tiketByUser.tickets;
  }

  getTiketDetil(){
  	var tiketNumber = this.tiketDetil[0].ticket.ticket_number ;
	var tiketStatus = this.tiketDetil[0].ticket.ticket_status ;
	var tiketTanggal = this.tiketDetil	[0].ticket.last_message_timestamp;
	var subjek = this.tiketDetil[0].ticket.subject;

	var aa = {"nomor": tiketNumber, "status": tiketStatus, "subjek": subjek,"tanggal": tiketTanggal};

	// return aa;
	return this.tiketDetil1[0].ticket;
  }
}
