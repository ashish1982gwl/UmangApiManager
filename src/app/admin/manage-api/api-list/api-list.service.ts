import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as myGlobals from '../../../GlobalServices/Globals';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  constructor(private http: HttpClient) { }

  getAllDept() {
    let url = myGlobals.serviceDomain + "admin/deparmnet/list";
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    }

    console.log("localStorage.getItem('access_token') :" + localStorage.getItem('access_token'));
    return this.http.get(url, httpOptions).pipe(
      retry(0), map(data => {
        console.log("data get from ApiListService webservice :" + JSON.stringify(data));
        return <ResponseInterface[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong ;)');
      })
    );
  }
  getListByDepartment(deptName) {
    let url = myGlobals.serviceDomain + "admin/deparmnet/list/" + deptName;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    }
    return this.http.get(url, httpOptions).pipe(
      retry(0), map(data => {
        console.log("data get from ApiListService webservice departmentWise :" + JSON.stringify(data));
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