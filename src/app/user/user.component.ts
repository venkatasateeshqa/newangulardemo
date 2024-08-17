import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  name:string ='Angular Demo';
  value : string ='';

  subject=new Subject<string>();

  @Output() 

  myEvent : EventEmitter<string> =new EventEmitter();
  
  constructor(private userRegister: UserregisterService){
    this.subject.subscribe(data =>{
      console.log('from subject subscribe data value'+data);
    })

    console.log('from constructor'); 

  }

  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''

  };
  register(form: any):void {

    this.subject.next('testing subject in angular1  '+this.userDetails.name);
    this.subject.next('testing subject in angular2  '+this.userDetails.name);
    this.subject.next('testing subject in angular3  '+this.userDetails.name);

    this.myEvent.emit(this.userDetails.name);

    this.userRegister.learnObservable().subscribe(
      data =>{
        console.log('custom learn observable subscription');
        this.value=data;
      }
    );
    var response= this.userRegister.saveUser(this.userDetails);
   response.subscribe(response=>{
    console.log(" from subscribe of observable"+JSON.stringify(response));

   }, error=>{
    console.log(" from  subscribe of observable Error");

   });

    console.log(" registration is inprogess"+JSON.stringify(this.userDetails)+"response"+response);
  
  }

}
