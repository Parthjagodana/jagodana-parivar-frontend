import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/constants';
import { Village } from '../models/village.model';
import { Results } from '../models/results.model';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root',
})
export class VillageService {
  private baseUrl = `${API_URL}/user`;

  constructor(private http: HttpClient) {}

  memberList(params: any) {
    let query = new HttpParams();

    Object.keys(params).forEach((key) => {
      if (params[key]) {
        query = query.append(key, params[key]);
      }
    });

    return this.http.get<Results<Member[]>>(this.baseUrl, { params });
  }

  memberInfo(params: any) {
    return this.http.get<Results<Member>>(`${this.baseUrl}/${params.memberId}`);
  }

  villageList() {
    return this.http.get<Results<Village[]>>(`${this.baseUrl}/home-towns`);
  }

  bloodGroupsList() {
    return this.http.get<any>(`${this.baseUrl}/blood-groups`);
  }
}
