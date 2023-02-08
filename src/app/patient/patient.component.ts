import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  message: string='';
  messagep: string=''
  patient = {
    name: '',
    dob: '',
  };
  selectedDoctor: any;
  doctors = [
    { name: 'Dr. Smith', specialisation: 'Cardiology' },
    { name: 'Dr. Johnson', specialisation: 'Orthopedics' },
    { name: 'Dr. Doe', specialisation: 'Pediatrics' },
  ];

  bookAppointment(doctor: any) {
    
    this.message = `Appointment booked successfully with ${doctor.name}`;
  }

  updateInformation(patient: any) {
       this.messagep=`Patient information updated successfully ${patient}`;
  }
}