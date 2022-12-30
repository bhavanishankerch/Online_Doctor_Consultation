import { Component, Inject, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {


  ngOnInit(): void {}
  

  patient: Patient;
  document: Document;
  form:FormGroup;
  model:any;

  constructor(@Inject (DOCUMENT) document:Document,
    private router: Router, 
        private patientservice: PatientserviceService,private formBuilder:FormBuilder) {
    this.patient = new Patient();
    this.document=document; this.model=Patient; this.form = this.formBuilder.group({
      patient_name:['',Validators.required],
      email_id:['', Validators.required],
      contact:['',Validators.required],
      password:['', Validators.required],
})
  }

  onSubmit() {
    this.patientservice.save(this.patient).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/patient-login']);
  }

  }
