import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctorName = 'Dr. John Doe';
  specialization = 'Surgeon';
  appointments = [    { date: '2022-03-01', time: '9:00 AM', patientName: 'Jane Doe' },    { date: '2022-03-01', time: '10:00 AM', patientName: 'John Smith' },    { date: '2022-03-02', time: '2:00 PM', patientName: 'Bob Johnson' },  ];
  patients = [
    { name: 'Jane Doe', dob: '01/01/1980', history: 'Treatment for flu' },
    { name: 'John Smith', dob: '03/05/1985', history: 'Broken arm surgery' },
    { name: 'Bob Johnson', dob: '06/22/1990', history: 'Regular check-ups' },
    ];
  updateDoctorInfo() {
    // update doctor information in the database
  }

  rescheduleAppointment(appointment: any) {
    // your code
  }

  viewPatientHistory(patient: any) {
    // view patient history logic
  }
}
