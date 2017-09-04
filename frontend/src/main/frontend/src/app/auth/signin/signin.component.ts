import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import 'rxjs/Rx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage: String;

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
    this.errorMessage = '';
  }

  login(event, myusername, mypassword) {
    event.preventDefault();

    const contentHeaders = new Headers();
    let body = "myusername=" + myusername + "&mypassword=" + mypassword;
    contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('/login', body, {headers: contentHeaders})
      .subscribe(
        response => {
          console.log('call from response');
          const sss = response.json();
          console.log(sss);
          this.router.navigate(['shopping-list']);
          // localStorage.setItem('id_token', response.json().id_token);
          // console.log(localStorage.getItem('id_token'));
        },
        error => {

          console.log(error.text());
          this.errorMessage = 'Не правильний логін або пароль';
          this.router.navigate(['signin']);
        }
      );
  }
}
