import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private usersUrl: string;
  searchUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/doctorsdata';
    this.searchUrl = "http://localhost:8080/getcategeory"
  }

  public findAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.usersUrl);
  }

  public save(patient: Doctor) {
    return this.http.post<Doctor>(this.usersUrl, patient);
  }

  getAll(doctor:Doctor){
    console.log(this.searchUrl);
    let params = new HttpParams();
    params=params.append("category",doctor.categeory);
    return this.http.get<Doctor[]>(this.searchUrl,{params:params});
    }

}
