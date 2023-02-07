import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionComponent } from './reception/reception.component';
import { PatientComponent } from './patient/patient.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: 'doctor', component: DoctorComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'reception', component: ReceptionComponent }, 
    { path: 'booking', component: ReceptionComponent }, 
  ]}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DoctorComponent,
    ReceptionComponent,
    PatientComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
