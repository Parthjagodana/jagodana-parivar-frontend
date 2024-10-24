import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${API_URL}/auth/`;

  constructor(private http: HttpClient) { }

  login(params: any) {
    return this.http.post<any>(`${this.baseUrl}login`, params);
  }

  verifyOtp(params: any) {
    return this.http.post<any>(`${this.baseUrl}verify`, params);
  }
}
