import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmenturl: string;

  constructor(private http:HttpClient) {
    this.appointmenturl = "http://localhost:8080/appointment";

   }

   public getData(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.appointmenturl);

   }
   public saveData(appointment: Appointment) {
    console.log(appointment.name+"-"+appointment.email)
    return this.http.post<Appointment>(this.appointmenturl, appointment);

   }
}
