import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: String = '';
  password: String = '';
  role: String = 'admin';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  show: boolean = false;

  submit() {
    this.role = (<HTMLSelectElement>document.getElementById('role')).value;
    console.log(this.role);

    if (
      this.userName.toLocaleLowerCase() == 'admin' &&
      this.password == 'admin123' &&
      this.role == 'admin'
    ) {
      this.route.navigate(['/list']);
    } else if (
      this.userName.toLowerCase() == 'user' &&
      this.password == 'user123' &&
      this.role == 'user'
    ) {
      alert('User');
    } else {
      (<HTMLLabelElement>document.querySelector('.text-danger')).innerHTML =
        'Invalid Username or Password. Please Try Again!';
    }
  }
}
