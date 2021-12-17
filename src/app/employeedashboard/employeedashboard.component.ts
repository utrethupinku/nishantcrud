import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ApiService } from '../sheared/api.service';
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
showMe=false
showyou=true
showdelete=true
  userform: FormGroup

  userlist: any

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.userform = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required])

    })
    this.getApi();
    
  }


  //user form data submittig on server()

  onSubmit() {

    this.service.postApi(this.userform.value).subscribe((res) => {
      console.log("res")
      this.getApi();
      this.userform.reset();
      alert('new user added successfully')

    })
  }


  // for making form editable this below functionis call
  edit(row: any) {
    this.showyou=false
this.showMe=true

this.showdelete=false

    this.userlist.id = row.id
    this.userform.controls['firstname'].setValue(row.firstname);
    this.userform.controls['lastname'].setValue(row.lastname);
    this.userform.controls['email'].setValue(row.email);
    this.userform.controls['mobile'].setValue(row.mobile);

  }
  updateuserdetail() {

    this.userform = new FormGroup({
      firstname: new FormControl(this.userform.value.firstname,[Validators.required]),
      lastname: new FormControl(this.userform.value.lastname,[Validators.required]),
      email: new FormControl(this.userform.value.email, [Validators.required, Validators.email]),
      mobile: new FormControl(this.userform.value.mobile,[Validators.required])

    })
    this.service.editApi(this.userform.value, this.userlist.id).subscribe((res) => {
      alert('updated successfully')
      this.getApi();
    })
    this.userform.reset();
    this.showMe=false;
    this.showyou=true;
    this.showdelete=true
  }

  // this is the function by which we get the user detail from http server and update the value of user detaile in the userlist
  getApi() {

    this.service.getApi().subscribe((res) => {
      console.log("res");
      this.userlist = res
    })

  }
  // for deleting the user input in the form this field is required
  

  onDelete(data) {

    alert('are you sure to delete');
    this.service.deleteApi(data).subscribe((res) => {
      this.getApi();
      
     
    })
    // this.getApi();
  }

  // this field start for the requirement of Validators
  get firstname() {
    return this.userform.get('firstname')
  }

  get lastname() {
    return this.userform.get('lastname')
  }
  get email() {
    return this.userform.get('email')
  }
  get mobile() {
    return this.userform.get('mobile')
  }



}


