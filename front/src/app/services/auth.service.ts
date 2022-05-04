import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {

  headers: new HttpHeaders({

    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3001';

  constructor(

    private http: HttpClient
  ) { }

  roleData(){

    return this.http.get(`${this.url}/countrole`, httpOptions).toPromise().then((data => {
      return data;
    }))
  }
}
