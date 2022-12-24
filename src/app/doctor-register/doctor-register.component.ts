import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  doctor: Doctor;

  constructor(private doctorservice: DoctorserviceService) {
    this.doctor = new Doctor();
  }

  onSubmit() {
    this.doctorservice.save(this.doctor).subscribe(result => {
      console.log(result);
    });


}}
