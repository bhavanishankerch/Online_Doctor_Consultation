import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public list:any;
  doctors: Doctor[]=[];
  navigate:any;
  doctor:Doctor;
  


  constructor(private doctorservice:DoctorserviceService) { 
    this.doctor = new Doctor(); 
  }

  ngOnInit(): void {
    this.doctorservice.findAll().subscribe(res=>{this.list=res;})
  }

  categeorydata(doctor:Doctor){
    console.log('categeorydata',doctor.categeory);
    this.doctorservice.getAll(doctor).subscribe(data => {this.doctors=data;});
  }

  getCategory(){
    console.log('getCategeory' ,this.doctor.categeory);
   this.categeorydata(this.doctor);
  }




}
