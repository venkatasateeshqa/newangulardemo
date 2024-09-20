import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/account';

@Injectable({
  providedIn: 'root'
})
export class LoanserachService {

  constructor(private httpClient: HttpClient) {}

  searchAccount(accountnumber: any): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'accountinput': accountnumber,
        'companyname': 'Naade',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    console.log("From Service");
    return this.httpClient.get('http://localhost:8080/api/searchAccount/jpa', httpHeaders);
  }
}
