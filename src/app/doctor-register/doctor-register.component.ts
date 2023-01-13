import { Component, Inject, OnInit } from '@angular/core';
import { Doctorclass } from '../doctorclass';
import { DoctorserviceService } from '../doctorservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  model:any;
  document: Document;
  form:FormGroup;
  doctor:Doctorclass;
  
  constructor(@Inject (DOCUMENT) document:Document, private router:Router,private formBuilder:FormBuilder,private doctorservice:DoctorserviceService) {
    this.doctor = new Doctorclass();
    this.document=document; this.model=Doctorclass; this.form = this.formBuilder.group({
    name:['',Validators.required],
    categeory:['', Validators.required],
    mobile_number:['',Validators.required],
    timings:['', Validators.required],
    experience:['',Validators.required],
    fee:['', Validators.required],
    password:['', Validators.required],
    address:['',Validators.required]
})}

   onSubmit() {
    this.doctorservice.save(this.doctor).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/doctor-login']);
  }


}
