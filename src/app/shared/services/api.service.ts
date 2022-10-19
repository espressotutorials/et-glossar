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

  /**
   * Newsletter registration
   * @param email type: string
   * @param lang type: string
   * @param givenName type: string
   * @param familyName type: string
   */
  newsletterRegistration(email: string, lang: string, givenName?: string, familyName?: string): Observable<any> {
    const url = `${this.apiUrl}api/newsletter/subscribe?locale=${lang}`;
    const body = {
      email: email,
    };

    return this.http.post<any>(url, body);
  }

}
