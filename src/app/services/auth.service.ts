import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
// Getting user details based on given log in credentials by using GET request.Returs a object(User) from the database
  public authorizeUser(email:string){
   return  this.http.get('http://localhost:8080/getuser/' + email)
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
