import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/doctorsdata';
  }

  public findAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.usersUrl);
  }

  public save(patient: Doctor) {
    return this.http.post<Doctor>(this.usersUrl, patient);
  }
}
