import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public simulasi=false;
  public userLogin={"namauser":"admin","username":"admin","useremail":"admin@halosis.com","status":"client"};
  public respon;
  public err;
  public loginDataSimulasi = {"username":"admin", "password":"admin"};
  public loginData = {"useremail":"syafiq@halosis.com", "password":"syafiq"};

  constructor(private auth:AuthService, 
              private router: Router) { }

  ngOnInit() {
    this.simulasi = this.auth.getSimulasi();
  }

  async submit(){
    if (this.simulasi){
  	this.auth.getUserDetailSimulasi(this.loginDataSimulasi)  
    .subscribe(data=>{
      this.respon = data;
      if (data.success){
        console.log("masuk");
        this.auth.setLoggedStatus(true);
        this.router.navigate(['/home']);
      } else { console.log("gak bisa masuk")}
    }, error => {console.log(error," gak dapat hasil dari server")});
  }else{
    this.auth.getUserDetail(this.loginData)  
    .subscribe(data=>{
      this.respon = data;
      if (data.status_code){
        this.userLogin.useremail = this.loginData.useremail;
        this.userLogin.namauser = data.namauser;
        this.userLogin.username = data.username;
        this.userLogin.status = data.status;
        this.auth.setLoggedStatus(this.userLogin);
        this.router.navigate(['/home']);
      } else { console.log("gak bisa masuk")}
    }, error => {console.log(error," gak dapat hasil dari server")});
  }
  }


}
