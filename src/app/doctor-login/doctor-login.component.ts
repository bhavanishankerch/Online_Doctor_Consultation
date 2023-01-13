import { Component, OnInit , Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';

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

  
  constructor(@Inject (DOCUMENT) document:Document, private router:Router,private formBuilder:FormBuilder, private doctorservice:DoctorserviceService) {this.document=document; this.model=Doctor; this.form = this.formBuilder.group({
    email:['',Validators.required],
    password:['', Validators.required],
})}

onSubmit(){


  if(this.model.name == (<HTMLInputElement>document.getElementById("form1")).value && this.model.password == (<HTMLInputElement>document.getElementById("form2")).value){
    this.router.navigate(['/doctor-dashboard'])
  }else{
    alert("Enter Valid  Data");
  }
  }




}
