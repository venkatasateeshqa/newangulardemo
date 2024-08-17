import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {


  userNameBehaviour=new BehaviorSubject<string>('Neoteric');

  emitName(name:any):void{
    this.userNameBehaviour.next(name);
  }

  public apiUrl = 'http://localhost:8080/api/saveUser';

  constructor(private http: HttpClient) { } //constructor injection Angular will creates the HttpCLient so we need to call httpclient soo we create constructor 

  learnObservable():Observable<string>{

    return new Observable<string>(observer => {
      console.log('observer executed');
      setTimeout(() => observer.next('neoteric'),6000);
      observer.next('from custom observer');



    });
  }
  saveUser(user: any) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname':'Neoteric',
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body
        'Accept': 'application/json'
        
      })
    };
    console.log('data in service'+JSON.stringify(user));

    return this.http.post(this.apiUrl, user,httpOptions);
    }
}
