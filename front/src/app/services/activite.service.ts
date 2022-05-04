import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {

  headers: new HttpHeaders({

    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  private url = 'http://localhost:3001';

  constructor(

    private http: HttpClient

  ) {}

  sendActivite(){

    return this.http.post(`${this.url}/ajouteractivite`, httpOptions);
  
  }

  sendLieu(){

    return this.http.post(`${this.url}/ajouterlieu`, httpOptions);

  }

  sendEtat(){

    return this.http.post(`${this.url}/ajouteretat`, httpOptions);

  }

  sendParticipant(){

    return this.http.post(`${this.url}/ajouterparticipant`, httpOptions);

  }
}
