import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class InstallmentsService {

  constructor(
    private http: HttpClient
  ) { }

  getInstallments() {
    return this.http.get<any>(ENDPOINTS.getURLinstallments);
  }
}
