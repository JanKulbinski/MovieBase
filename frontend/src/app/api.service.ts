import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL;

  constructor(private http: HttpClient) {
    this.baseURL = "http://localhost:5000";
  }

  public login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<string>(this.baseURL + "/login", { username, password }, httpOptions)
  }

  public logout(token) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token
        })
      };
      return this.http.get(this.baseURL + "/logout", httpOptions)
  } 

  public register(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<string>(this.baseURL + "/register", data, httpOptions)
  }

  public status(token) {
    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.get(this.baseURL + "/status", httpOptions)
  }
}