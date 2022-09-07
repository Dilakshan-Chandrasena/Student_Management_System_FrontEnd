import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string="";
  constructor(private router:Router, private authService:AuthService ) { }
  loginFailed:string='';
  user:any;
  ngOnInit(): void {
  }

  login(){
    this.authService.authorizeUser(this.email)
      .subscribe(data=> this.user=data)
    this.check();
  }

  public check(){
    if(this.user !=null){
      if(this.password === this.user.password){
        localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        this.user.role=="admin"? localStorage.setItem('userType','admin') : localStorage.setItem('userType','user');
  
        this.router.navigate(['dashboard'])
      }else{
        this.loginFailed="Invalid Password"
      }
    }else{
      this.loginFailed="Invalid Email or Password";
    }

  }

}
