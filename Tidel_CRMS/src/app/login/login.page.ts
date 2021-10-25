import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	postData = {
    username: '',
    password: ''
   };




  constructor(
  private router: Router,
  ) { }

  ngOnInit() {
  }

  validateInputs() {
let username = this.postData.username.trim();
let password = this.postData.password.trim();
return (
this.postData.username &&
this.postData.password &&
username.length > 0 &&
password.length > 0
);
}

}
