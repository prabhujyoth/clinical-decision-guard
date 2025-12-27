export interface Patient {
  pid: number;
  pname: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
}

export interface LabResult {
  labCode: string;
  value: number;
  takenAt: string;
}

export interface PatientDataResponse {
  success: boolean;
  data: {
    patient: Patient;
    allergies: string[];
    labs: LabResult[];
    recentOrders: any[];
  };
}
