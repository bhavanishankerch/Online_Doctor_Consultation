import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  ngOnInit(): void {}
  

  patient: Patient;

  constructor(private patientService: PatientserviceService) {
    this.patient = new Patient();
  }

  onSubmit() {
    this.patientService.save(this.patient).subscribe(result => {
      console.log(result);
    });

  }}
