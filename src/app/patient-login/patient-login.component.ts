import { Component, Inject, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientserviceService } from '../patientservice.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {




  ngOnInit(): void {
    this.patientservice.findAll().subscribe(data => {
      this.model = data;
    })
  }

  model:any;
  document: Document;
  form:FormGroup;


  constructor(
  private patientservice:PatientserviceService, private router:Router,private formBuilder:FormBuilder) {this.document=document; this.model=Patient; this.form = this.formBuilder.group({
        email_id:['',Validators.required],
        password:['', Validators.required],
  })}
  
  onSubmit(){
  

  if((<HTMLInputElement>document.getElementById('email_id')).value === this.model.email_id   || (<HTMLInputElement>document.getElementById('password')).value ===  this.model.password  ){
    this.router.navigate(['/app-home'])
  }else{
    alert("Enter Valid  Data");
  }
  }

}

