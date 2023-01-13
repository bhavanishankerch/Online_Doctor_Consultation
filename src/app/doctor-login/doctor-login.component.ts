import { Component, OnInit , Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctorclass } from '../doctorclass';
import { DoctorserviceService } from '../doctorservice.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  ngOnInit(): void {
    this.doctorservice.findAll().subscribe(data => {
      this.model = data;
    })
  }

  public model:any;
  document: Document;
  form:FormGroup;

  username: any;
  password : any;
  errorMessage = 'Invalid Credentials';
  successMessage: any;
  invalidLogin = false;
  loginSuccess = false;

  
  constructor(@Inject (DOCUMENT) document:Document, private router:Router,private formBuilder:FormBuilder, private doctorservice:DoctorserviceService,private authenticationService: AuthenticationService,) {this.document=document; this.model=Doctorclass; this.form = this.formBuilder.group({
    email:['',Validators.required],
    password:['', Validators.required],
})}

onSubmit(){
    
  this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
    this.router.navigate(['/doctor-dashboard']);
  }, 
  () => {
    this.invalidLogin = true;
    this.loginSuccess = false;
  }
  );
  }




}
