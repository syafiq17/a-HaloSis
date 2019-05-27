import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { IAuth } from './auth';
import { AuthGuard} from './auth.guard' ;

import { Observable } from 'rxjs';

interface statusLogin {
  namauser,
  username,
  session,
  status_code,
  status,
  status_msg
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public simulasi = false;
  private loggedStatus = false;

  private dataUser;

  public urlSim = "/api/auth.php";
  public url = "/api/osTicket-d/api/http.php/tickets/login.json";
  public urlIsLogin = "/api/cekAuth.php";

  private head = new HttpHeaders().set('X-API-Key','23A83643930D36EBFCFE90428CAA9E9A');

  constructor(private http: HttpClient, private authG: AuthGuard) { }

  getUserDetailSimulasi(loginData): Observable<IAuth>{
  	  return this.http.post<IAuth>(this.urlSim,loginData);
  }

  getUserDetail(loginData): Observable <statusLogin>{
    console.log(loginData);
      return this.http.post<statusLogin>(this.url, loginData,{headers: this.head});
  }

  setLoggerdStatus(data){
    this.dataUser = data;
    this.loggedStatus=true;
    this.authG.setLogin(true);
  }

  postUserDetail(username, password): Observable<IAuth>{
    return this.http.get<IAuth>(this.url);
  }

  isLoggedIn(): Observable<IAuth> {
    return this.http.get<IAuth>(this.urlIsLogin)
  }

  getSimulasi(){
    return this.simulasi;
  }

  getDataUser(){
    return this.dataUser;
  }

}
