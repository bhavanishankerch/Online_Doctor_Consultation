import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';


@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  public list:any;
  appointment:Appointment;

  constructor(private appointmentservice:AppointmentService) { 
    this.appointment = new Appointment; 
  }

  ngOnInit(): void {
    this.appointmentservice.getData()
    .subscribe(res=>{
      this.list = res;
    })
  }

}
