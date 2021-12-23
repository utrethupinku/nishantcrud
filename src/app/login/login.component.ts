import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ApiService } from '../sheared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  data: any;
  person: any;
  constructor(private service: ApiService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
    


  }
  signin() {
    this.http.get<any>("http://localhost:3000/comments").subscribe((res) => {
      console.log(res);

      const user = res.find((a: any) => {
        return a.mail == this.loginForm.value.username && a.password == this.loginForm.value.password
      })
      if (user) {
        alert(' User login successfully !!')
        this.loginForm.reset()
        this.router.navigate(['dashboard'])
      }
      else {
        alert('user not found !!')
      }
    },err=>{
alert("somthings went wrong !!")
    } )
   
  }
}
function req(req: any, String: StringConstructor, res: Object) {
  throw new Error('Function not implemented.');
}

function item(item: any, arg1: string) {
  throw new Error('Function not implemented.');
}

