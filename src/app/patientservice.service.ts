import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/patientdata';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.usersUrl);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.usersUrl, patient);
  }
}
