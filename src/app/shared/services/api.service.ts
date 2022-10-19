import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../injection/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient,
  ) { }

  /**
   * Get data from api
   * @param path type: string
   */
  getData(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`);
  }

}
