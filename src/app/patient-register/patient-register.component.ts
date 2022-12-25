import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  ngOnInit(): void {}
  

  patient: Patient;

  constructor(
    private router: Router, 
        private patientservice: PatientserviceService) {
    this.patient = new Patient();
  }

  onSubmit() {
    this.patientservice.save(this.patient).subscribe(result => this.gotoUserList());
    this.patientservice.save(this.patient).subscribe(result => alert("Registered Successfully!"));
  }

  gotoUserList() {
    this.router.navigate(['/patient-login']);
  }

  }
