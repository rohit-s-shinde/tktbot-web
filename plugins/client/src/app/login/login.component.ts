import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrientService } from '../orient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  OrientService: any;
  name: string;
  password: string;
  constructor(private router: Router) { }
  ngOnInit() {
    this.OrientService.command(
      'SELECT FROM A',
      (res) => {
        const body = res.json();
        console.log(body);
      },
      // tslint:disable-next-line:no-shadowed-variable
      (e) => {
        console.log(e);
      });
  }

  loginUser(e) {
    const uname = ((document.getElementById('username') as HTMLInputElement).value);
    const pass = ((document.getElementById('password') as HTMLInputElement).value);

    if (uname === 'ranjit' && pass === '1234') {
      this.name = uname;
      this.password = pass;
      this.router.navigate(['dashboard']);
    }

  }

}
