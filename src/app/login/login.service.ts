import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as myGlobals from '../GlobalServices/Globals';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(login, password) {
    let url = myGlobals.serviceDomain + "login";
    let requestJson = {
      /*  
        "password": password,
        "userName": login
        */
      "userName": 'admin',
      "password": 'admin1234'
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(url, requestJson, httpOptions).pipe(
      retry(0), map(data => {
        console.log("data get from webservice :" + JSON.stringify(data));
        return <ResponseInterface[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong ;)');
      })
    );
  }

}

export interface ResponseInterface {
  "statusInfo": string;
  "data": any[];
}