import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  private baseUrl = `${API_URL}/user`;

  constructor(private http: HttpClient) { }

  memberList() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  villageList() {
    return this.http.get<any>(`${this.baseUrl}/home-towns`);
  }

  bloodGroupsList() {
    return this.http.get<any>(`${this.baseUrl}/blood-groups`);
  }
}
