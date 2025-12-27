import { Component, inject } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { PatientHeaderService } from '../../services/patient-header-service';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-patient-header',
  imports: [
    NzInputNumberModule,
    FormsModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
    NzAlertModule,
  ],
  templateUrl: './patient-header.html',
  styleUrl: './patient-header.scss',
})
export class PatientHeader {
  patientId = 0;
  patientData!: Patient | null;
  patientAllergies: string[] = [];
  patientService = inject(PatientHeaderService);
  message = inject(NzMessageService);
  handleGetPatientData(event: KeyboardEvent) {
    if (event.key === 'Tab' && this.patientId !== 0) {
      this.getPatientData();
    }
  }

  getProfileType() {
    if (!this.patientData?.hasOwnProperty('gender')) {
      return 'U';
    }
    const type = this.patientData.gender === 'Male' ? 'M' : 'F';
    return type;
  }

  getPatientData() {
    this.patientService.getPatientData(this.patientId).subscribe({
      next: (res) => {
        this.patientData = res.data.patient;
        this.patientAllergies = res.data.allergies;
      },
      error: (err) => {
        this.patientData = null;
        this.patientAllergies = [];
        this.message.create('error', err.error.message);
      },
    });
  }
}
