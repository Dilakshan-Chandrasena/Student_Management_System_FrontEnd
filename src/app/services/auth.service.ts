import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public authorizeUser(email:string){
   return  this.http.get('http://localhost:8080/getuser/' + email)
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
