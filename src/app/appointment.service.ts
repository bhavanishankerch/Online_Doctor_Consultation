import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmenturl: string;

  bookappointmenturl: string;

  constructor(private http:HttpClient) {
    this.appointmenturl = "http://localhost:8080/appointment";
    this.bookappointmenturl = "http://localhost:8080/bookappointment";

   }

   public getData(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.appointmenturl);

   }
   public saveData(_appointment:Appointment) {
    return this.http.post<Appointment>(this.bookappointmenturl, Appointment);

   }
}
