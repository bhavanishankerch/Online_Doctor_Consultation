import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { HomeComponent } from './home/home.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';

const routes: Routes = [
  { path: '',   redirectTo: '/patient-login', pathMatch: 'full' },
  { path:"patient-register", component:PatientRegisterComponent },
  { path:"patient-login", component:PatientLoginComponent },
  { path:"doctor-login", component:DoctorLoginComponent},
  { path:"doctor-register", component:DoctorRegisterComponent},
  { path:"app-home", component:HomeComponent},
  { path:"doctor-dashboard", component:DoctorDashboardComponent},
  { path:"app-bookappointment", component:BookappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
