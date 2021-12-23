

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../sheared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
    })
  }
  signup() {
    console.log(this.signupForm.value);
    this.service.postSign(this.signupForm.value).subscribe((res) => {

    })
    alert('user sign up successfull')
    this.router.navigate(['login'])
  }
  get Name() {
    return this.signupForm.get('Name')
  }

  get mail() {
    return this.signupForm.get('mail')
  }
  get password() {
    return this.signupForm.get('password')
  }
  get mobile() {
    return this.signupForm.get('mobule')
  }
 
}
