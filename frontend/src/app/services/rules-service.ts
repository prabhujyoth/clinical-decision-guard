import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RulesDataResponse } from '../models/rules.model';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  http = inject(HttpClient);
  getRulesData() {
    return this.http.get<RulesDataResponse>(`http://localhost:8080/api/v1/rules/`);
  }
}
