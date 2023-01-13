import { Component, Inject, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientserviceService } from '../patientservice.service';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  username: any;
  password : any;
  errorMessage = 'Invalid Credentials';
  successMessage: any;
  invalidLogin = false;
  loginSuccess = false;
  patient: Patient;


  ngOnInit(): void {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,) {
      this.patient = new Patient();

  }
  
  onSubmit(){
    
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/app-home']);
    }, 
    () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
    );
  }

}

