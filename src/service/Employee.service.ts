import { Injectable } from '@angular/core';
import{Http,RequestOptions,Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EmployeService {
    private jwtToken = null
url="http://localhost:8082/employes"
  constructor(private http : HttpClient) {
   
   }
   findAll():Observable<any>{
    return this.http.get(this.url)
   }
   delete(id):Observable<any>{
    return this.http.delete(this.url+"/"+id)
   }
   findUserByUsername(username):Observable<any>{
    return this.http.get(this.url+"/"+username)
   }

   saveUser(employe):Observable<any>{
     let header = new Headers({"content-Type": "application/json"})
     header.append('authorization',this.jwtToken)
    return this.http.post(this.url+"/register",JSON.stringify(employe),{headers:new HttpHeaders({'authorization':this.jwtToken})});
   }
  
}
