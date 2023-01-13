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

  appointment: Appointment;
  form:FormGroup;

  constructor(private appointmentservice:AppointmentService,private formBuilder:FormBuilder,private router: Router) { 
    this.appointment = new Appointment();
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {}

  onClick(){
    this.appointmentservice.saveData(this.appointment).subscribe(result => {
      console.log(result),alert('Booked Successfully');
      this.router.navigate(['app-home'])
    });
  }

}
