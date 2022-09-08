import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // loggin out and clearing the login token
  logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login']);

  }
}
