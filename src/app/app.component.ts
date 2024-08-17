import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangulardemo';
  fullNameFromChild: string ='';

  constructor(private router:Router, private userRegister:UserregisterService){

    this.userRegister.userNameBehaviour.subscribe(data=>{
      this.fullNameFromChild=data;
      console.log('form appcomponent subscribe service');
    })

  }

  register(){
    console.log('form register');
    this.router.navigate(['register']);
    

  }

  forgotpassword(){
    console.log('from forgotpassword');
    this.router.navigate(['forgotpassword']);
    
  }
  login(){
    console.log('form login');

  }
}
