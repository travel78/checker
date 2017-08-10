import {Component, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import 'rxjs/Rx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private http: Http,private router: Router) {
  }

  ngOnInit() {
  }

   login(event,username,password) {
    // event.preventDefault();
    // let body = JSON.stringify({username, password});
    //  console.log(body);
     // const contentHeaders = new Headers();
    // contentHeaders.append('Accept', 'application/json');
    // contentHeaders.append('Content-Type', 'application/json');
     let body = `username=${username}&password=${password}`;
     console.log(body);
     let contentHeaders = new Headers();
     contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          console.log('call from response');
          const sss = response.text();
          console.log(sss);
          this.router.navigate(['shopping-list']);

          localStorage.setItem('id_token', response.json().id_token);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}
