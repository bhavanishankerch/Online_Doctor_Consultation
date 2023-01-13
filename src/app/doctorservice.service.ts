import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Doctorclass } from './doctorclass';
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

  public findAll(): Observable<Doctorclass[]> {
    return this.http.get<Doctorclass[]>(this.usersUrl);
  }

  public save(patient: Doctorclass) {
    return this.http.post<Doctorclass>(this.usersUrl, patient);
  }

  getAll(doctor:Doctorclass){
    console.log(this.searchUrl);
    let params = new HttpParams();
    params=params.append("category",doctor.categeory);
    return this.http.get<Doctorclass[]>(this.searchUrl,{params:params});
    }

}
