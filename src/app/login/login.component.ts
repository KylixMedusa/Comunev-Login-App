import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  underlineColor: '#38d39f';
  login = 'true';
  registershowing: boolean = false;
  sidetitle = 'Hello, Friend!';
  sidep1 = 'Enter your personal details';
  sidep2 = 'and start journey with us';
  sidebutton = 'SIGN UP';
  logintitle = 'Sign in';
  loginbutton = 'SIGN IN';
  profile_image: String | ArrayBuffer = '/assets/avatar.svg';
  name: string;
  email_user: string;
  password_user: string;
  constructor() {
  }

  ngOnInit(): void {
  }
  addfocus(event){
    event.srcElement.parentElement.parentElement.classList.add("focus");
  }
  addblur(event){
    if(event.srcElement.value == '')
    {
      event.srcElement.parentElement.parentElement.classList.remove("focus")
    }
  }
  login_register() {
    var node = document.getElementById('side--content');
    var node2 = document.getElementById('login--content');
    if (this.login == 'true') {
      node.classList.add('change1');
      node2.classList.add('change2');
      node.classList.remove('change3');
      node2.classList.remove('change4');
      setTimeout(() => {
        this.registershowing = true; this.sidetitle = 'Welcome Back!';
        this.sidep1 = 'To keep connected with us please';
        this.sidep2 = 'login with your personal info';
        this.sidebutton = 'SIGN IN';
        this.logintitle = 'Create Account';
        this.loginbutton = 'SIGN UP';
      }, 500);
      this.login = 'false';
    }
    else {
      node.classList.add('change3');
      node2.classList.add('change4');
      node.classList.remove('change1');
      node2.classList.remove('change2');
      setTimeout(() => {
        this.registershowing = false;
        this.sidetitle = 'Hello, Friend!';
        this.sidep1 = 'Enter your personal details';
        this.sidep2 = 'and start journey with us';
        this.sidebutton = 'SIGN UP';
        this.logintitle = 'Sign In';
        this.loginbutton = 'SIGN IN';
      }, 500);
      this.login = 'true';
    }
  }
  viewpic(file: File) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = event => {
      this.profile_image = reader.result;
    }
  }
  resize() {
    var width = window.innerWidth;
    var node = document.getElementById('side--content');
    var node2 = document.getElementById('login--content');
    if (width < 760) {
      node.classList.remove('change1');
      node2.classList.remove('change2');
      node.classList.remove('change3');
      node2.classList.remove('change4');
    }
    else {
      if (this.registershowing) {
        node.classList.add('change1');
        node2.classList.add('change2');
        setTimeout(() => {
          this.registershowing = true; this.sidetitle = 'Welcome Back!';
          this.sidep1 = 'To keep connected with us please';
          this.sidep2 = 'login with your personal info';
          this.sidebutton = 'SIGN IN';
          this.logintitle = 'Create Account';
          this.loginbutton = 'SIGN UP';
        }, 500);
        this.login = 'false';
      }
    }
  }

}
