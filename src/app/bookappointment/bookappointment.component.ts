import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  public list:any;
  appointment: Appointment;
  form:FormGroup;

  constructor(private appointmentservice:AppointmentService,private formBuilder:FormBuilder,private router: Router) { 
    this.appointment = new Appointment();
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {}

  onSubmit(){
    this.appointmentservice.saveData(this.appointment).subscribe(res=>(console.log(res)));
    this.router.navigate(['home']);
  }

 

}
