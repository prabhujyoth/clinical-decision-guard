import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PatientDataResponse } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientHeaderService {
  http = inject(HttpClient);
  getPatientData(patientId: number) {
    return this.http.get<PatientDataResponse>(`http://localhost:8080/api/v1/patients/${patientId}`);
  }
}
