import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientserviceService } from './patientservice.service';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { HomeComponent } from './home/home.component';
import { FormDirective } from './form.directive';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    HomeComponent,
    FormDirective,
    DoctorDashboardComponent,
    BookappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PatientserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
