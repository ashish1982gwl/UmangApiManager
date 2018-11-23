import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentListService {

  constructor(private http: HttpClient) { }
  private _url: string = "/assets/data/deparmentList.json";


  getDepartmentsList() {
    return this.http.get(this._url).pipe(
      retry(0), map(data => {
        console.log("data get from webservice :" + JSON.stringify(data)
      );
        return <IdepartmentList[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong ;)');
      })
    );
  }
}

export interface IdepartmentList {
 
  departmentId: string;
  departmentName: string;
  departmentImageUrl: string;
}