import { Component, OnInit } from '@angular/core';
import { Doctorclass } from '../doctorclass';
import { DoctorserviceService } from '../doctorservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public list:any;
  doctors: Doctorclass[]=[];
  navigate:any;
  doctor:Doctorclass;
  


  constructor(private doctorservice:DoctorserviceService) { 
    this.doctor = new Doctorclass(); 
  }

  ngOnInit(): void {
    this.doctorservice.findAll().subscribe(res=>{this.list=res;})
  }

  categeorydata(doctor:Doctorclass){
    console.log('categeorydata',doctor.categeory);
    this.doctorservice.getAll(doctor).subscribe(data => {this.doctors=data;});
  }

  getCategeory(){
    console.log('getCategeory' ,this.doctor.categeory);
   this.categeorydata(this.doctor);
  }




}
