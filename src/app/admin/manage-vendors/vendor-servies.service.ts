import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorServiesService {


  constructor(private http: HttpClient) { }
  private _url: string = "/assets/data/VendorList.json";


  getVendorList() {
    return this.http.get(this._url).pipe(
      retry(0),
      map(data => {
        console.log("data get from webservice :" + JSON.stringify(data)
        );
        return <IVendorList[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong ;)');
      })
    );
  }
}

export interface IVendorList {

  vendorId: string;
  vendorName: string;
  ApplicationServices: string;
  status: string;
  RegisteredDate: string;
}





