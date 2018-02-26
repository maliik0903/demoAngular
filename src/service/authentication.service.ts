import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from 'selenium-webdriver/opera';
import { HttpHeaders } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
  host="http://localhost:8082";
  private jwtToken = null
  private roles:Array<any>
  constructor(private http:HttpClient) { }
  login(user){
    return this.http.post(this.host+"/login", user ,{observe :'response'});
  }

saveToken(jwt:string){
 this.jwtToken=jwt
  localStorage.setItem('token',jwt)
  let jwtHelper = new JwtHelper();
  this.roles = jwtHelper.decodeToken(this.jwtToken).roles
}
getTasks(){
  if (this.jwtToken==null) this.loadToken()
  return this.http.get(this.host+"/tickets",{headers: new HttpHeaders({'authorization':this.jwtToken})})
}

loadToken(){
  this.jwtToken = localStorage.getItem('token')
}
logout(){
  this.jwtToken=null;
  localStorage.removeItem('token')
}
isAdmin(){
  for (let r of this.roles){
    if (r.authority=="SUPERADMIN") return true
  }
  return false
}

saveTask(task){

  return this.http.post(this.host+"/saveTasks",task,{headers:new HttpHeaders({'authorization':this.jwtToken})})
}
}
