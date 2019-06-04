import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TiketService} from '../tiket.service';
import { AuthService} from '../auth.service';
import { Observer } from 'rxjs';
import {saveAs as importedSaveAs} from "file-saver";



@Component({
  selector: 'app-tiket-detil',
  templateUrl: './tiket-detil.component.html',
  styleUrls: ['./tiket-detil.component.css']
})
export class TiketDetilComponent implements OnInit {

	public nomorTiket;
	public detilTiket;
  public dataUser;
  public threads;
  public value = "";
  // public selectedFile:File=null;
  public selectedFile;
  public attachmentContent;
  public atta = 1;
  public selectedStatus=1;
  public selectedRespon;

  public isStaff=false;
  public persiapanTiket;

  public file;

  constructor(private route: ActivatedRoute,
  			private tService: TiketService,
        private auth: AuthService) { }

  ngOnInit() {
  	let nomor = parseInt(this.route.snapshot.paramMap.get('nomorTiket'));
  	this.nomorTiket = nomor;
  	// this.detilTiket = this.tService.getTiketDetil(this.nomorTiket);
    this.detilTiket = this.tService.getTiket()[0];
    this.dataUser=this.auth.getDataUser();
    this.threads=this.detilTiket.thread_entries;
    // console.log(this.detilTiket);
    // console.log(this.threads);

    if(this.isStaff=this.tService.getIsStaff()){
      this.persiapanTiket = this.tService.getPersiapanTiket();
    }
  }

  postClick(){
    if(!(this.value==="")){
    // if(empty(this.value)){
    let date = new Date();
    let create = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    let newThread = {model:{
                            "poster":this.dataUser.namauser,
                            "created": create, 
                            "body": this.value
                      },
                      annotations:{
                          "has_attachments":0
                      }}
    let attach = {};
    if(this.selectedFile){
      attach[this.selectedFile.name]=this.attachmentContent;   
      let anno = {"has_attachments" : 1, "name":this.selectedFile.name, "size":this.selectedFile.size, "url":"#"}
      newThread['annotations']= anno;
    }

    let dataa={
      "ticketNumber":this.nomorTiket,
      "response":this.value,
      "attachments":attach,
      "reply_status_id": this.selectedStatus
    }
    // console.log(dataa);
    this.tService.pushTiket(dataa);
    this.threads.push(newThread);
    this.value="";
    this.selectedFile = null;
    this.attachmentContent = null;
    this.selectedStatus=1;
    this.selectedRespon=null;
    }
  }

  async fileSelected(event){
    this.selectedFile=event.target.files[0];
    if(this.selectedFile){

    var promise = this.getBase64(this.selectedFile);
    var my_pdf_file_as_base64 = await promise;
    this.attachmentContent = my_pdf_file_as_base64;
    // console.log(this.selectedFile.name);
  }
  }

  getBase64(file) {
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() { resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

  scroll(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  download(url,nama){
    let newUrl = "api/osTicket-d/api/http.php/file?"+url.substring(25);
    this.tService.getFile(newUrl).subscribe(blob=>{
      // this.downloadFile(data,tipe);
      importedSaveAs(blob, nama);
    }, error => {
      console.log(error);
    });
    console.log(this.file);
  }

  downloadFile(data,tipe) {
  const blob = new Blob([data], { type: data.type });
  const fileBlob = new File([blob], "haha.txt");
  const url= window.URL.createObjectURL(blob);
  window.open(url);
}

  responSelected(even){
    if(!(even.value==null) &&!(even.value==="original") && !(even.value==="lastmessage") ){
    let lese = this.persiapanTiket.responses.filter(d=>d.id===even.value);
    this.value = lese[0].response;
    if(lese[0].files.length){
      let url = lese[0].files[0].download_url;
      let newUrl = "api/osTicket-d/api/http.php/file?"+url.substring(25);
      this.tService.getFile(newUrl).subscribe(async blob=>{
        let da = this.getBase64(blob);
        var my_pdf_file_as_base64 = await da;
        // console.log(blob);
        // console.log (my_pdf_file_as_base64);
        this.attachmentContent = my_pdf_file_as_base64;
        this.selectedFile= {"name":lese[0].files[0].name, "size":lese[0].files[0].size} ;
        // console.log(this.selectedFile);
        // console.log(this.selectedFile.size);
      })
    }
    };

    if(even.value==="original"){
      this.value = this.threads[0].model.body;
    }

    if(even.value==="lastmessage"){
      this.value = this.threads[this.threads.length -1].model.body;
    }

  }

}
